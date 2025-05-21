import { toggleModal } from "../../store/slices/modalStateSlice";
import { syncModalWidgets } from "../../store/slices/widgetSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ModalHeader from "./ModalHeader";
import BaseModal from "./BaseModal";
import CategoryTabs from "../common/CategoryTabs";
import WidgetVisibilityForm from "./WidgetVisibilityForm";

const WidgetCustomizationModal = () => {
    const customizationModalState = useSelector(
        (state) => state.modalToggle.customizationModal
    );

    const [checkedWidgetList, setCheckedWidgetList] = useState({});

    const [activeCategoryPane, setActiveCategoryPane] = useState(
        "CSPM Executive Dashboard"
    );

    const dashboardData = useSelector((state) => state.widgetData.value);

    // Initialize CheckedWidgetList state any time modal is open or closed.
    useEffect(() => {
        const widgetList = {};
        dashboardData.forEach((categoryData) => {
            // Use set instead of array for faster lookups
            widgetList[categoryData.name] = new Set();
            categoryData.widgets.forEach((widget) => {
                widgetList[categoryData.name].add(widget.id);
            });
        });
        setCheckedWidgetList(widgetList);
    }, [customizationModalState.value]);

    useEffect(() => {
        setActiveCategoryPane(customizationModalState.category);
    }, [customizationModalState.category]);

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(
            toggleModal({
                modalToToggle: "customizationModal",
                category: activeCategoryPane,
            })
        );
    };

    // Refreshes the CheckList when checkbox input changed
    const refreshCheckedList = (widgetId, categoryName) => {
        const categoryWidgetsIds = new Set(checkedWidgetList[categoryName]);
        if (categoryWidgetsIds.has(widgetId)) {
            categoryWidgetsIds.delete(widgetId);
        } else {
            categoryWidgetsIds.add(widgetId);
        }

        setCheckedWidgetList((prevCheckedList) => {
            return {
                ...prevCheckedList,
                [categoryName]: categoryWidgetsIds,
            };
        });
    };

    const batchUpdateWidgets = (e) => {
        e.preventDefault();
        // Converting the non-serializable Set objects to Array before passing to reducer function in order to avoid error.
        const finalWidgetList = {};

        // Traverse the checkedWidgetList object
        for (const category in checkedWidgetList) {
            // Creating array from the set
            finalWidgetList[category] = Array.from(checkedWidgetList[category]);
        }

        dispatch(syncModalWidgets(finalWidgetList));
        e.target.reset();
        closeModal();
    };

    return (
        <BaseModal
            modalState={customizationModalState}
            modalType="customization">
            <ModalHeader title="Customize Widgets" closeModal={closeModal} />
            <p className="w-full m-3">
                Personalize your dashboard by adding the following widgets
            </p>
            <CategoryTabs
                dashboardData={dashboardData}
                activeCategoryPane={activeCategoryPane}
                setActiveCategoryPane={setActiveCategoryPane}
            />
            <WidgetVisibilityForm
                onSubmitHandler={batchUpdateWidgets}
                dashboardData={dashboardData}
                activeCategoryPane={activeCategoryPane}
                refreshCheckedList={refreshCheckedList}
                checkedWidgetList={checkedWidgetList}
                closeModal={closeModal}
            />
        </BaseModal>
    );
};

export default WidgetCustomizationModal;
