import { Box, Grid, Typography, Button, IconButton, Modal } from "@mui/material";
import CardItem from "../../../Common/CardItem";
import SuccessImg from '../../../Assets/Img/Common/success.svg'


const PatientSuccessModal = ({open, handleClose}) => {
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={{ 
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <CardItem className="theme-registration-container" sx={{ borderRadius: '16px' }}>
              <div className="ap-flex ap-jcc">
              <IconButton aria-label="logo" sx={{ height: '129px', width: '129px', pt: '54px', padding: 0}} className="nav-link-logo-icon-button">
                <img
                  src={SuccessImg}
                  srcSet={SuccessImg}
                  alt={'logo'}
                  loading="lazy"
                />
              </IconButton>
              </div>
              <Typography variant="h6" className="theme-registration-section__title" sx={{ mt: '40px', mb: 3 }}>Your Data has Sucessfully Saved</Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 4, width: '100%' },
                  display: 'flex', justifyContent: 'center'
                }}
                noValidate
                autoComplete="off"
              >
                <Button onClick={handleClose} sx={{ width: '50%', my: '18px', height: '58px',  borderRadius: '8px' }} variant="contained" className="theme-button__primary">DONE</Button>
              </Box> 
            </CardItem>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default PatientSuccessModal