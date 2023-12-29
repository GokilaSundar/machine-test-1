import { useState } from "react";
import { Switch } from "@headlessui/react";
import PieCharts from "../common/PieCharts";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import TableToggle from "./TableToggle";
const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="border-2 bg-white border-gray-300 rounded-[4px] relative">
      <div className="pl-2 flex justify-between py-2 border-b-2 text-slate-600 font-bold">
        <span>Ad Insights</span>{" "}
        <span className="pr-2">
          <QuestionMarkCircleIcon
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>

      <div className=" w-full ">
        <div>{isEnabled && <PieCharts />}</div>
        <div>{!isEnabled && <TableToggle />}</div>
      </div>
      <div className="absolute right-0 bottom-2">
        <Switch checked={isEnabled} onChange={setIsEnabled}>
          <div className="flex mt-2 justify-end">
            <span className=" bg-white rounded-full  border  h-9 w-[68px]  mr-[40px] flex">
              <span
                className={`block h-8 w-8 ml-[1.5px] mt-[1.5px] rounded-full transition duration-300 ease-in-out transform  ${
                  isEnabled ? "bg-blue-500 translate-x-full" : "bg-blue-500"
                } `}
              ></span>
            </span>
          </div>
        </Switch>
      </div>
    </div>
  );
};
export default Toggle;
