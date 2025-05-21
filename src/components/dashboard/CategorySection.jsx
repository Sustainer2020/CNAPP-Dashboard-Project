import { useSelector } from "react-redux";
import WidgetCard from "./WidgetCard";

const CategorySection = ({ categoryName, widgets }) => {
    const searchQuery = useSelector((state) => state.searchQuery.value);

    return (
        <div className="p-5">
            <h3 className="font-bold text-lg mb-4">{categoryName}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {widgets.map((widget) => {
                    return (
                        <WidgetCard
                            key={`${categoryName}_${widget.id}`}
                            heading={widget.title}
                            id={widget.id}
                            chartType={widget.chartType}
                            data={widget.data}
                            categoryName={categoryName}
                        />
                    );
                })}
                {searchQuery === "" ? (
                    <WidgetCard
                        key={`${categoryName}_empty`}
                        categoryName={categoryName}
                    />
                ) : (
                    widgets.length === 0 && (
                        <p className="text-center text-gray-500">
                            No widgets in this category match your search for "
                            {searchQuery}".
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

export default CategorySection;
