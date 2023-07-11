import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ExistingCallSvg from '../../Assets/Img/Lineup/existing.svg';
import WatingCallSvg from '../../Assets/Img/Lineup/wating.svg';
import NextCallSvg from '../../Assets/Img/Lineup/next.svg';
import PhoneSvg from '../../Assets/Img/Dashboard/phone.svg'

import CardItem from "../../Common/CardItem";
import EnhancedTable from "../../Common/Table"
import { useTheme } from '@mui/material/styles';
import Countdown from "react-countdown";

const TitleWithSubtitle = ({
  Title,
  cardbackground,
  CircularBg,
  ImgLeft,
  NextScan,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardItem cardbackground={cardbackground}>
        <div className="ap-flex ap-aic">
          <div className='not-weighted-background circular_box box__center' style={{backgroundColor: CircularBg}}>
            <img
              src={ImgLeft}
              srcSet={ImgLeft}
              alt='Patient Details'
              loading="lazy"
            />
          </div>
          <Typography sx={{ ml: 1, fontFamily: 'var(--primary-font)', fontSize: 'var(--theme-font-size__quinary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quinary)', color: 'var(--theme-font-color__tertiary)' }} variant="h6">{Title}</Typography>
          {/* <Countdown  style={ ({ marginLeft: '0.8rem' }) } daysInHours={true} date={Date.now() + 6000000}/> */}
        </div>
        
        <div className="ap-mt25">
        {
          NextScan && NextScan.map((
            (scan, index) => (
            <div key={scan.name} className={`ap-flex ap-jcsb ap-aic ${NextScan.length-1 === index ? '' : 'ap-mb14'}`}>
              <div>
                <Typography sx={{ fontSize: 'var(--theme-font-size__primary)', fontWeight: '--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__primary)', color: 'var(--theme-font-color__quaternary)' }} variant="body2">{scan.name}</Typography>
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
                <Typography sx={{ ml: 1, display: 'inline-flex', fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-font-color__tertiary)', color: `var(--theme-font-color__tertiary)` }} variant="body2">{scan.value}</Typography>
              </div>
            </div>
            )
          ))
        }
        </div>
      </CardItem>
    </Grid>
  )
}

const cardsToShow = [
  {
    bgColor: '#ffe1e1',
    circularBg: '#e96262',
    imgLeft: ExistingCallSvg,
    title: 'Existing Call',
    next: [
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
        name: 'Countact Doctor',
        value: 'Dr. Vikash',
        img: '',
        greenCircle: false,
      }
    ]
  },
  {
    bgColor: '#ffecb2',
    circularBg: '#ffb800',
    imgLeft: WatingCallSvg,
    title: 'Waiting Time',
    next: [
      {
        name: 'Queue Number',
        value: '864',
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
        name: 'Countact Doctor',
        value: 'Dr. Vikash',
        img: '',
        greenCircle: false,
      }
    ]
  },
  {
    bgColor: '#d7f5ff',
    circularBg: '#00a8dd',
    imgLeft: NextCallSvg,
    title: 'Next Call',
    next: [
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
        name: 'Countact Doctor',
        value: 'Dr. Vikash',
        img: '',
        greenCircle: false,
      }
    ]
  }
]
const Lineup = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" className="theme-title__typography--primary" sx={{mb: '35px', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Line-up Report</Typography>
      <div className="line-seperator"></div>
      <Box sx={{ flexGrow: 1, my: '26px' }}>
        <Grid container spacing={2}>
          {
            cardsToShow && cardsToShow.map((card) => (
              <TitleWithSubtitle 
                key={card.title}
                cardbackground={card.bgColor}
                CircularBg={card.circularBg}
                Title={card.title}
                ImgLeft={card.imgLeft}
                NextScan={card.next}
              />
            ))
          }
        </Grid>
      </Box>
      <EnhancedTable />
    </Container>
  )
}
export default Lineup