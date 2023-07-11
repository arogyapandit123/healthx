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
const SignIn = () => {
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
    logIn(loginDetails)
    history.push('/dashboard')
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
              <Typography variant="h6" className="theme-registration-section__title" sx={{ mt: '31px', mb: 3 }}>Sign In</Typography>
              <Typography variant="body2" className="theme-registration-section__subtitle" sx={{ mb: 6 }}>Welcome back, you’ve been missed!</Typography>
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
                <TextField size="large"
                  required
                  error={errorDetails.password}
                  id="outlined-required"
                  className="registration-input"
                  placeholder="Password"
                  defaultValue=""
                  name="password"
                  helperText={errorDetails.password ? errorHelperText.password : ''}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: 'var(--theme-icon-color)' }}/>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff  sx={{ color: 'var(--theme-icon-color)' }}/> : <Visibility  sx={{ color: 'var(--theme-icon-color)' }}/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  onChange={handleSiginDetails}
                />
                <div className="ap-flex ap-jcsb ap-aic">
                  <div className="ap-flex ap-aic">
                    <FormControlLabel 
                      control={<Checkbox />}
                      label={<Typography variant="body2" className="theme-registration-section__label">Remeber Me</Typography>}
                      labelPlacement="end"
                      name="isTerms"
                      onChange={handleSiginDetails}
                    />
                  </div>
                  <div>
                    <Link to="/reset-password"><Typography variant="body2" className="theme-registration-section__label">Forgot Password?</Typography></Link>
                  </div>
                </div>
                <Button onClick={handleSignin} sx={{ width: '100%', my: '18px', height: '58px',  borderRadius: '8px' }} variant="contained" className="theme-button__primary" disabled={isDisabled()}>Login</Button>
                <div className="ap-flex ap-jcc">
                  <Typography variant="body2" className="theme-registration-section__label">Don't have an account yet? <Link to="/signup"><span style={{ color: 'var(--theme-font-color__link)'}}>Sign Up</span></Link></Typography>
                </div>
              </Box> 
            </CardItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default SignIn