import { ChevronRight } from "lucide-react";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-2 mx-0 w-full">
            <div className="flex items-center ml-3 mb-3 sm:mb-0">
                <a
                    className="text-gray-500 hover:text-black hover:border-b-2 transition duration-150 ease-in-out"
                    href="/">
                    Home
                </a>
                <ChevronRight size={18} />
                <a className="font-bold" href="/">
                    Dashboard V2
                </a>
            </div>
            <NavbarActions />
        </div>
    );
};

export default Navbar;
