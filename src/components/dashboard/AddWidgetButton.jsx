import { Plus } from "lucide-react";
import { toggleModal } from "../../store/slices/modalStateSlice";
import { useDispatch } from "react-redux";

const AddWidgetButton = ({ categoryName }) => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => {
                dispatch(
                    toggleModal({
                        modalToToggle: "addWidgetModal",
                        category: categoryName,
                    })
                );
            }}
            className="cursor-pointer flex justify-center items-center m-2 bg-white rounded-md text-gray-500 p-2 transition duration-150 ease-in-out hover:scale-105 hover:transition-transform hover:bg-blue-500 hover:text-white">
            <span className="mr-2">Add Widget</span>
            <Plus size={18} />
        </button>
    );
};

export default AddWidgetButton;
