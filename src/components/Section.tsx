import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import Table from "./Table";

const Section = () => {
    const [menu, setMenu]=useState(false)
  return (
    <>
      <nav className="flex justify-between items-center p-4 lg:hidden">
        <RxHamburgerMenu className={`text-white text-lg transition-transform ${menu? "translate-x-full" : ""}`} onClick={()=>setMenu(!menu)
        } />
        {menu && <Sidebar/>}
        <img
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover "
        />
      </nav>
      <div className="bg-gray-900 w-full h-full rounded-xl p-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold text-white">
            Good Afternoon, Erica
          </h1>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-white ">Overview</p>
            <button className="border bg-gray-800 text-white rounded-lg text-xs px-4 py-2">
              Last Week
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <Cards/>
            <div className="text-white">
              <h1 className="mb-5">Recent Orders</h1>
              <Table/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section;
