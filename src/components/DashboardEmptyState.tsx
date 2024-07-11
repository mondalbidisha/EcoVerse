import { Link } from "react-router-dom";
import ActionTypeCards from "./ActionTypeCards";

const DashboardEmptyState = () => {
    return ( 
        <>
            <div className="text-justify text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] mb-5">
                At EcoVerse, we believe every sustainable action makes a real difference. Though each individual effort may seem small, consistent actions combined with others create a significant impact.
            </div>
            <div className="w-full flex flex-col flex-wrap sm:flex-row">
                <ActionTypeCards />
            </div>
            <div className="text-justify text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] mt-5">
                Given certain circumstances, we have researched and determined an estimated typical impact for each action. While individual impacts may vary, a large number of users allows for these variations to average out.
            </div>
            <div className="w-full grid grid-cols-1">
                <div className="flex flex-col items-center text-center text-slate-100 sm:text-base md:text-2xl font-medium opacity-90 tracking-[2px] m-8">
                    Ready to log your first action? 
                </div>
                <div className="flex flex-col items-center text-center text-slate-100">
                    <Link to="/actions">
                        <span className="homepage-button">
                            <span className="homepage-button-background"></span>
                            <span className="homepage-button-text">Log Action</span>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
  };
  
  export default DashboardEmptyState;