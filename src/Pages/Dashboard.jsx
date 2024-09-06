import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TimeSelector from "../components/TimeSelector";
import { fetchDummyData } from "../services/dataService";


const Dashboard = () => {
  const [selectedTime, setSelectedTime] = useState("1 Week");
  const [data, setData] = useState({
    totalUsers: 0,
    newLeads: 0,
    closedDeals: 0,
    openTickets: 0,
    pieData: [30, 50, 20],
    lineData: [100, 200, 300, 400, 500],
  });

  const handleTimeSelect = async (timeRange) => {
    setSelectedTime(timeRange);
    const fetchedData = await fetchDummyData(timeRange);
    console.log(fetchedData, "fetchedData");
    const totalUsers =
      fetchedData.users.active +
      fetchedData.users.inactive +
      fetchedData.users.new;
    console.log(fetchedData.pieData, "fetchedData.pieData");

    setData({
      totalUsers: totalUsers || 1500,
      newLeads: fetchedData.leads.converted || 300,
      closedDeals: fetchedData.leads.lost || 120,
      openTickets: fetchedData.openTickets.open || 50,
      pieData: fetchedData.pieData || [30, 50, 20],
      lineData: fetchedData.lineData || [100, 200, 300, 400, 500],
    });
  };

  useEffect(() => {
    handleTimeSelect(selectedTime);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
          <TimeSelector onSelectTime={handleTimeSelect} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Cards title="Total Users" value={data.totalUsers} />
          <Cards title="New Leads" value={data.newLeads} />
          <Cards title="Closed Deals" value={data.closedDeals} />
          <Cards title="Open Tickets" value={data.openTickets} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PieChart key={selectedTime + "-pie"} data={data.pieData} />
          <LineChart key={selectedTime + "-line"} data={data.lineData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
