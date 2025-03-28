import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./usersignup";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import Dashboard from "./Dashboard";
import Resetingpassword from "./ResetPassword"
import UseraccountCreation from "./CreateAccountModal";
import CreatePlanPage from "./CreatePlan";
import ViewAccountspage from "./ViewAccounts";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup-form" element={<Signup/>} />
        <Route path="/forgot-password-page" element={<ForgotPassword />} />
        <Route path="/reset-password" element={< ChangePassword/>} />
        <Route path="/dashboard-page" element={<Dashboard/>} />
<Route path="/reset-password" element={<Resetingpassword/>} />
<Route path="/user-account-creation" element={<UseraccountCreation/>} />
<Route path="/create-plan-page" element={<CreatePlanPage/>} />
<Route path="/View-Accounts-page" element={<ViewAccountspage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
