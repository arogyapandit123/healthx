import { Grid, Box } from '@mui/material';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import CardItem from '../../CardItem';

const CustomTooltip = ({active, payload}) => {
  return (
    <>
      {
        active && payload && payload.length && 
        <Box sx={{ flexGrow: 1, width: 120 }}>
          <CardItem sx={{ 
            borderRight: '1px solid var(--theme-font-color__secondary)', 
            borderTopRightRadius: '0', 
            borderBottomRightRadius: '0', 
          }} cardpadding='8px'>
          <Grid container>
            <Grid item xs={12}>
              <div className="recharts-custom-tooltip-item-text" style={{color: 'var(--theme-graph-primary-color)' }}>Today: {payload[0].payload.today}</div>
            </Grid>
            <Grid item xs={12}>
              <div className="recharts-custom-tooltip-item-text" style={{ color: 'var(--theme-graph-secondary-color)' }}>Present: {payload[0].payload.present}</div>
            </Grid>
            <Grid item xs={12}>
              <div className="recharts-custom-tooltip-item-text" style={{ color: 'var(--theme-graph-tertiary-color)' }}>Yesterday: {payload[0].payload.yesterday}</div>
            </Grid>
          </Grid>
          </CardItem>
        </Box>
      }
    </>
  )
}

const BaseBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={220} min-width={220}>
      <BarChart
        // width={320}
        // height={220}
        data={data}
      >
        {/* <XAxis dataKey="name" /> */}
        <CartesianGrid strokeDasharray="3 3"/>
        {/* <Tooltip cursor={false} /> */}
        <Tooltip cursor={false} content={<CustomTooltip payload={data} />} />
        <Legend/>
        <YAxis />
        <Bar dataKey="today" fill="var(--theme-graph-primary-color)" radius={[4, 4, 0, 0]}/>
        <Bar dataKey="yesterday" fill="var(--theme-graph-secondary-color)" radius={[4, 4, 0, 0]}/>
        <Bar dataKey="present" fill="var(--theme-graph-tertiary-color)" radius={[4, 4, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BaseBarChart