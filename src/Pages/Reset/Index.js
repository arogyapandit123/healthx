import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Container, Grid, Typography, TextField, Checkbox, Button, FormControlLabel, InputAdornment, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CardItem from "../../Common/CardItem";
import { AuthContext } from "../../Context/Authentication/AuthProvider";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Validations from '../../Constants/validations';
import LeftArrow from '../../Assets/Img/Common/icon-chevron-left.svg';

const ResetPassword = () => {
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
    history.push('/verify-email')
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
              <Typography variant="h6" className="theme-registration-section__title" sx={{ mt: '31px', mb: 3 }}>Forgot password?</Typography>
              <Typography variant="body2" className="theme-registration-section__subtitle" sx={{ mb: 6 }}>Enter your details to recieve a reset link</Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 4, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField size="large"
                  required
                  error={errorDetails.email}
                  id="outlined-required"
                  className="registration-input"
                  placeholder="Your Email"
                  defaultValue=""
                  name="email"
                  helperText={errorDetails.email ? errorHelperText.email : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon sx={{ color: 'var(--theme-icon-color)' }}/>
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleSiginDetails}
                />
                <Button onClick={handleSignin} sx={{ width: '100%', my: '18px', height: '58px',  borderRadius: '8px' }} variant="contained" className="theme-button__primary">Submit</Button>
                <div className="ap-flex ap-jcc">
                  <Typography variant="body2" className="theme-registration-section__label">
                    <Link to="/signin">
                      <span style={{ color: 'var(--theme-font-color__link)'}}>
                        <img
                          src={LeftArrow}
                          srcSet={LeftArrow}
                          alt='left arrow'
                          loading="lazy"
                          style={{ paddingRight: '6px'}}
                        /> Back to Sign In
                      </span>
                    </Link>
                  </Typography>
                </div>
              </Box> 
            </CardItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ResetPassword