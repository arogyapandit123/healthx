import {useContext, useState } from 'react'
import { Box, Container, Grid, Typography, TextField, Checkbox, Button, InputAdornment, FormControlLabel, IconButton } from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import LockIcon from '@mui/icons-material/Lock';
import CardItem from "../../Common/CardItem";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authentication/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Validations from '../../Constants/validations';

const SignUp = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [initialDisabled, setInitialDisabled] = useState(true)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { register } = useContext(AuthContext)

  const [signupDetails, setSignupDetails] = useState({})
  const [errorDetails, setErrorDetails] = useState({
    name: false,
    email: false,
    password: false,
  })
  const [errorHelperText, setErrorHelperText] = useState({
    name: 'Name is not correct',
    email: 'Email should be in correct format',
    password: 'Password should contain number, character and special.',
  })

  const handleSignupDetails = (e) => {
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
    setSignupDetails(() => (
      {
        ...signupDetails,
        [e.target.name]: e.target.name !== 'isTerms' ? e.target.value : e.target.checked
      }
    ))
  }

  const handleSignup = () => {
    console.log('Sigup user', signupDetails)
    register(signupDetails)
    history.push('/success')
  }

  const resetErrorDetails = () => {
    setErrorDetails(() => ({
      name: false,
      email: false,
      password: false,
    }))
  }

  const isDisabled = () => {
    return initialDisabled || Object.values(errorDetails).includes(true)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <CardItem className="theme-registration-container" sx={{ borderRadius: '16px' }}>
              <Typography variant="h6" className="theme-registration-section__title" sx={{ mt: '31px', mb: 3 }}>Getting Started</Typography>
              <Typography variant="body2" className="theme-registration-section__subtitle" sx={{ mb: 6 }}>Create an account to continue!</Typography>
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
                  className="registration-input"
                  id="outlined-required"
                  placeholder="Your Email"
                  defaultValue=''
                  name="email"
                  helperText={errorDetails.email ? errorHelperText.email : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon sx={{ color: 'var(--theme-icon-color)' }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleSignupDetails}
                />
                <TextField size="large"
                  required
                  error={errorDetails.name}
                  className="registration-input"
                  id="outlined-required"
                  placeholder="Your Name"
                  defaultValue=""
                  name="name"
                  helperText={errorDetails.name ? errorHelperText.name : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CatchingPokemonIcon sx={{ color: 'var(--theme-icon-color)' }} />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleSignupDetails}
                />
                <TextField size="large"
                  required
                  error={errorDetails.password}
                  className="registration-input"
                  id="outlined-required"
                  placeholder="Create Password"
                  defaultValue=""
                  helperText={errorDetails.password ? errorHelperText.name : ''}
                  name="password"
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
                  onChange={handleSignupDetails}
                />
                <div className="ap-flex ap-jcsb ap-aic">
                  <div className="ap-flex ap-aic">
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<Typography variant="body2" className="theme-registration-section__label">I agree to the Terms & Conditions</Typography>}
                      labelPlacement="end"
                      name="isTerms"
                      onChange={handleSignupDetails}
                    />
                  </div>
                </div>
                <Button onClick={handleSignup} sx={{ width: '100%', my: '18px', height: '58px', borderRadius: '8px' }} variant="contained" className="theme-button__primary" disabled={isDisabled()}>Sign Up</Button>
                <div className="ap-flex ap-jcc">
                  <Typography variant="body2" className="theme-registration-section__label">Already have an account? <Link to="/signin"><span style={{ color: 'var(--theme-font-color__link)' }}>Sign in</span></Link></Typography>
                </div>
              </Box> 
            </CardItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default SignUp