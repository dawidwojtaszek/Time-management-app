"use client";
import DashboardContainer from "../components/dashboard-container";
import { useFirebaseContext } from "../context/firebase";

const Dashboard = () => {
  const { userData, loading } = useFirebaseContext();
  console.log(userData);
  return (
    <div className="w-[1200px] mx-auto p-6">
      <span className="font-bold text-3xl text-white">Dashboard:</span>
      {loading ? "loading.." : <DashboardContainer />}
    </div>
  );
};

export default Dashboard;
