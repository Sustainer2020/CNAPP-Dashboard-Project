import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../../store/slices/searchQuerySlice";
import Input from "../common/Input";
import { Search, BellRing, CircleUserRound } from "lucide-react";

const NavbarActions = () => {
    const dispatch = useDispatch();
    const handleSearch = (searchValue) => {
        dispatch(
            updateSearchQuery({
                search: searchValue,
            })
        );
    };

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 flex items-center justify-center md:justify-end ">
            <Input
                name="searchWidget"
                setValue={handleSearch}
                inputType="text"
                placeholder="Search anything..."
                applyMargins={false}>
                <Search size={18} color="gray" />
            </Input>
            <div className="flex items-center">
                <button className="cursor-pointer mx-1 sm:mx-3 hover:bg-gray-100 p-3 rounded-full transition duration-150 ease-in-out hover:scale-105 hover:transition-transform text-gray-500 hover:text-black">
                    <BellRing />
                </button>
                <button className="cursor-pointer flex justify-center items-center font-bold mx-1 sm:mx-3 hover:bg-gray-100 p-3 rounded-full transition duration-150 ease-in-out hover:scale-105 hover:transition-transform text-gray-500 hover:text-black">
                    <CircleUserRound className="mr-1" />
                    <span className="hidden sm:block text-sm md:text-lg text-nowrap">
                        User Name
                    </span>
                </button>
            </div>
        </div>
    );
};

export default NavbarActions;
