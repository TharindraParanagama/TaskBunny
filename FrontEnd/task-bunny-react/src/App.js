import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import ProviderPage from "./Pages/ProviderPage";
import ClientPage from "./Pages/clientPage";
import ProviderTasks from "./Pages/tasksOfProvider";
import "./App.css";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import RegisterPage from "./components/register/RegisterPage";
import Clienttask from "./components/ClientComponent/Clienttask";
import TaskPage from "./components/tasks/TaskPage";
import TaskView from "./components/tasks/TaskView";
import CategoryPage from "./components/categories/CategoryPage";
import ClientTaskPage from "./components/ClientComponent/ClientTaskPage";
import ClientFeedback from "./components/ClientComponent/ClientFeedback";
import ProviderFeedback from "./components/ClientComponent/ProviderFeedback";
import AdminUsersPage from "./components/admin/AdminUsersPage";
import AdminTaskPage from "./components/admin/AdminTaskPage";
import Navbar from "./components/common/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Navbar className="container" />
      <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/providerfeedback" component={ProviderFeedback} />
          <Route path="/admin-user" component={AdminUsersPage} exact />
          <Route path="/admin-task" component={AdminTaskPage} exact />
          <Route path="/" component={Clienttask} exact />
          {/* <Route component={NotFoundPage} /> */}

          {/* <Route path="/ROLE_PROVIDER">
            <ProviderPage />
          </Route> */}

          <Route path="/ROLE_CLIENT">
            <ClientPage />
          </Route>
          <Route path="/ROLE_ADMIN"></Route>
          <Route path="/provider tasks">
            <ProviderTasks />
          </Route>
          <Route path="/tasks" component={TaskPage} />
          <Route path="/task/:id" component={TaskView} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/createtask" component={Clienttask} />
          <Route path="/viewtask" component={ClientTaskPage} />
          <Route path="/clientfeedback" component={ClientFeedback} />
        </Switch>
        {/* <Footer /> */}
      </div>
      
    </div>
  );
}

export default App;

/* There are two ClientTask components connected to two different routes */
