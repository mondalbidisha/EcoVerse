import { Layout } from "./Dashboard/Layout";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BadgesEmptyState from "./BadgesEmptyState";
import { Loader } from "./Loader";
import { generateLoadingMessage } from "../util/genericUtils";
import UserBadgesLayout from "./UserBadgesLayout";

const BadgeLayout = () => {
    const navigate = useNavigate();
    const [badges, setBadges] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const loggedInUser = localStorage.getItem('user') as any;
    const userId = JSON.parse(loggedInUser)["id"];

    const getUserBadges = async () => {
      if(userId) {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/${userId}`);
        setBadges(response.data.user.UserBadges);
        setIsLoading(false);
      } else {
        navigate('/login');
      }
    }

    useEffect(() => {
        if(isLoading) {
          getUserBadges() 
        }
    }, [])

    return (
      <Layout>
        <div className="min-h-screen grid grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 pt-10 pb-10">
          <div className="text-center text-slate-100 text-3xl font-medium uppercase opacity-90 tracking-[4px] md:mb-5">
            Badges Earned
          </div>
          {
              isLoading 
              ?
                <Loader 
                  message={generateLoadingMessage()}
                />
              :
                badges.length == 0
                ?
                  <BadgesEmptyState />
                :
                  <div className="px-20">
                    <UserBadgesLayout badges={badges}/>
                  </div>
          }
        </div>
      </Layout>
    );
  };
  
  export default BadgeLayout;