import {
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from '../Pages/Dashboard';
import PatientRegistration from "../Pages/PatientRegistration";
import Lineup from "../Pages/Lineup";
import Scan from "../Pages/Scan";
import ScanReport from '../Pages/Scan/Pages/ScanReport';
import ScanAwaitingList from '../Pages/Scan/Pages/ScanAwaitingList';
import Insight from "../Pages/Insights";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/Signup";
import ErrorPage from "../error-page";
import Root from "./root";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Dashboard />,
    children: [],
  },
  {
    path: '/patient-registration',
    element: <PatientRegistration />,
    children: [],
  },
  {
    path: '/line-up',
    element: <Lineup />,
    children: [],
  },
  {
    path: '/scan',
    element: <Scan />,
    children: []
  },
  {
    path: '/scan-report',
    element: <ScanReport />,
    children: []
  },
  {
    path: '/scan-awaiting-list',
    element: <ScanAwaitingList />,
    children: []
  },
  {
    path: '/insight',
    element: <Insight />,
    children: []
  },
  {
    path: '/signin',
    element: <SignIn />,
    children: []
  },
  {
    path: '/signup',
    element: <SignUp />,
    children: []
  }
]);

export default routes
