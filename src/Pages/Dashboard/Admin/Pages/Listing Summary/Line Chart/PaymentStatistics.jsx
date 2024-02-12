import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PaymentStatistics = ({payments}) => {
  const [monthlyData, setMonthlyData] = useState([]);

  // Function to group payments by month and calculate total amount for each month
  const processData = (data) => {
    const monthlyPayments = data.reduce((acc, payment) => {
      const transactionDate = new Date(payment.transaction_date);
      const month = transactionDate.getMonth(); // Get month index (0-11)
      const year = transactionDate.getFullYear();
      const monthKey = `${year}-${month + 1}`; // Generate month key in format "YYYY-MM"
      
      // Add payment amount to existing total or initialize with the amount
      acc[monthKey] = (acc[monthKey] || 0) + payment.price;
      return acc;
    }, {});

    // Convert the object into an array of objects with month and amount
    const result = Object.keys(monthlyPayments).map((key) => ({
      month: key,
      amount: monthlyPayments[key],
    }));

    return result;
  };

  useEffect(() => {
    // Process payment data when component mounts
    setMonthlyData(processData(payments));
  }, [payments]);

  return (
    <div style={{ width: '100%' }}>
      <h4>Payment Statistics</h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={monthlyData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentStatistics;
