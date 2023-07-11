import { Grid, Typography } from "@mui/material"
import UpTrend from '../../../../Assets/Img/Dashboard/up-trend.svg'
import DownTrend from '../../../../Assets/Img/Dashboard/down-trend.svg'

const ReportBasedOnType = ({
  ImgPath,
  Title,
  TotalValue,
  TotalPercentage,
  DifferenceToday,
  IsUpTrend,
  WeightedBackground,
  IsSubtextNotInWhiteBackground
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center'}}>
        <div className={`${WeightedBackground ? 'weighted-background' : 'not-weighted-background'} circular_box box__center`}>
          <img
            src={ImgPath}
            srcSet={ImgPath}
            alt={Title}
            loading="lazy"
          />
        </div>
        <Typography sx={{ ml: 1, fontSize: 'var(--theme-font-size__quinary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quinary)' }} variant="h6">{Title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: '26px', mb: 1.25, fontSize: 'var(--theme-font-size__quaternary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__quaternary)'}}>{TotalValue}</Typography>
      </Grid> 
      <Grid item xs={12} sx={{ display: 'flex', mb: '18px'}}>
        <img
          src={IsUpTrend ? UpTrend : DownTrend}
          srcSet={IsUpTrend ? UpTrend : DownTrend}
          alt={Title}
          loading="lazy"
        />
        <Typography variant="body2" sx={{ pl: .5, fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__secondary)' }}>{TotalPercentage}</Typography>
        <Typography variant="body2" sx={{ pl: 1, fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__quaternary)', lineHeight: 'var(--theme-line-height__secondary)', color: !IsSubtextNotInWhiteBackground ? 'var(--theme-font-color__quaternary)' : '#f3f3f3' }}>{DifferenceToday}</Typography>
      </Grid>
    </Grid>
  )
}

export default ReportBasedOnType