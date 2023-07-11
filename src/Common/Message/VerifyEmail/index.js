import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Container, Grid, Typography, TextField, Checkbox, Button, FormControlLabel, InputAdornment, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CardItem from "../../../Common/CardItem";
import { AuthContext } from "../../../Context/Authentication/AuthProvider";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Validations from '../../../Constants/validations';
import VerifyEmailImg from '../../../Assets/Img/Common/verify-email.svg'

const VerifyEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [initialDisabled, setInitialDisabled] = useState(true)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const history = useHistory()
  const { logIn } = useContext(AuthContext)

  const [loginDetails, setLoginDetails] = useState({})
  const [errorDetails, setErrorDetails] = useState({
    email: false,
    password: false,
  })
  const [errorHelperText, setErrorHelperText] = useState({
    email: 'Email should be in correct format',
    password: 'Password should contain number, character and special.',
  })

  const handleSiginDetails = (e) => {
    resetErrorDetails()
    if(initialDisabled) {
      setInitialDisabled(() => false)
    }
    if(e.target.name === 'email' && !Validations.validateEmail(e.target.value)) {
      setErrorDetails(() => ({
        ...errorDetails,
        email: true
      }))
      return
    }
    setLoginDetails(() => (
      {
        ...loginDetails,
        [e.target.name]: e.target.name !== 'isTerms' ? e.target.value : e.target.checked,
      }
    ))
  }

  const handleSignin = () => {
    console.log('Sigin users', loginDetails)
    history.push('/email-otp')
  }

  const resetErrorDetails = () => {
    setErrorDetails(() => ({
      email: false,
      password: false,
    }))
  }

  const isDisabled = () => {
    return  initialDisabled || Object.values(errorDetails).includes(true)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <CardItem className="theme-registration-container" sx={{ borderRadius: '16px' }}>
              <div className="ap-flex ap-jcc">
              <IconButton aria-label="logo" sx={{ height: '129px', width: '129px', pt: '54px', padding: 0}} className="nav-link-logo-icon-button">
                <img
                  src={VerifyEmailImg}
                  srcSet={VerifyEmailImg}
                  alt={'logo'}
                  loading="lazy"
                />
              </IconButton>
              </div>
              <Typography variant="h6" className="theme-registration-section__title" sx={{ mt: '40px', mb: 3 }}>Verify your email</Typography>
              <Typography variant="body2" className="theme-registration-section__subtitle">Welcome back, you’ve been missed!</Typography>
              <Typography variant="body2" className="theme-registration-section__subtitle email">admin@arogyapandit.com</Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 4, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <Button onClick={handleSignin} sx={{ width: '100%', my: '18px', height: '58px',  borderRadius: '8px' }} variant="contained" className="theme-button__primary">Go to mail</Button>
                <div className="ap-flex ap-jcc">
                  <Typography variant="body2" className="theme-registration-section__label">Didn't receive an email? <Link to="/signup"><span style={{ color: 'var(--theme-font-color__link)'}}>Resend</span></Link></Typography>
                </div>
              </Box> 
            </CardItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default VerifyEmail