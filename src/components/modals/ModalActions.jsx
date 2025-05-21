const ModalActions = ({ closeModal, buttonText, transitionEffect = false }) => {
    return (
        <div className="flex items-center mb-6 xl:mb-2 justify-center mx-4">
            <button
                type="submit"
                className={
                    "w-1/3 cursor-pointer m-2 bg-blue-600 text-white rounded-md p-2 hover:scale-105 hover:transition-transform hover:bg-blue-500 " +
                    (transitionEffect
                        ? "transition duration-150 ease-in-out"
                        : "")
                }>
                {buttonText}
            </button>
            <button
                type="button"
                className={
                    "w-1/3 cursor-pointer m-2 bg-white border-1 border-blue-600 rounded-md text-blue-600 p-2 hover:scale-105 hover:transition-transform hover:border-blue-500 hover:bg-gray-200 hover:text-blue-500 " +
                    (transitionEffect
                        ? "transition duration-150 ease-in-out"
                        : "")
                }
                onClick={closeModal}>
                Cancel
            </button>
        </div>
    );
};

export default ModalActions;
