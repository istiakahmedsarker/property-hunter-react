import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const PropertiesStatistics = ({apartment, villa, office, home}) => {

    const data = [
    { name: "Apartment", value: apartment },
    { name: "Villa", value: villa },
    { name: "Office", value: office },
    { name: "Home", value: home },
  ];

  const COLORS = [ "#eb6753", "#e82a2a", "#4343a0", "#ADBC9F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const cellPadding = 360 / data.length * 0.05;
  return (
    
      <div className="h-[350px] w-[500px]">
        <ResponsiveContainer >
          <PieChart
            className="rounded-xl p-6 bg-white"
            
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              innerRadius={5}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  paddingAngle={cellPadding}
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
  
  );
};

export default PropertiesStatistics;