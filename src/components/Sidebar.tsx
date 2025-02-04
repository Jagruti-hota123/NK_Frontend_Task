import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { HiMiniSparkles } from "react-icons/hi2";
import { IoIosArrowUp, IoLogoSlack } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiCopySimpleFill } from "react-icons/pi";
import { RiCoupon2Fill } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import Menu from "./menu";

const Sidebar = () => {

    const [isOpen, setOpen]= useState<boolean>(false)
    return (
        <>
            <aside className="w-[15vw] bg-black md:w-[18vw]  min-h-screen  shadow-md p-4 relative  hidden lg:flex lg:flex-col">
                <div className="flex justify-between items-center mb-8 border-b border-gray-900 pb-4 text-white">
                    <div className="flex gap-2 items-center">
                        <IoLogoSlack className="text-lg cursor-pointer" />
                        <h1>Neo UI</h1>

                    </div>
                    <MdOutlineKeyboardArrowDown  className="text-xl"/>
                </div>
                <div className="flex flex-col gap-4 mb-8 text-sm font-medium text-white">
                    <div className="flex gap-2 items-center justify-start
            ">
                        <HiHome />
                        <h1>Home</h1>
                    </div>
                    <div className="flex gap-2 items-center justify-start
            ">
                        <PiCopySimpleFill />
                        <h1>Events</h1>
                    </div>
                    <div className="flex gap-2 items-center justify-start
            ">
                        <RiCoupon2Fill />
                        <h1>Orders</h1>
                    </div>
                    <div className="flex gap-2 items-center justify-start
            ">
                        <SlSettings />
                        <h1>Settings</h1>
                    </div>

                </div>
                <div className="flex flex-col gap-3 text-sm font-medium mb-2 text-white">
                    <h1 className="text-xs text-gray-300">Upcoming Events</h1>
                    <h1>Bear Hug: Live In Concert</h1>
                    <h1>Six Fingers--DJ Set</h1>
                    <h1>We all Look The Same</h1>
                    <h1>Viking People</h1>
                </div>
                <div className="flex flex-col gap-2 text-sm font-normal absolute bottom-20 left-0 px-4 text-white">
                    <div className="flex gap-3 items-center text-sm">
                        <AiFillQuestionCircle />
                        <h1>Support</h1>
                    </div>
                    <div className="flex gap-3 items-center text-sm  ">
                        <HiMiniSparkles />
                        <h1>Changelog</h1>
                    </div>
                   

                </div>
                <div className="flex items-center  justify-between  p-4 gap-3 mt-4 py-4 absolute bottom-0 left-0 border-t border-gray-900 text-white w-full">
                    <div className="flex gap-2">
                    <img
                            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-md"
                        />
                        <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-sm font-medium">Erica</h1>
                            <p className="text-xs text-gray-400">erica@example.com</p>
                        </div>
                        </div>
                    </div>

                    <IoIosArrowUp
                    className={`cursor-pointer transition-transform ${isOpen ? "rotate-180" : ""}`}
                    onClick={() => setOpen(!isOpen)}
                />

                    {isOpen && <Menu/>}               
                        
                    </div>
            </aside>
        </>
    )
}
export default Sidebar;