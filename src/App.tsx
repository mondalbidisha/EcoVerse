import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Challenge from './pages/Challenge';
import Actions from './pages/Actions';
import Action from './pages/Action';
import Badge from './pages/Badge';
import { onMessageListener } from './firebase-config';
import { toast, ToastContainer } from 'react-toastify';
import Message from './components/Message';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const loggedInUser = localStorage.getItem('user') as string;
  const user = JSON.parse(loggedInUser);

  onMessageListener()
    .then((payload: any) => {
      payload.notification.image = 'eco-verse.png';
      toast(<Message notification={payload.notification} />);
    })
    .catch((err) => console.log('failed: ', err));

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
          {user && user.id ? <Route path="/" element={<Dashboard />} /> : <Route path="/" element={<Signin />} />}
        </Routes>
      </BrowserRouter>
      <Analytics />
      <ToastContainer />
    </>
  );
}

export default App;
