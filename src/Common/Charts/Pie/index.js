import { Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import { useTheme } from '@mui/material/styles';
const COLORS = [ "var(--theme-graph-secondary-color)", "var(--theme-graph-primary-color)", "var(--theme-graph-tertiary-color)", "var(--theme-graph-quaternary-color)"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
    x={x}
    y={y}
    fill="white"
    textAnchor={x > cx ? "start" : "end"}
    dominantBaseline="central"
    >
      {/* {`${(percent * 100).toFixed(0)}%`} */}
    </text>
  );
};
const BasePieChart = ({ data }) => {
  const theme = useTheme()
  return (
    <>
      <PieChart width={171} height={170}>
        <Pie
          data={data}
          labelLine={false}
          startAngle={360}
          endAngle={0}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          stroke="unset"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div style={{ marginBottom: '7px' }}></div>
      { data && data.map((d, index) => (
        <div className="ap-flex ap-jcsb chart-label-width" style={{marginTop: '5px'}}>
          <div className="ap-flex ap-aic">
            <div style={{
              width: '7px',
              height: '7px',
              marginRight: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS[index % COLORS.length],
            }}></div>
            <Typography variant="body2" className="chart-label-name" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>
              {d.name}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" className="chart-label-value" sx={{color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>
              {d.value}
            </Typography>
          </div>
        </div>
      ))
      }
    </>
  )
}

export default BasePieChart