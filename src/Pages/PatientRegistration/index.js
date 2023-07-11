import { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, MenuItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { Gender, Countries, Occupations, ScanRegion, ScanType } from '../../Mock/Insight-options';
import PatientSuccessModal from '../../Common/Message/Success/patient-success';
import Modal from '@mui/material/Modal';

const details = {
  firstname: '',
  lastname: '',
  email: '',
  age: '',
  gender: '',
  phone: '',
  medicare_number: '',
  country: '',
  state: '',
  city: '',
  zipcode: '',
  address: '',
  doctor_first_name: '',
  doctor_last_name: '',
  refferal_doctor_name: '',
  scan_type: '',
  scan_region: '',
  occupation: '',
  date: '', //2017-05-24
  time: '', // 07:30
}
const PatientRegistration = () => {
  const theme = useTheme();
  const [patientDetails, setPatientDetails] = useState({...details})
  const [previewDetails, setPreviewDetails] = useState({...details})
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handlePatientDetails = (e) => {
    setPatientDetails(() => (
      {
        ...patientDetails,
        [e.target.name]: e.target.value
      }
    ))
  }
  
  const handleRegisterPatient = () => {
    console.log('registerPatient', patientDetails)
    setShowSuccessModal(true)
    setPreviewDetails({...patientDetails})
    setPatientDetails({...details})
  }

  const handlePreviewDetails = () => {
    setPatientDetails({...previewDetails})
    setPreviewDetails({...details})
  }

  const handleClose = () => {
    setShowSuccessModal(false)
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" className="theme-title__typography--primary" sx={{mb: '35px', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Add Patient</Typography>
      <div className="line-seperator"></div>
      <Box sx={{ flexGrow: 1, mt: '40px', mb: '56px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="theme-input-section__title" sx={{mb: 1, color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Patients Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6.5}>
            <Grid container spacing={3.75}>
              <Grid item xs={12} md={6}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>First Name</Typography>
                  <TextField 
                    size="small"
                    required
                    placeholder="First name"
                    value={patientDetails.firstname}
                    name="firstname"
                    onChange={handlePatientDetails}
                  />
                </Box>  
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Last name</Typography>
                  <TextField 
                    size="small"
                    required
                    placeholder="Last name"
                    value={patientDetails.lastname}
                    name="lastname"
                    onChange={handlePatientDetails}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Email</Typography>
                  <TextField size="small"
                    required
                    placeholder='Email'
                    value={patientDetails.email}
                    name="email"
                    onChange={handlePatientDetails}
                  />
                </Box>  
              </Grid>
              <Grid item xs={12} md={6}>
              <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Age</Typography>
                  <TextField size="small"
                    required
                    placeholder='Age'
                    value={patientDetails.age}
                    name="age"
                    onChange={handlePatientDetails}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  />
                </Box> 
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Gender</Typography>
                  <TextField size="small"
                    required
                    select
                    name="gender"
                    placeholder='Select Gender'
                    value={patientDetails.gender}
                    onChange={handlePatientDetails}
                  >
                    {Gender.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box> 
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Phone</Typography>
                  <TextField size="small"
                    required
                    placeholder='0000-0000-0000'
                    value={patientDetails.phone}
                    name="phone"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handlePatientDetails}
                  />
                </Box> 
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Medicare Number</Typography>
                  <TextField size="small"
                    required
                    placeholder='1 3 5 7 8 5 7 9'
                    value={patientDetails.medicare_number}
                    name="medicare_number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handlePatientDetails}
                  />
                </Box> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mb: '56px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="theme-input-section__title" sx={{mb: 1, color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Patients Address</Typography>
            <Typography variant="h6" className="theme-input-section__subtitle">The primary address of this customer.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6.5}>
            <Grid container spacing={3.75}>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Location</Typography>
                  <TextField size="small"
                    required
                    select
                    name="country"
                    placeholder='Select Country'
                    value={patientDetails.country}
                    onChange={handlePatientDetails}
                  >
                    {Countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField size="small"
                    required
                    placeholder='State'
                    name="state"
                    value={patientDetails.state}
                    onChange={handlePatientDetails}
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField size="small"
                    required
                    placeholder='Select City'
                    name="city"
                    value={patientDetails.city}
                    onChange={handlePatientDetails}
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField size="small"
                    required
                    placeholder='Zip code'
                    name="zipcode"
                    value={patientDetails.zipcode}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handlePatientDetails}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Address line</Typography>
                  <TextField size="small"
                    required
                    placeholder="Address"
                    name="address"
                    value={patientDetails.address}
                    onChange={handlePatientDetails}
                  />
                </Box> 
              </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mb: '56px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="theme-input-section__title" sx={{mb: 1, color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Cosulated Details</Typography>
            <Typography variant="h6" className="theme-input-section__subtitle">Doctor details by consulated.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6.5}>
            <Grid container spacing={3.75} sx={{ mb: 4.5 }}>
              <Grid item xs={12} md={6}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Doctor First Name</Typography>
                  <TextField size="small"
                    required
                    placeholder='Doctors first name'
                    name="doctor_first_name"
                    value={patientDetails.doctor_first_name}
                    onChange={handlePatientDetails}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Doctor Last name</Typography>
                  <TextField size="small"
                    required
                    placeholder='Doctors last name'
                    name="doctor_last_name"
                    value={patientDetails.doctor_last_name}
                    onChange={handlePatientDetails}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Referral Doctor</Typography>
                  <TextField size="small"
                    required
                    placeholder='Refferal doctor name'
                    name="refferal_doctor_name"
                    value={patientDetails.refferal_doctor_name}
                    onChange={handlePatientDetails}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Scan Type</Typography>
                  <TextField size="small"
                    required
                    select
                    placeholder='Scan Type'
                    name="scan_type"
                    value={patientDetails.scan_type}
                    onChange={handlePatientDetails}
                  >
                    {ScanType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Scan Region</Typography>
                  <TextField size="small"
                    required
                    select
                    placeholder='Scan Region'
                    name="scan_region"
                    value={patientDetails.scan_region}
                    onChange={handlePatientDetails}
                  >
                    {ScanRegion.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" className="theme-input-section__subtitle" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Occupation</Typography>
                  <TextField size="small"
                    required
                    select
                    placeholder='Occupation'
                    name="occupation"
                    value={patientDetails.occupation}
                    onChange={handlePatientDetails}
                  >
                    {Occupations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3.75}>
                  <Grid item xs={12}>
                    <Typography variant="h6" className="theme-input-section__subtitle">Patient Seating Date & Time</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { mt: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField size="small"
                        required
                        type="date"
                        name="date"
                        value={patientDetails.date}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={handlePatientDetails}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { mt: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField size="small"
                        required
                        type="time"
                        name="time"
                        value={patientDetails.time}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={handlePatientDetails}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className="line-seperator"></div>
            <Grid container spacing={2} sx={{mt: 4.25, ml: .25, mb: '65px'}}>
              <Button variant="outlined" className="theme-button__secondary" sx={{ mr: 3 }} onClick={handlePreviewDetails}>Preview</Button>
              <Button variant="contained" className="theme-button__primary" onClick={handleRegisterPatient}>Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={showSuccessModal}
        onClose={handleClose}
      >
        <PatientSuccessModal open={showSuccessModal} handleClose={handleClose}/>
      </Modal>
    </Container>
  )
}

export default PatientRegistration