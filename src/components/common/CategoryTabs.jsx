const CategoryTabs = ({
    dashboardData,
    activeCategoryPane,
    setActiveCategoryPane,
}) => {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 m-3 md:m-2 w-auto">
            {dashboardData.map((categoryData, index) => {
                return (
                    <a
                        key={`${categoryData.name}_pane_${index}`}
                        className={
                            "mt-2 p-2 sm:p-1 cursor-pointer border-b-2 text-center text-sm lg:text-base " +
                            (activeCategoryPane === categoryData.name
                                ? "font-bold text-blue-700 border-blue-700 hover:text-blue-500 hover:border-blue-500 "
                                : "border-transparent text-gray-500 hover:text-black hover:border-black")
                        }
                        onClick={(e) => {
                            setActiveCategoryPane(e.target.textContent);
                        }}>
                        {categoryData.name}
                    </a>
                );
            })}
        </div>
    );
};

export default CategoryTabs;
