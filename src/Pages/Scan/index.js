import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardItem from "../../Common/CardItem";
import ScanEnhancementSvg from '../../Assets/Img/Scan/scan-enhancement.svg';
import EarlyDetectionSvg from '../../Assets/Img/Scan/early-detection.svg';
import ReportGenerationSvg from '../../Assets/Img/Scan/scan-enhancement.svg';
import { useHistory } from "react-router-dom";
import OrnamentImg from '../../Assets/Img/Common/ornament.svg'
import { useTheme } from '@mui/material/styles';
const TitleWithSubtitle = ({
  Title,
  Value,
  cardbackground,
  ImgLeft,
  Link,
}) => {
  const history = useHistory()
  const handleBtnClick = () => {
    if(Link) {
      history.push(Link)
    }
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardItem cardbackground={cardbackground}>
        <div class="ap-flex ap-jcsb">
          <div className="circular__white ap-flex ap-aic ap-jcc">
            <img
              src={ImgLeft}
              srcSet={ImgLeft}
              alt={Title}
              loading="lazy"
            />
          </div>
          <div className="combined-shape">
            <img
              src={OrnamentImg}
              srcSet={OrnamentImg}
              alt="Ornament of card"
              loading="lazy"
            />
          </div>
        </div>
        <Typography variant="body2" sx={{ mt: '21px', fontSize: '16px', fontWeight: '600', lineHeight: 'normal', color: 'var(--theme-font-color__tertiary)' }}>{Title}</Typography>
        <Typography variant="body2" sx={{ mt: 1, fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__secondary)', color: 'var(--theme-font-color__quaternary)' }}>{Value}</Typography>
        <Button variant="contained" sx={{ mt: 4, mb: 1.5 }} className="theme-button__white-bg" onClick={handleBtnClick}>Get Started</Button>
      </CardItem>
    </Grid>
  )
}
const cardsToShow = [
  {
    bgColor: '#d7f5ff',
    imgLeft: ScanEnhancementSvg,
    title: 'Scan Enhancement',
    value: 'Let’s make managing your team a little easier by setting up your Finanace features.',
    link: '/scan/scan-enhancement',
  },
  {
    bgColor: '#ffecb2',
    imgLeft: EarlyDetectionSvg,
    title: 'Early Detection',
    value: 'Let’s make managing your team a little easier by setting up your Finanace features.',
    link: '/early/early-awaiting-list',
  },
  {
    bgColor: '#e1ffed',
    imgLeft: ReportGenerationSvg,
    title: 'Report Generation',
    value: 'Let’s make managing your team a little easier by setting up your Finanace features.',
    link: '/report/report-awaiting-list'
  }
]
const Scan = () => {
  const theme = useTheme();
  return (
      <Container maxWidth="lg">
        <Typography variant="h6" className="theme-title__typography--primary" sx={{mb: '35px', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Scan </Typography>
        <div className="line-seperator"></div>
        <Box sx={{ flexGrow: 1, mt: '45px', mb: '26px' }}>
          <Grid container spacing={2}>
            {
              cardsToShow && cardsToShow.map((card) => (
                <TitleWithSubtitle 
                  key={card.title}
                  cardbackground={card.bgColor}
                  Title={card.title}
                  Value={card.value}
                  ImgLeft={card.imgLeft}
                  Link={card.link}
                />
              ))
            }
          </Grid>
        </Box>
      </Container>
  )
}
export default Scan