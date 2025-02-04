import { orders } from "@/data"

const Table = () => {
    type ordersType = {
      orderNumber: number;
      purchaseDate: string;
      customer: string;
      event: string;
      amount: string;
    };
  return (
    <>
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
                    <tr
                      key={index}
                      className="text-white border-b border-gray-600"
                    >
                      <td className="px-4 py-4">{item.orderNumber}</td>
                      <td className="px-4 py-4">{item.purchaseDate}</td>
                      <td className="px-4 py-4">{item?.customer}</td>
                      <td className="px-4 py-4">{item.event}</td>
                      <td className="px-4 py-4">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
    </>
  )
}

export default Table
