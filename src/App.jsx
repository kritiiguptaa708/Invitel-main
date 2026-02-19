import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import NgoBoard from './pages/NgoBoard';
import Network from './pages/Network';
import Leaderboard from './pages/Leaderboard';
import Donate from './pages/Donate';
import ThankYou from './pages/ThankYou';
import Community from './pages/Community';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Milestones from './pages/Milestones';


// NEW: Import the Subscription Model (SaaS Page)

import SubscriptionModel from './components/SubscriptionModel';



function App() {

  return (

    <Router>

      <div className="app-container">

        <Navbar />

        <Routes>

          {/* Main User Routes */}

          <Route path="/" element={<Landing />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/milestones" element={<Milestones />} />

          <Route path="/profile" element={<Profile />} />

         

          {/* NGO & SaaS Routes */}

          {/* This is the new "Netflix-style" Subscription page for NGOs */}

          <Route path="/subscribe" element={<SubscriptionModel />} />

         

          {/* Community & Mission Routes */}

          <Route path="/hub" element={<Community />} />

          <Route path="/missions" element={<NgoBoard />} />

          <Route path="/network" element={<Network />} />

          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route path="/donate/:id" element={<Donate />} />

          <Route path="/thank-you" element={<ThankYou />} />

        </Routes>

      </div>

    </Router>

  );

}



export default App