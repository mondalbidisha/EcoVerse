import ProfileBox from "./ProfileBox";

const DashboardLayout = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-1 w-screen h-screen bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 p-10">
          <ProfileBox />
      </div>
    );
  };
  
  export default DashboardLayout;