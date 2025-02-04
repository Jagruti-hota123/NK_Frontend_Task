import { overviewData } from "@/data";

const Cards = () => {
    type overViewtype = {
        title: string;
        value: string;
        change: string;
        changeType: string;
      };
  return (
   <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                 {overviewData?.map((item: overViewtype, index: number) => {
                   return (
                     <div key={index} className="border-t border-gray-800 p-4">
                       <div className="flex flex-col gap-4 text-white justify-start ">
                         <h1 className="text-xs font-medium ">{item.title}</h1>
                         <h1 className="text-2xl font-semibold">{item.value}</h1>
                         <div className="flex gap-2">
                           <h1
                             className={`text-sm font-normal text-green-500 ${
                               item.changeType == "positive"
                                 ? "text-green-300 bg-green-700/30 rounded-md"
                                 : "text-red-500 bg-red-700/40 rounded-md"
                             } `}
                           >
                             {item.change}
                           </h1>
                           <h1 className="text-gray-700 text-sm">
                             from last week
                           </h1>
                         </div>
   
                       
                       </div>
                     </div>
                   );
                 })}
               </div>
  )
}

export default Cards
