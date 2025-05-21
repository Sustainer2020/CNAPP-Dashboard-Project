const Input = ({
    value,
    setValue,
    children,
    inputType,
    dashboardData,
    placeholder,
    name,
    hoverEffect = false,
    isChecked,
    widget,
    applyMargins = true,
}) => {
    return (
        <label
            className={`flex justify-start items-center px-2 mx-3 sm:mx-4 bg-gray-100 rounded-md border-2 border-gray-300 has-focus-within:border-sky-500 ${
                applyMargins ? "my-4" : ""
            } ${
                hoverEffect
                    ? " transform duration-150 ease-in-out hover:bg-gray-200 hover:scale-x-105"
                    : ""
            }`}>
            {inputType === "checkbox" ? (
                <input
                    className="p-4 my-3 outline-0 mr-3 w-5 h-5"
                    name={name}
                    type="checkbox"
                    id={widget.id}
                    checked={isChecked}
                    onChange={() => {
                        setValue(widget.id);
                    }}
                />
            ) : (
                ""
            )}
            {children}
            {inputType === "text" ? (
                <input
                    className="p-2 outline-0 w-full"
                    name={name}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    required
                />
            ) : (
                ""
            )}
            {inputType === "select" ? (
                <select
                    className="px-1 py-2 sm:px-2 outline-0 w-full"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        console.log("Value Changed to", e.target.value);
                    }}
                    required>
                    {dashboardData.map((category, index) => {
                        return (
                            <option
                                key={`${category.name.toLowerCase()}_${index}_widgetModalOptions`}
                                value={category.name}>
                                {category.name}
                            </option>
                        );
                    })}
                </select>
            ) : (
                ""
            )}
        </label>
    );
};

export default Input;
