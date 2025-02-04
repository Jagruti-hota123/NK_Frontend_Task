import { FaUserCircle } from "react-icons/fa";
import { HiMiniLightBulb } from "react-icons/hi2";
import { IoLogOut, IoShieldCheckmarkSharp } from "react-icons/io5";

const Menu = () => {
    return (
        <div className="absolute bottom-14 left-4 bg-gray-700 text-gray-400 rounded-md w-[18vw] p-4 flex flex-col gap-3  h-full z-10 ">
            <div className="flex gap-2 items-center border-b border-gray-400">
                <FaUserCircle />
                <h1 className="">My Account</h1>
            </div>
            <div className="flex gap-2 items-center">
                <IoShieldCheckmarkSharp />
                <h1>Privacy Policy</h1>
            </div>
            <div className="flex gap-2 items-center">
                <HiMiniLightBulb />
                <h1>Share Feedback</h1>
            </div>
            <div className="flex gap-2 items-center border-t border-gray-400 ">
                <IoLogOut />
                <h1>Sign Out</h1>
            </div>

        </div>
    )
}

export default Menu;
