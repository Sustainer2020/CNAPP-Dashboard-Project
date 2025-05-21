import CategorySection from "./CategorySection";
import { useSelector } from "react-redux";

const DashboardCategories = () => {
    const dashboardData = useSelector((state) => state.widgetData.value);
    const searchQuery = useSelector((state) => state.searchQuery.value);

    const filteredCategoryData = dashboardData.map((entry) => {
        const filteredWidgets = entry.widgets.filter((widget) => {
            const title = widget.title.toLowerCase();
            return title.includes(searchQuery.toLowerCase());
        });

        return {
            ...entry,
            widgets: filteredWidgets,
        };
    });
    return (
        <div className="mt-2 w-full h-full">
            {filteredCategoryData.map((entry, index) => {
                return (
                    <CategorySection
                        key={`${entry.name}_${entry.widgets.length}_${index}`}
                        categoryName={entry.name}
                        widgets={entry.widgets}
                    />
                );
            })}
        </div>
    );
};

export default DashboardCategories;
