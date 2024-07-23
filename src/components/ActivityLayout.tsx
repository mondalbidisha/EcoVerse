import { useEffect, useState } from 'react';
import { Layout } from './Dashboard/Layout';
import ActivityCards from './StatCards/ActivityCards';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from './Loader';
import { DataTable } from './DataTable';
import { UserAction } from '../constants/types';
import { generateLoadingMessage } from '../util/genericUtils';

const ActivityLayout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [userActions, setUserActions] = useState<UserAction[]>([]);

  const getUserData = async () => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const userObj = JSON.parse(loggedInUser);
      const response = await axios.get(`${BACKEND_URL}/api/v1/user/${userObj.id}`);
      setUserDetails(response.data.user);
      setUserActions(response.data.user.UserAction);
      setIsLoading(false);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (isLoading) {
      getUserData();
    }
  }, [userDetails, userActions]);

  return (
    <Layout>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 p-10">
        <div className="text-center text-slate-100 text-3xl font-medium uppercase opacity-90 tracking-[4px] mb-5">
          Activity Log
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row">
          {isLoading ? (
            <Loader message={generateLoadingMessage()} />
          ) : (
            <>
              <ActivityCards userDetails={userDetails} />
              {userActions.length > 0 ? (
                <div className="w-full min-h-[200px] md:mx-3 mt-5">
                  <DataTable userActions={userActions} />
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ActivityLayout;
