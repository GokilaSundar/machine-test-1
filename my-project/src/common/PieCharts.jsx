// import "./styles.css";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Male", value: 4489 },
  { name: "Female", value: 62118 },
  { name: "Unknown", value: 5175 },
];
const COLORS = ["#0096ff", "#ff823c", "#323c46"];
const value = data.map((item) => item.value);
const name = data.map((item) => item.name);
const totalValue = value.reduce((acc, curr) => acc + curr);
const percent = data.map((item) => parseInt((item.value / totalValue) * 100));

export default function App() {
  return (
   
     
      <div className="">
        <PieChart width={600} height={277}>
          <Legend
            iconType="rect"
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconSize={30}
          />

          <Pie
            data={data}
            cx={190}
            cy={130}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

    
    
  );
}
