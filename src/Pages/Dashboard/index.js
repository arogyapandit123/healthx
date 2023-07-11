import { Box, Typography, Container, Grid, MenuItem, TextField, Button } from "@mui/material";
import CardItem from "../../Common/CardItem";
import ReportBasedOnType from "./Components/ReportBasedOnType";
import YesetrdaySvg from '../../Assets/Img/Dashboard/yesterdays-scan.svg'
import TodayScanSvg from '../../Assets/Img/Dashboard/today-scan.svg'
import ScanPrintSvg from '../../Assets/Img/Dashboard/scan-print.svg'
import ReportGenerateSvg from '../../Assets/Img/Dashboard/report-generate.svg'
import PendingPrintSvg from '../../Assets/Img/Dashboard/pending-print.svg'
import PendingReportSvg from '../../Assets/Img/Dashboard/pending-report.svg'
import PhoneSvg from '../../Assets/Img/Dashboard/phone.svg'
import BaseStackedBarChart from "../../Common/Charts/StackedBar";
import { useTheme } from '@mui/material/styles';
import {Years} from '../../Mock/Insight-options';
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
    value: 'Early Detected',
    img: '',
    greenCircle: false,
  },
  {
    name: 'Countact Doctor',
    value: 'Dr. Vikash',
    img: '',
    greenCircle: false,
  }
]
const scanTime = [
  {
    name: '10 Mar',
    uv: 5,
    pv: 6,
    amt: 8,
  },
  {
    name: '11 Mar',
    uv: 5.5,
    pv: 6.25,
    amt: 8,
  },
  {
    name: '13 Mar',
    uv: 7,
    pv: 5,
    amt: 7,
  },
  {
    name: '14 Mar',
    uv: 6,
    pv: 4,
    amt: 6,
  },
  {
    name: '15 Mar',
    uv: 5,
    pv: 3,
    amt: 5,
  },
  {
    name: '16 Mar',
    uv: 2,
    pv: 3,
    amt: 8,
  },
  {
    name: '17 Mar',
    uv: 1,
    pv: 0,
    amt: 9,
  }
];
const Dashboard = () => {
  const theme = useTheme()
  const handlePatientDetails = (e) => {
    
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" className="theme-dashboard__title" sx={{ color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Welcome back, Manny</Typography>
      <Typography variant="body2" className="theme-subtitle__typography--primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Box sx={{ flexGrow: 1, mt: '45px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardItem cardbackground="var(--theme-font-color__quinary)" cardtext="var(--theme-font-color__primary)">
              <ReportBasedOnType 
                ImgPath={YesetrdaySvg}
                Title="Yesterday's Scan"
                TotalValue='$391,820.75'
                TotalPercentage='21.9%'
                DifferenceToday='+$67k today'
                IsUpTrend={true}
                WeightedBackground={true}
                IsSubtextNotInWhiteBackground={true}
              />
            </CardItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardItem>
              <ReportBasedOnType 
                ImgPath={TodayScanSvg}
                Title="Today's Scan"
                TotalValue='831,071'
                TotalPercentage='13%'
                DifferenceToday='+7k today'
                IsUpTrend={true}
              />
            </CardItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardItem>
              <ReportBasedOnType 
                ImgPath={ScanPrintSvg}
                Title="Scan Print"
                TotalValue='1,042,665'
                TotalPercentage='5.7%'
                DifferenceToday='+5k today'
                IsUpTrend={true}
              />
            </CardItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardItem>
              <ReportBasedOnType 
                ImgPath={ReportGenerateSvg}
                Title="Report Generate"
                TotalValue='50,441'
                TotalPercentage='11%'
                DifferenceToday='+21 today'
                IsUpTrend={false}
              />
            </CardItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardItem>
              <ReportBasedOnType 
                ImgPath={PendingPrintSvg}
                Title="Pending Print"
                TotalValue='831,071'
                TotalPercentage='13%'
                DifferenceToday='+7k today'
                IsUpTrend={true}
              />
            </CardItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardItem>
              <ReportBasedOnType 
                ImgPath={PendingReportSvg}
                Title="Pending Report"
                TotalValue='831,071'
                TotalPercentage='13%'
                DifferenceToday='+7k today'
                IsUpTrend={true}
              />
            </CardItem>
          </Grid>
          <Grid item xs={12} md={4} sx={{ height: '300px'}}>
            <CardItem>
              <Grid container>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center'}}>
                  <div className='not-weighted-background circular_box box__center'>
                    <img
                      src={TodayScanSvg}
                      srcSet={TodayScanSvg}
                      alt='Next Scan'
                      loading="lazy"
                    />
                  </div>
                  <Typography sx={{ ml: 1, fontSize: 'var(--theme-font-size__quinary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quinary)' }} variant="h6">Next Scan</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: '25px' }}>
                  {
                    nextScan && nextScan.map((
                      scan => (
                      <div key={scan.name} className='ap-flex ap-jcsb ap-aic ap-mb14'>
                        <div>
                          <Typography sx={{ ml: 1, fontSize: 'var(--theme-font-size__primary)', fontWeight: '--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__primary)', color: 'var(--theme-font-color__quaternary)' }} variant="body2">{scan.name}</Typography>
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
                          <Typography sx={{ ml: 1, display: 'inline-flex', fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-font-color__tertiary)' }} variant="body2">{scan.value}</Typography>
                        </div>
                      </div>
                      )
                    ))
                  }
                </Grid>
              </Grid>
            </CardItem>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardItem>
              <Grid container spacing={6}>
                  <Grid item xs={12} sm={8} sx={{ height: '333px'}}>
                    <Typography sx={{ ml: 1, fontSize: '16px', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'normal', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important` }} variant="body2">Overall Scan Time</Typography>
                    <Typography sx={{ ml: 1, fontSize: 'var(--theme-font-size__primary)', fontWeight: 'normal', lineHeight: 'var(--theme-line-height__primary)', color: 'var(--theme-font-color__quaternary)' }} variant="body2">Time used to work on this project lorem ipsum dolor sit amet</Typography>
                    <BaseStackedBarChart 
                      data={scanTime}
                      key1={'uv'}
                      key2={'pv'}
                      showLegend={false}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { mt: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        select
                        name="gender"
                        placeholder='Years'
                        defaultValue="YEARS"
                        onChange={handlePatientDetails}
                      >
                        {[{
                            value: 'YEARS',
                            label: 'Years',
                          }, ...Years].map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>
                    <div>
                      <Typography sx={{ mt:"45px", fontSize: 'var(--theme-font-size__quinary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'normal', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important` }} variant="body2">32h 20m</Typography>
                      <Typography sx={{ fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'normal', lineHeight: 'var(--theme-line-height__secondary)', color: 'var(--theme-font-color__quaternary)' }} variant="body2">Effective time works</Typography>
                    </div>
                    <div>
                      <Typography sx={{  mt:"21px", fontSize: 'var(--theme-font-size__quinary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'normal', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important` }} variant="body2">3h 4m</Typography>
                      <Typography sx={{ fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'normal', lineHeight: 'var(--theme-line-height__secondary)', color: 'var(--theme-font-color__quaternary)' }} variant="body2">Non-Active time</Typography>
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: '21px',
                      }}
                    >
                      <Button variant="outlined" className="theme-button__secondary"><Typography  sx={{ fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__secondary)', color: 'var(--theme-font-color__quinary)' }}>View Full Report</Typography></Button>
                    </Box>
                  </Grid>
              </Grid>
            </CardItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default Dashboard;