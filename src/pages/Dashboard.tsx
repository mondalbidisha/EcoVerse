import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import { onMessageListener, requestForToken } from "../firebase-config";
import Message from "../components/Message";
import { toast } from "react-toastify";

const Dashboard = () => {
  // const [isTokenFound, setTokenFound] = useState(false);
  // const [loggedInUser, setLoggedInUser] = useState({
  //   id: ""
  // });

  // useEffect(() => {
  //   if(loggedInUser) {
  //     requestForToken(setTokenFound, loggedInUser.id);
  //   } else {
  //     const user = localStorage.getItem('user') as string;
  //     const parsedUser = JSON.parse(user);
  //     setLoggedInUser(parsedUser);
  //   }
  // }, [loggedInUser]);

  // onMessageListener()
  //   .then((payload: any) => { 
  //     payload.notification.image = 'eco-verse.png';
  //     toast(<Message notification={payload.notification} />);
  //   })
  //   .catch(err => console.log('failed: ', err));
    
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <DashboardLayout />
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;