const BaseModal = ({ children, modalState, modalType }) => {
    return (
        <div
            className={
                "fixed top-0 bg-black/80 flex justify-center items-center w-full h-full group/form " +
                (modalState.value ? "visible " : "invisible ") +
                (modalType === "customization"
                    ? "justify-end"
                    : "justify-center")
            }>
            <div
                className={
                    "w-full sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-1/3 relative bg-white rounded-t-lg rounded-b-md " +
                    (modalType === "customization"
                        ? " h-full transition duration-400 ease-in-out "
                        : " ") +
                    (modalState.value ? "translate-x-0" : "translate-x-full")
                }>
                {children}
            </div>
        </div>
    );
};

export default BaseModal;
