import { Layout } from "./Dashboard/Layout";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Loader } from "./Loader";
import DashboardContainer from "./DashboardContainer";
import { useNavigate } from "react-router-dom";
import generateLoadingMessage from "../util/genericUtils";
import { User, UserAction } from "../constants/types";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState<User>({
      id: "",
      email: "",
      name: "",
      details: "",
      password: "",
      UserAction: [],
      totalUserActions: 0,
      totalActionPoints: 0,
      totalImpactPoints: 0,
      totalCo2Saved: 0,
      totalWaterSaved: 0,
      totalWasteSaved: 0,
    });
    const [userActions, setUserActions] = useState<UserAction[]>([]);

    const getUserData = async () => {
      const loggedInUser = localStorage.getItem('user');
      if(loggedInUser) {
        const userObj = JSON.parse(loggedInUser);
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/${userObj.id}`);
        setUserDetails(response.data.user);
        setUserActions(response.data.user.UserAction);
        setIsLoading(false)
      } else {
        navigate('/login');
      }
    }

    useEffect(() => {
      if(isLoading) {
        getUserData()
      }
    }, [userDetails])

    return (
      <Layout>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 p-10">
          <div className="text-center text-slate-100 text-3xl font-medium uppercase opacity-90 tracking-[4px] m-5">
            EcoVerse - Dashboard
          </div>
          <div className="w-full">
            {
                isLoading
              ?
                <Loader 
                  message={generateLoadingMessage()}
                />
              : <DashboardContainer 
                  userDetails={userDetails}
                  userActions={userActions}
                />
            }
          </div>
        </div>
      </Layout>
      
    );
  };
  
  export default DashboardLayout;