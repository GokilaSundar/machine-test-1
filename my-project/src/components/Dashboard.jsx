import React from "react";
import Table from "../common/Table";
import Toggle from "../common/Toggle";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 py-10 gap-10 px-5 ">
      <Table />
      <Toggle />
    </div>
  );
};

export default Dashboard;
