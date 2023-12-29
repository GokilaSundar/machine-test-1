import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="bg-white flex text-slate-600 justify-between py-4 px-5 items-center">
      <div className=" text-lg font-extrabold">APP LOGO</div>
      <div>
        <ul className="flex gap-10 font-medium">
          <li>
            <Link to="/">DASHBOARD</Link>
          </li>
          <li>
            <Link to="/CreateAds">CREATE ADS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
