import { ChartNoAxesCombined, X } from "lucide-react";
import CustomPieChart from "../common/CustomPieChart.jsx";
import AddWidgetButton from "./AddWidgetButton.jsx";
import { removeWidget } from "../../store/slices/widgetSlice.js";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/slices/modalStateSlice.js";

const WidgetCard = ({ categoryName, heading, data, chartType, id }) => {
    const dispatch = useDispatch();

    const removeWidgetData = () => {
        dispatch(
            removeWidget({
                id: id,
                category: categoryName,
            })
        );
    };

    const customizationModalToggle = () => {
        dispatch(
            toggleModal({
                modalToToggle: "customizationModal",
                category: categoryName,
            })
        );
    };

    return (
        <div
            onClick={heading ? customizationModalToggle : undefined}
            className="rounded-md group/item relative flex flex-col items-start justify-start bg-white w-full min-h-72 p-4 transition duration-150 ease-in-out hover:scale-105 hover:transition-transform">
            {heading ? (
                <>
                    <h4 className="mb-4 font-bold">{heading}</h4>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            removeWidgetData();
                        }}
                        className="absolute top-4 right-4 visible group-hover/item:visible lg:invisible rounded-full p-1 text-black transition duration-150 ease-in-out hover:scale-105 hover:transition-transform hover:bg-red-500 hover:text-white">
                        <X size={18} />
                    </button>
                    {data.length !== 0 ? (
                        chartType === "pie" ? (
                            <CustomPieChart title={heading} data={data} />
                        ) : (
                            <span className="w-full h-full flex items-center justify-center">
                                {data}
                            </span>
                        )
                    ) : (
                        <div className="flex flex-col w-full items-center justify-center">
                            <ChartNoAxesCombined
                                className="w-48 h-48"
                                strokeWidth={0.5}
                            />
                            <p>No data available!</p>
                        </div>
                    )}
                </>
            ) : (
                <div className="w-full flex justify-center m-auto">
                    <AddWidgetButton categoryName={categoryName} />
                </div>
            )}
        </div>
    );
};

export default WidgetCard;
