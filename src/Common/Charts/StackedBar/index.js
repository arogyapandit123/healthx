
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import ViewPort from '../../../Utils/MobileViewPorts';
import './index.css'
const BaseStackedBarChart = ({data ,key1='pv', key2='uv', showLegend=true}) => {
  return (
    <ResponsiveContainer width={"100%"} height={ViewPort.isMobileViewPort ? 200 : 260} min-width={ViewPort.isMobileViewPort ? 250 : 320}>
      <BarChart
        // width={ViewPort.isMobileViewPort ? 300 : 500}
        // height={ViewPort.isMobileViewPort ? 200 : 300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        { showLegend && <Legend /> }
        <Bar dataKey={key1} stackId="a" fill="#00a8dd" barCategoryGap={40}/>
        <Bar dataKey={key2} stackId="a" fill="#c2eefc" barCategoryGap={40} radius={[4, 4, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BaseStackedBarChart;