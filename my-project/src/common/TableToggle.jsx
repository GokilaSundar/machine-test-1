import {
    ChevronUpDownIcon,
    ChevronDownIcon,
  } from "@heroicons/react/20/solid";
  const adInsights = [
    {
      group: "Male",
      clicks: 348,
      cost: 12528,
      conversations: 42,
      revenue: 62118,
    },
    {
      group: "Female",
      clicks: 692,
      cost: 24912,
      conversations: 35,
      revenue: 5175,
    },
    {
      group: "Unknown",
      clicks: 105,
      cost: 3943,
      conversations: 3,
      revenue: 4489,
    },
    
  ];
  const Table = () => {
    const Clicks = adInsights.map((item) => item.clicks);
    const totalClicks = Clicks.reduce((acc, curr) => acc + curr);
    const cost = adInsights.map((item) => item.cost);
    const totalCost = cost.reduce((acc, curr) => acc + curr);
    const conversations = adInsights.map((item) => item.conversations);
    const totalconversations = conversations.reduce((acc, curr) => acc + curr);
    const revenue = adInsights.map((item) => item.revenue);
    const totalRevenue = revenue.reduce((acc, curr) => acc + curr);
    console.log(totalClicks);
    return (
        <div className=" h-[277px] ">
 <div className="w-full  border-b-2 ">
        <table className="divide-y w-full">
          <thead className="text-slate-600 divide-y-2">
            <tr>
              <th className="justify-start flex gap-1 py-2 pl-2">
                <span>Group</span>
                <span className="flex items-center -mb-1">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </th>
              <th className=" ">
                <div className="flex gap-1 justify-end">
                  <span>Clicks</span>
                  <span className="flex items-center -mb-1">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th className="">
                <div className="flex justify-end">
                  <span>Cost</span>
                  <span className="flex items-center -mb-1">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th className="text-right ">
                <div className="flex gap-1 justify-end">
                  <span>Conversations</span>
                  <span className="flex items-center -mb-1">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
              <th className="pr-2 ">
                <div className="flex gap-1 justify-end">
                  <span>Revenue</span>
                  <span className="flex items-center -mb-1">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-500">
            {adInsights.map((adInsight, index) => (
              <tr key={index} className="">
                <td className="text-left py-2 pl-2">
                  <div className="">{adInsight.group}</div>
                </td>
                <td>
                  <div className="flex justify-end pr-6">{adInsight.clicks}</div>
                </td>
                <td>
                  <div className="flex justify-end pr-5">
                    USD {adInsight.cost}
                  </div>
                </td>
                <td>
                  <div className="flex justify-end pr-6">
                    {adInsight.conversations}
                  </div>
                </td>
                <td className="pr-2">
                  <div className="flex justify-end pr-6">
                    USD {adInsight.revenue}
                  </div>
                </td>
              </tr>
            ))}
            <tr className="bg-slate-100">
              <td className="pl-2 py-2">Total</td>
              <td>
                {" "}
                <div className="flex justify-end pr-6">{totalClicks}</div>
              </td>
              <td>
                {" "}
                <div className="flex justify-end pr-5">USD {totalCost}</div>
              </td>
              <td>
                {" "}
                <div className="flex justify-end pr-6">{totalconversations}</div>
              </td>
              <td>
                {" "}
                <div className="flex justify-end pr-8">USD {totalRevenue}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
     
    );
  };
  
  export default Table;
  