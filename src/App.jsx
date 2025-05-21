import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import AddWidgetModal from "./components/modals/AddWidgetModal.jsx";
import WidgetCustomizationModal from "./components/modals/WidgetCustomizationModal.jsx";

function App() {
    return (
        <div className="relative m-0">
            <Navbar />
            <Dashboard />
            <AddWidgetModal />
            <WidgetCustomizationModal />
        </div>
    );
}

export default App;
