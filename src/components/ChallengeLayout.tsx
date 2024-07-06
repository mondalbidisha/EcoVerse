import { useEffect, useState } from "react";
import { Layout } from "./Dashboard/Layout";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { ActionBox } from "./ActionBox";
import LoaderSVG from "./../assets/loader.svg";
import ToastWrapper from "./ToastWrapper";
import { toast } from "react-toastify";

const ChallengeLayout = () => {
    const navigate = useNavigate();
    const [challenges, setChallenges] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const loggedInUser = localStorage.getItem('user') as any;
    const userId = JSON.parse(loggedInUser)["id"];

    const getAllChallenges = async () => {
      const loggedInUser = localStorage.getItem('user');
      if(loggedInUser) {
        const response = await axios.get(`${BACKEND_URL}/api/v1/challenge`);
        setChallenges(response.data.payload);
        setIsLoading(false);
      } else {
        navigate('/login');
      }
    }

    useEffect(() => {
				if(isLoading) {
					getAllChallenges() 
				}
    }, [])

    const joinChallenge = async (challengeId: string) => {
      const joinChallengeInputs = {
        userId: userId,
        challengeId: challengeId
      }
      try {
        setIsLoading(true);
        const response = await axios.post(`${BACKEND_URL}/api/v1/challenge/join`, joinChallengeInputs);
        if (response && response?.data?.id) {
          toast.success("Challenge enrollment successfull!");
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000)
        } else {
          toast.error('Something went wrong.');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status) {
            toast.error(error.response?.data?.error || 'Something went wrong');
          } else if(error.response?.data?.error) {
            toast.error('Something went wrong');
          }
        } else {
          toast.error('Something went wrong');
        }
      } finally {
        setIsLoading(false);
      }
    }

    return (
      <Layout>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 p-10">
          <div className="text-center text-slate-100 text-3xl font-medium uppercase opacity-90 tracking-[4px] mb-10">
            Sustainability Challenges
          </div>
          <div className="text-center text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] md:px-20 mb-10">
            Challenges are designed for short-term learning, lasting anywhere from a week to several semester. 
            They help you focus on specific actions that support learning goals, environmental objectives, or sustainability milestones. 
            These challenges offer fun, bite-sized learning experiences, especially for tackling real-world issues in sustainability and social justice.
          </div>
          <div className="text-center text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] md:px-20 mb-10">
            Click on a challenge of your choice to join and be the beacon of change !!
          </div>
          <div className="flex flex-col flex-wrap sm:flex-row text-white">
            <div className="w-full md:px-20">
            {
              isLoading 
              ?
                <div className="w-full flex flex-row justify-center mt-5">
                  <img src={LoaderSVG} width={150} height={150} alt="Loading..." />
                </div>
              :
                <>
                  {challenges.map((item: any) => (
                    <div className="my-5 dark">
                      <ActionBox 
                        {...item} 
                        key={item.id} 
                        cta={"Join Challenge"}
                        onClick={() => joinChallenge(item.id)}
                      />
                    </div>
                  ))}
                </>
              }
            </div>
          </div>
        </div>
        <ToastWrapper />
      </Layout>
    );
  };
  
  export default ChallengeLayout;