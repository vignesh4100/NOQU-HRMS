// App.jsx
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminLogin from './Layout/AdminLogin';
import Interview from './Pages/Interview-list/Interview';
import Onboard from './Pages/Onboard- list/Onboard';
import Documents from './Pages/Documents-list/Documents';
import Assets from './Pages/Assest-list/Assets';



function App() {
  return (
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<AdminLogin />} />

        <Route
          path="/"
          element={
              <AdminLayout />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/interview" element={<Interview />}></Route>
          <Route path="/onboard" element={<Onboard />}></Route>
          <Route path="/documents" element={<Documents />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
        </Route>
        
      </Routes>
  );
}

export default App;
