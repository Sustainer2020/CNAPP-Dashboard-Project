import {
    RefreshCcw,
    EllipsisVertical,
    Clock4,
    ChevronDown,
} from "lucide-react";
import AddWidgetButton from "./AddWidgetButton";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetDashboard } from "../../store/slices/widgetSlice";

const DashboardActions = () => {
    const [animate, setAnimate] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        let timerId = null;
        if (animate) {
            timerId = setTimeout(() => {
                dispatch(resetDashboard());
                setAnimate(false);
            }, 500);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [animate]);

    return (
        <div className="grid grid-cols-auto-fit w-full sm:flex sm:flex-row items-center justify-center sm:justify-end">
            <AddWidgetButton categoryName="CSPM Executive Dashboard" />
            <div className="flex justify-center items-center">
                <button
                    onClick={() => setAnimate(true)}
                    className={`cursor-pointer m-2 bg-white rounded-md text-gray-500 hover:text-black p-2 transition duration-150 ease-in-out hover:scale-105 hover:transition-transform `}>
                    <RefreshCcw
                        className={`${animate ? "animate-spin" : ""}`}
                    />
                </button>
                <button
                    className={`cursor-pointer m-2 bg-white rounded-md text-gray-500 hover:text-black p-2 transition duration-150 ease-in-out hover:scale-105 hover:transition-transform`}>
                    <EllipsisVertical />
                </button>
            </div>
            <div className="col-span-2 sm:col-span-1 flex justify-center items-center m-2 text-purple-900 border-2 rounded-md border-purple-900 bg-white hover:bg-purple-800 hover:text-white transition duration-150 ease-in-out hover:scale-105 hover:transition-transform">
                <button className="cursor-pointer flex justify-center items-center p-1">
                    <Clock4 size={20} />
                    <span className="border-l-2 mx-1 px-1 font-bold">
                        Last 2 Days
                    </span>
                    <ChevronDown size={18} />
                </button>
            </div>
        </div>
    );
};

export default DashboardActions;
