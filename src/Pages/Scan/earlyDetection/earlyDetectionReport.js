import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardItem from "../../../Common/CardItem";
import ScanEnhancementSvg from '../../../Assets/Img/Scan/scan-enhancement.svg';
import Scan1 from '../../../Assets/Img/Scan-report/scan1.webp'
import PhoneSvg from '../../../Assets/Img/Dashboard/phone.svg'
import PatientDetailsSvg from '../../../Assets/Img/Dashboard/today-scan.svg'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
const nextScan = [
  {
    name: 'Scan Number',
    value: '864',
    img: '',
    greenCircle: false,
  },
  {
    name: 'Patient Name',
    value: 'Maria Roselia',
    img: '',
    greenCircle: false,
  },
  {
    name: 'Patient Age',
    value: '39 Years',
    img: '',
    greenCircle: false,
  },
  {
    name: 'Scan Region',
    value: 'Head Region',
    img: '',
    greenCircle: true,
  },
  {
    name: 'Patient Number',
    value: '(847) 785-2310',
    img: PhoneSvg,
    greenCircle: false,
  },
  {
    name: 'Scan Type',
    value: 'Image Scan Enhancement',
    img: '',
    greenCircle: false,
  },
  {
    name: 'Counsact Doctor',
    value: 'Dr. Vikash',
    img: '',
    greenCircle: false,
  },
  {
    name: 'Estimate Scan Time',
    value: '2:30 hours',
    img: '',
    greenCircle: false,
  }
]

const Scan = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showOriginalImg, setShowOriginalImg] = React.useState(false)
  const [defaultSelectedFormat, setDefaultSelectedFormat] = React.useState('dicom')
  const [selectedFormat, setSelectedFormat] = React.useState('dicom')
  const title = `Save to Scan Enhancement`
  const subtitle = `Pull your GST returns by entering your GST credentials or submitting an OTP. On successful submission, the credentials will be permanently deleted.`

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const radioOptions = [
    {
      label: 'DICOM Format',
      value: 'dicom',
    },
    {
      label: 'JPG Format',
      value: 'jpg',
    }
  ]

  const handleSelectionOfFormat = (option) => {
    setSelectedFormat(option)
  }
  const handleToggleOriginalImg = () => {
    setShowOriginalImg(!showOriginalImg)
  }
  return (
    <Container maxWidth="lg" sx={{ height: `max(100%, 100vh)` }}>
      <Typography variant="h6" className="theme-title__typography--primary" sx={{mb: '35px', fontFamily: 'var(--primary-font)', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Eary Detection Report</Typography>
      <div className="line-seperator"></div>
      <Box sx={{ flexGrow: 1, my: '26px' }}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <CardItem cardborder="2px solid #f3f3f3" cardpadding="0px">
              <div className="ap-flex ap-aic ap-jcc theme-scan-image__container">
                <img
                  src={Scan1}
                  srcSet={Scan1}
                  alt={'Scan1'}
                  loading="lazy"
                />
              </div>
            </CardItem>
            <div className="original-status-container">
              <Typography sx={{ fontFamily: 'var(--primary-font)', fontSize: '16px', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quaternary)' }} variant="body2" onClick={handleToggleOriginalImg}>{!showOriginalImg ? 'Original Image': 'Close'}</Typography>
            </div>
          </Grid>
          {showOriginalImg ? <Grid item xs={12} sm={6}>
            <CardItem cardborder="2px solid #f3f3f3" cardpadding="0px">
              <div className="ap-flex ap-aic ap-jcc theme-scan-image__container">
                <img
                  src={Scan1}
                  srcSet={Scan1}
                  alt={'Scan1'}
                  loading="lazy"
                />
              </div>
            </CardItem>
          </Grid>
          :
          <Grid item xs={12} sm={6}>
            <CardItem cardborder="2px solid #f3f3f3">
              <Grid container>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center'}}>
                  <div className='not-weighted-background circular_box box__center'>
                    <img
                      src={PatientDetailsSvg}
                      srcSet={PatientDetailsSvg}
                      alt='Patient Details'
                      loading="lazy"
                    />
                  </div>
                  <Typography sx={{ ml: 1, fontFamily: 'var(--primary-font)', fontSize: 'var(--theme-font-size__quinary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quinary)' }} variant="h6">Patient Details</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: '35px' }}>
                  {
                    nextScan && nextScan.map((
                      scan => (
                      <div key={scan.name} className='ap-flex ap-jcsb ap-aic ap-mb26'>
                        <div>
                          <Typography sx={{ ml: 1, fontFamily: 'var(--primary-font)', fontSize: '16px', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: '1.13', color: 'var(--theme-font-color__quaternary)' }} variant="body2">{scan.name}</Typography>
                        </div>
                        <div className="ap-flex ap-jcsb ap-aic">
                            {
                              scan.img && <img
                                src={scan.img}
                                srcSet={scan.img}
                                alt={scan.name}
                                loading="lazy"
                              />
                            }
                            {scan.greenCircle && <div className="green-circle"></div>}
                          <Typography sx={{ ml: 1, fontFamily: 'var(--primary-font)', display: 'inline-flex', fontSize: '16px', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quaternary)' }} variant="body2">{scan.value}</Typography>
                        </div>
                      </div>
                      )
                    ))
                  }
                  <div className="ap-mb90"></div>
                </Grid>
              </Grid>
            </CardItem>
          </Grid>
          }
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: 'wrap',
          "& > *": {
            my: '46px',
          }
        }}
      >
        <Button variant="contained" className="theme-button__secondary" onClick={handleClickOpen}>Save As Report</Button>
        <Button variant="contained" className="theme-button__primary" sx={{ ml: 3 }} onClick={handleClickOpen}>Approval</Button>
        <Button variant="outlined" className="theme-button__quaternary" sx={{ mx: 3 }} onClick={handleClickOpen}>Print Report</Button>
        <Button variant="contained"  className="theme-button__quinary" onClick={handleClickOpen}>Report Send on Mail</Button>
      </Box>
      <CustomizedDialogs 
        open={open} 
        handleClose={handleClose} 
        title={title} subtitle={subtitle} 
        btnname='DOWNLOAD' 
        radioOptions={radioOptions} 
        selected={defaultSelectedFormat}
        handleSelection={handleSelectionOfFormat}
      />
    </Container>
  )
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(4)
  },
  '& .MuiDialog-paperWidthSm': {
    maxWidth: '458px',
    borderRadius: '16px',
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs({
  title,
  subtitle,
  open,
  handleClose,
  btnname,
  handleSelection,
  radioOptions,
  selected,
}) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
      >
        <BootstrapDialogTitle id="customized-dialog-title" className="dialog-content__title" sx={{mx: '14px'}} onClose={handleClose}>
          {title}
        </BootstrapDialogTitle>
        <div className="line-seperator"></div>
        <DialogContent>
          <Typography className="dialog-content__subtitle">
            {subtitle}
          </Typography>
          <RadioButtonsGroup handleSelection={handleSelection} radioOptions={radioOptions} selected={selected}/>
        </DialogContent>
        <DialogActions>
          <Button sx={{ width: '100%', height: '56px' }} variant="contained" className="theme-button__primary" autoFocus onClick={handleClose}>
            {btnname}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
function RadioButtonsGroup({
  selected,
  handleSelection,
  radioOptions,
}) {
  const handleChange = (e) => {
    handleSelection(e.target.value)
    console.log('2..')
  }
  return (
    <FormControl 
      sx={{ width: "100%", flexGrow: 1 }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={selected}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {radioOptions && radioOptions.map((rad, index) => 
          <FormControlLabel key={rad.value} value={rad.value} control={<Radio />} label={rad.label} />
        )}
      </RadioGroup>
    </FormControl>
  );
}
export default Scan