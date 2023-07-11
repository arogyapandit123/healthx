import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useHistory } from 'react-router-dom'

export default function PageNotFound() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/signin')
  }
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h1" sx={{ mt: '26px', mb: 1.25, fontSize: 'var(--theme-font-size__quaternary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__quaternary)'}}>404</Typography>
        <Typography variant="h4" sx={{ mt: '26px', mb: 1.25, fontSize: 'var(--theme-font-size__quaternary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__quaternary)'}}>Look like you're lost</Typography>
        <Typography variant="body2" sx={{ pl: .5, mb: '26px', fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__secondary)' }}>the page you are looking for not avaible!</Typography>
        <Button variant="contained" className="theme-button__primary" sx={{ cursor: 'pointer' }} onClick={handleClick}>LOGIN</Button>
      </Grid>
    </Grid>
  );
}
