import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from './Dashboard/Layout';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { Loader } from './Loader';
import AddActionForm from './AddActionForm';
import { Action } from '../constants/types';

const AddActionLayout = () => {
  const [action, setAction] = useState<Action>({
    id: '',
    name: '',
    description: '',
    actionPoints: 0,
    impactPoints: 0,
    co2Saved: 0,
    waterSaved: 0,
    wasteSaved: 0,
    categoryId: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem('user') as any;
  const userId = JSON.parse(loggedInUser)['id'];
  const [challengeId, setChallengeId] = useState(null);

  const getActionData = async () => {
    if (loggedInUser) {
      const response = await axios.get(`${BACKEND_URL}/api/v1/action/${id}`);
      setAction(response.data.payload);
      if (!response.data.payload.categoryId) {
        const userResponse = await axios.get(`${BACKEND_URL}/api/v1/user/challenges/${userId}`);
        const userDetails = userResponse.data.payload[0];
        setChallengeId(userDetails.UserChallenge[0].challengeId);
      }
      setIsLoading(false);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (isLoading) {
      getActionData();
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 p-10 md:py-10 md:px-20">
        {isLoading ? (
          <Loader message={'Hang in there, pulling up action details ...'} />
        ) : (
          <>
            <div className="text-center text-slate-100 text-3xl font-medium uppercase opacity-90 tracking-[4px] mb-10">
              {action?.name}
            </div>
            <div className="text-justify text-slate-100 sm:text-sm md:text-xl font-medium opacity-90 tracking-[2px] md:px-10 mb-5">
              {action?.description}
            </div>
            <div className="text-justify text-slate-100 sm:text-base md:text-xl font-medium opacity-90 tracking-[2px] md:px-10 mb-5">
              Capture the moment, snap a pic, and log your sustainable action to make a big impact today!
            </div>
            <div className="flex flex-col flex-wrap sm:flex-row">
              <AddActionForm action={action} userId={userId} actionId={id} challengeId={challengeId} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default AddActionLayout;
