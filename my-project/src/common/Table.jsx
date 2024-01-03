import {
  ChevronUpDownIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
const adInsights = [
  {
    compaigns: "Cosmetics",
    clicks: 712,
    cost: 4272,
    conversations: 8,
    revenue: 16568,
  },
  {
    compaigns: "Serums",
    clicks: 3961,
    cost: 27331,
    conversations: 115,
    revenue: 362526,
  },
  {
    compaigns: "FaseWash",
    clicks: 9462,
    cost: 76831,
    conversations: 123,
    revenue: 266800,
  },
  {
    compaigns: "Shampoos",
    clicks: 439,
    cost: 2151,
    conversations: 5,
    revenue: 11029,
  },
  {
    compaigns: "Conditioners",
    clicks: 1680,
    cost: 3864,
    conversations: 49,
    revenue: 175245,
  },
  {
    compaigns: "FaseWash 2",
    clicks: 4978,
    cost: 29370,
    conversations: 189,
    revenue: 623106,
  },
];
const Table = () => {
 const[data,setData]= useState(adInsights)
  const handleClick=(e)=>{
    let type = e.target.textContent.toLowerCase();
    const sorted = [...data].sort((a, b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 1))
    setData(sorted);
    // console.log(data)
  }
  const Clicks = adInsights.map((item) => item.clicks);
  const totalClicks = Clicks.reduce((acc, curr) => acc + curr);
  const cost = adInsights.map((item) => item.cost);
  const totalCost = cost.reduce((acc, curr) => acc + curr);
  const conversations = adInsights.map((item) => item.conversations);
  const totalconversations = conversations.reduce((acc, curr) => acc + curr);
  const revenue = adInsights.map((item) => item.revenue);
  const totalRevenue = revenue.reduce((acc, curr) => acc + curr);
  return (
    <div className="overflow-x-scroll border-2 border-gray-300 bg-white rounded-md ">
      <div className="pl-2 flex justify-between py-2 border-b-2 text-slate-600 font-bold">
        <span>Ad Insights</span>{" "}
        <span className="pr-2">
          {" "}
          <QuestionMarkCircleIcon
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>

      <table className="divide-y  w-full">
        <thead className="text-slate-600  ">
          <tr>
            <th onClick={handleClick} className="justify-start flex gap-1 py-2 pl-2">
              <span >Compaigns</span>
              <button  className="flex items-center -mb-1">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </th>
            <th onClick={handleClick}  className=" ">
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
            <th onClick={handleClick}  className="">
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
            <th  onClick={handleClick}  className="text-right ">
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
            <th onClick={handleClick}  className="pr-2 ">
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
          {data.map((adInsight, index) => (
            <tr key={index} className="">
              <td className="text-left py-2 pl-2">
                <div className="">{adInsight.compaigns}</div>
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
          <tr className="bg-slate-100 rounded-b-lg">
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
  );
};

export default Table;
