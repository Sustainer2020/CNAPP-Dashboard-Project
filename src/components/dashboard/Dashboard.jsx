import DashboardActions from "./DashboardActions";
import DashboardCategories from "./DashboardCategories";

const Dashboard = () => {
    return (
        <div className="px-2 pt-6 mx-0 bg-sky-100 min-h-screen">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h2 className="font-bold text-lg sm:ml-3 sm:text-xl text-nowrap text-center">
                    CNAPP Dashboard
                </h2>
                <DashboardActions />
            </div>
            <DashboardCategories />
        </div>
    );
};

export default Dashboard;
