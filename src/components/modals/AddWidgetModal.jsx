import { toggleModal } from "../../store/slices/modalStateSlice";
import { addWidget } from "../../store/slices/widgetSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Input from "../common/Input";
import ModalHeader from "./ModalHeader";
import BaseModal from "./BaseModal";
import ModalActions from "./ModalActions";

const AddWidgetModal = () => {
    const widgetModalState = useSelector(
        (state) => state.modalToggle.addWidgetModal
    );
    const dashboardData = useSelector((state) => state.widgetData.value);

    const [categoryOption, setCategoryOption] = useState(
        "CSPM Executive Dashboard"
    );
    const [widgetTitle, setWidgetTitle] = useState("");
    const [widgetData, setWidgetData] = useState("");

    useEffect(() => {
        setCategoryOption(widgetModalState.category);
    }, [widgetModalState.category]);

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(
            toggleModal({
                modalToToggle: "addWidgetModal",
            })
        );
        setWidgetTitle("");
        setWidgetData("");
        setCategoryOption("CSPM Executive Dashboard");
    };

    const addWidgetData = (e) => {
        e.preventDefault();
        dispatch(
            addWidget({
                category: categoryOption,
                title: widgetTitle,
                data: widgetData,
            })
        );
        closeModal();
    };

    return (
        <BaseModal modalState={widgetModalState} modalType="addWidget">
            <ModalHeader title="Add Widget" closeModal={closeModal} />
            <form onSubmit={addWidgetData} className="px-4 pt-4">
                <Input
                    name="category"
                    value={categoryOption}
                    setValue={setCategoryOption}
                    label="Category"
                    inputType="select"
                    dashboardData={dashboardData}>
                    <span className="font-bold text-center min-w-20 border-r-2 border-gray-300 pr-2">
                        Category
                    </span>
                </Input>
                <Input
                    name="title"
                    value={widgetTitle}
                    setValue={setWidgetTitle}
                    label="Title"
                    inputType="text"
                    placeholder="Widget Title">
                    <span className="font-bold text-center min-w-20 border-r-2 border-gray-300 pr-2">
                        Title
                    </span>
                </Input>
                <Input
                    name="data"
                    value={widgetData}
                    setValue={setWidgetData}
                    label="Text"
                    inputType="text"
                    placeholder="Widget Text">
                    <span className="font-bold text-center min-w-20 border-r-2 border-gray-300 pr-2">
                        Text
                    </span>
                </Input>
                <ModalActions closeModal={closeModal} buttonText="Add" />
            </form>
        </BaseModal>
    );
};

export default AddWidgetModal;
