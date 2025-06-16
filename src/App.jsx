import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";
import SystemCard from "./components/SystemCard";

function App() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!stats) return <div className="loading">Loading stats...</div>;

  return (
    <div className="app-container">
      <h1 className="dashboard-title">⚙️ Real-Time System Dashboard</h1>
      <div className="cards-grid">
        <SystemCard title="System Info" content={[
          `OS: ${stats.os}`,
          `Arch: ${stats.arch}`,
          `Hostname: ${stats.hostname}`,
          `Uptime: ${Math.floor(stats.uptime / 3600)} hours`,
        ]} />
        <SystemCard title="CPU Usage" content={[`${stats.cpuLoad}%`]} />
        <SystemCard title="Memory Usage" content={[
          `${stats.memUsed} GB / ${stats.memTotal} GB`
        ]} />
        <SystemCard title="Disk Usage" content={[
          `${stats.diskUsed} GB / ${stats.diskTotal} GB`
        ]} />
        <SystemCard title="Network I/O" content={[
          `Sent: ${stats.netSent} MB`,
          `Received: ${stats.netRecv} MB`
        ]} />
        <SystemCard title="Battery" content={[
          `${stats.batteryPercent}% - ${stats.batteryStatus}`
        ]} />
      </div>
    </div>
  );
}

export default App;
