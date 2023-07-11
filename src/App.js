import Navbar from "./Common/Navbar";
// import BaseBreadcrumbs from "./Common/Breadcrumbs";
import './App.css'
// import Routes from './Routes/index'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Suspense, lazy, useContext } from "react";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/Signup";
import PatientRegistration from './Pages/PatientRegistration';
import Lineup from "./Pages/Lineup";
import Scan from "./Pages/Scan";
import ScanReport from './Pages/Scan/Pages/ScanReport';
import ScanAwaitingList from './Pages/Scan/Pages/ScanAwaitingList';
import EarlyDetectionReport from './Pages/Scan/earlyDetection/earlyDetectionReport';
import EarlyDetectionAwaitingList from './Pages/Scan/earlyDetection/earlyDetectionAwaitingList';
import GenerationReport from './Pages/Scan/reportGenerations/reportGenerations';
import GenerationsAwaitingList from './Pages/Scan/reportGenerations/reportAwaitingList';
import Insight from "./Pages/Insights";
import { AuthContext } from "./Context/Authentication/AuthProvider";
import ResetPassword from "./Pages/Reset/Index";
import VerifyEmail from "./Common/Message/VerifyEmail";
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from './Assets/Img/Navbar/logo.svg'
import OtpScreen from './Common/Message/OtpScreen';
import SuccessModal from './Common/Message/Success';
import reportGenerationsAwaitingList from "./Pages/Scan/reportGenerations/reportAwaitingList";

const ProtectedRoute = lazy(() => import('./ProtectedRoute'))
const PageNotFound  = lazy(() => import('./Components/PageNotFound'))

function App() {
  const {isSignedIn} = useContext(AuthContext)
  const theme = useTheme()
  return (
    <div className="App" style={{'background-color': theme.palette['--theme-background'][theme.palette.mode]}}>
      <Router>
          <Suspense fallback={<div className='ErrorMessage'>Loading...</div>}>
            <div className={`${isSignedIn ? "theme-app-page__container" : "theme-not-authenticated-background"}`}>
              {!isSignedIn && <IconButton aria-label="logo" sx={{pb: '60px'}} className="nav-link-logo-icon-button">
                  <img
                    src={Logo}
                    srcSet={Logo}
                    alt={'logo'}
                    loading="lazy"
                  />
                </IconButton>
              }
              {isSignedIn && <Navbar /> }
              {/* <BaseBreadcrumbs /> */}
              <Switch>
                <ProtectedRoute path='/dashboard' component={Dashboard} exact />
                <ProtectedRoute path='/patient-registration' component={PatientRegistration} exact />
                <ProtectedRoute path='/line-up' component={Lineup} exact />
                <ProtectedRoute path='/scan' component={Scan} exact />
                <ProtectedRoute path='/scan/scan-enhancement' component={ScanAwaitingList} exact/> 
                <ProtectedRoute path='/scan/scan-enhancement/:patient_id/scan-report' component={ScanReport} exact />
                <ProtectedRoute path='/scan-awaiting-list' component={ScanAwaitingList} exact />
                <ProtectedRoute path='/early/early-awaiting-list' component={EarlyDetectionAwaitingList} exact />

                <ProtectedRoute path='/early/early-awaiting-list/:patient_id/early-detection-report' component={EarlyDetectionReport} exact />
                <ProtectedRoute path='/report/report-awaiting-list' component={GenerationsAwaitingList} exact />
                <ProtectedRoute path='/early/early-awaiting-list/:patient_id/early-detection-report' component={GenerationReport} exact />

                <ProtectedRoute path='/insight' component={Insight} exact />
                <Route path='/success' component={SuccessModal} exact />
                <Route path='/email-otp' component={OtpScreen} exact />
                <Route path='/verify-email' component={VerifyEmail} exact />
                <Route path='/reset-password' component={ResetPassword} exact />
                <Route path='/signin' component={SignIn} exact />
                <Route path='/signup' component={SignUp} exact />
                <Redirect from="/" to="/signin" />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;
