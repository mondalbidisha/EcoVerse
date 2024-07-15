import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Challenge from './pages/Challenge';
import Actions from './pages/Actions';
import Action from './pages/Action';
import Badge from './pages/Badge';
import { useEffect, useState } from 'react';
import { requestForToken, onMessageListener } from './firebase-config';
import { toast, ToastContainer } from 'react-toastify';
import Message from './components/Message';

function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    id: ""
  });

  useEffect(() => {
    if(loggedInUser.id) {
      requestForToken(setTokenFound, loggedInUser.id);
    } else {
      const user = localStorage.getItem('user') as string;
      const parsedUser = JSON.parse(user);
      setLoggedInUser(parsedUser);
    }
  }, [loggedInUser]);

  onMessageListener()
    .then((payload: any) => { 
      payload.notification.image = 'eco-verse.png';
      toast(<Message notification={payload.notification} />);
    })
    .catch(err => console.log('failed: ', err));
    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/action/:id" element={<Action />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/achievements" element={<Badge />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      {isTokenFound && <ToastContainer />}
    </>
  );
}

export default App;