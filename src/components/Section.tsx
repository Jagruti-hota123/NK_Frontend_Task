import { orders, overviewData } from "@/data";

type overViewtype = {
    title: string,
    value: string,
    change: string,
    changeType: string

}
type ordersType = {
    orderNumber: number,
    purchaseDate: string,
    customer: string,
    event: string,
    amount: string
}
const Section = () => {
    return (
        <div className="bg-gray-900 w-full h-full rounded-xl p-8">
            <div className="flex flex-col gap-6">
                <h1 className="text-lg font-semibold text-white">Good Afternoon, Erica</h1>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-white ">Overview</p>
                    <button className="border bg-gray-800 text-white rounded-lg text-xs px-4 py-2">Last Week</button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {overviewData?.map((item: overViewtype, index: number) => {
                            return (
                                <div key={index} className="border-t border-gray-800 p-4">
                                    <div className="flex flex-col gap-4 text-white justify-start ">
                                        <h1 className="text-xs font-medium ">{item.title}</h1>
                                        <h1 className="text-2xl font-semibold">{item.value}</h1>
                                        <div className="flex gap-2">
                                            <h1 className={`text-sm font-normal text-green-500`}>{item.change}</h1>
                                            <h1 className="text-gray-700 text-sm">from last week</h1>
                                        </div>

                                        {/* <h1>{item.changeType}</h1> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-white">
                        <h1 className="mb-5">Recent Orders</h1>

                        <table className="table-auto w-full border-collapse">
                            <thead>
                                <tr className="text-gray-700 border-b border-gray-600">
                                    <th className="px-4 py-2 text-left">Order Number</th>
                                    <th className="px-4 py-2 text-left">Purchase Date</th>
                                    <th className="px-4 py-2 text-left">Customer</th>
                                    <th className="px-4 py-2 text-left">Event</th>
                                    <th className="px-4 py-2 text-left">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((item: ordersType, index: number) => (
                                    <tr key={index} className="text-white border-b border-gray-600">
                                        <td className="px-4 py-4">{item.orderNumber}</td>
                                        <td className="px-4 py-4">{item.purchaseDate}</td>
                                        <td className="px-4 py-4">{item?.customer}</td>
                                        <td className="px-4 py-4">{item.event}</td>
                                        <td className="px-4 py-4">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                </div>



            </div>

        </div>
    )
}
export default Section;