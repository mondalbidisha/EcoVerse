import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Challenge from './pages/Challenge';
import Actions from './pages/Actions';
import Action from './pages/Action';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/action/:id" element={<Action />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;