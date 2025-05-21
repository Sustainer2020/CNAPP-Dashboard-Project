import { X } from "lucide-react";

const ModalHeader = ({ title, closeModal }) => {
    return (
        <div className="bg-blue-700 px-3 py-2 flex justify-between items-center rounded-t-md">
            <h3 className="text-white text-2xl">{title}</h3>
            <button
                className="rounded-full p-1 text-white transition duration-150 ease-in-out hover:scale-105 hover:transition-transform hover:bg-red-500 hover:text-white"
                onClick={closeModal}>
                <X size={20} />
            </button>
        </div>
    );
};

export default ModalHeader;
