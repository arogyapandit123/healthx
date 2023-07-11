import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardItem from "../../Common/CardItem";
import BasePieChart from "../../Common/Charts/Pie";
import BaseBarChart from "../../Common/Charts/Bar";
import FilterSvg from '../../Assets/Img/Common/filter.svg';
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {Age, Countries, DoctoresName, Gender, Months, Quarter, ScanRegion, ScanType, State, Years} from '../../Mock/Insight-options';
const CardWithBorderRight = ({
  Title,
  Value,
  IsNotBorder
}) => {
  return (
    <CardItem sx={{ borderRight: !IsNotBorder ? '1px solid var(--theme-font-color__secondary)': 'unset', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>
      <Typography variant="body2" sx={{ fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__secondary)', color: 'var(--theme-font-color__quaternary)' }}>{Title}</Typography>
      <Typography variant="body2" sx={{ mt: '10px', fontSize: 'var(--theme-font-size__quaternary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__quaternary)', color: 'var(--theme-line-height__quaternary)' }}>{Value}</Typography>
    </CardItem>
  )
}

const SelectInput = ({
  options,
  defaultValue,
  handleSelectValue,
  placeHolder,
  name,
}) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        size="small"
        required
        select
        name={name}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        onChange={handleSelectValue}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box> 
  )
}

const data = [
  {
    title: 'Today Scan',
    value: '2346477',
  },
  {
    title: 'Image Resolution',
    value: '23556',
  },
  {
    title: 'Early Diagnosis',
    value: '35436',
  },
  {
    title: 'Report Generated',
    value: '23566',
  },
  {
    title: 'Report Shared',
    value: '8095',
  },
]
const agePieChartData = [
  { name: "Satisfied", value: 8.2 },
  { name: "Not Satisfied", value: 1.4 },
  { name: "Neutral", value: 3.2 },
  { name: "Neutral", value: 1.2 },
];
const scanTypePieChartData = [
  { name: "Neutral", value: 3.2 },
  { name: "Neutral", value: 8.2 },
];
const regionPieChartData = [
  { name: "Satisfied", value: 3.2 },
  { name: "Not Satisfied", value: 1.4 },
  { name: "Neutral", value: 8.2 },
  { name: "Neutral", value: 1.2 },
];
const dignosisPieChartData = [
  { name: "Neutral", value: 3.2 },
  { name: "Neutral", value: 8.2 },
];

const bardata = [
  {
    name: '',
    yesterday: 40,
    today: 24,
    present: 30,
  },
  {
    name: '',
    yesterday: 30,
    today: 13,
    present: 25,
  },
  {
    name: '',
    yesterday: 20,
    today: 59,
    present: 70,
  },
  {
    name: '',
    yesterday: 28,
    today: 39,
    present: 30,
  },
  {
    name: '',
    yesterday: 18,
    today: 48,
    present: 30,
  },
  {
    name: '',
    yesterday: 23,
    today: 38,
    present: 30,
  },
  {
    name: '',
    yesterday: 39,
    today: 40,
    present: 30,
  },
];

const dataForSelect = [
  {
    options: [
      {
        value: 'Country',
        label: 'Country',
      },
      ...Countries
    ],
    defaultValue: 'Country',
    placeHolder: 'Country',
    name: 'country',
  },
  {
    options: [
      {
        value: 'State',
        label: 'State',
      },
      ...State
    ],
    defaultValue: 'State',
    placeHolder: 'State',
    name: 'state',
  },
  {
    options: [
      {
        value: 'Year',
        label: 'Year',
      },
      ...Years
    ],
    defaultValue: 'Year',
    placeHolder: 'Year',
    name: 'year',
  },
  {
    options: [
      {
        value: 'Quarter',
        label: 'Quarter',
      },
      ...Quarter
    ],
    defaultValue: 'Quarter',
    placeHolder: 'Quarter',
    name: 'quarter',
  },
  {
    options: [
      {
        value: 'Months',
        label: 'Months',
      },
      ...Months
    ],
    defaultValue: 'Months',
    placeHolder: 'Months',
    name: 'month',
  },
  {
    options: [
      {
        value: 'Doctor Name',
        label: 'Doctor Name',
      },
      ...DoctoresName
    ],
    defaultValue: 'Doctor Name',
    placeHolder: 'Doctor Name',
    name: 'doctorName',
  },
  {
    options: [
      {
        value: 'Scan Type',
        label: 'Scan Type',
      },
      ...ScanType
    ],
    defaultValue: 'Scan Type',
    placeHolder: 'Scan Type',
    name: 'scanType',
  },
  {
    options: [
      {
        value: 'Scan Region',
        label: 'Scan Region',
      },
      ...ScanRegion
    ],
    defaultValue: 'Scan Region',
    placeHolder: 'Scan Region',
    name: 'scanRegion',
  },
  {
    options: [
      {
        value: 'Gender',
        label: 'Gender',
      },
      ...Gender
    ],
    defaultValue: 'Gender',
    placeHolder: 'Gender',
    name: 'gender',
  },
  {
    options: [
      {
        value: 'Age',
        label: 'Age',
      },
      ...Age
    ],
    defaultValue: 'Age',
    placeHolder: 'Age',
    name: 'age',
  },
]

const Insight = () => {
  const theme = useTheme()
  const [showFilters, setShowFilters] = useState(false)

  const handleToggleFilter = () => {
    setShowFilters(() => !showFilters)
  }
  const handleSelectedValue = (name, option) => {
    console.log(name, option)
  }
  return (
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={11}>
            <Typography variant="h6" className="theme-title__typography--primary" sx={{ mb: '35px', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important`}}>Insight Board</Typography>
          </Grid>
          <Grid item sm={1} sx={{ justifySelf: 'end'}} onClick={handleToggleFilter}>
            <img
              src={FilterSvg}
              srcSet={FilterSvg}
              alt='filter'
              loading="lazy"
              className="h-cursor__pointer"
            />
          </Grid>
        </Grid>
        <div className="line-seperator"></div>
        {
          showFilters ? 
            (
              <Grid container sx={{ mt: '26px',  mb: '36px'}} spacing={3}>
                {
                  dataForSelect && dataForSelect.map((d, index) =>(
                    <Grid key={d.name} item xs={12} sm={12} md={2.4}>
                      <SelectInput 
                        options={d.options}
                        defaultValue={d.defaultValue}
                        handleSelectValue={handleSelectedValue}
                        placeHolder={d.placeHolder}
                        name={d.name}
                      />
                    </Grid>
                  ))
                }
              </Grid>
            ) :
            (
              <Box sx={{ flexGrow: 1, my: '26px'}}>
                <Grid container>
                  {
                    data && data.map((d, index) =>(
                      <Grid key={d.title} item xs={12} sm={12} md={2.4}>
                        <CardWithBorderRight Title={d.title} Value={d.value} IsNotBorder={index === data.length-1}/>
                      </Grid>
                    ))
                  }
                </Grid>
              </Box>
            )
        }
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div className="ap-flex ap-fdc ap-aic">
                  <Typography variant="h6" sx={{mb: 2 }} className="chart-title">Age Group  wise  Scan Distribution</Typography>
                  <BasePieChart data={agePieChartData} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div>
                  <Typography variant="h6" sx={{mb: 7.5, mt: 1 }} className="chart-title">State wise Distribution</Typography>
                  <BaseBarChart data={bardata} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div>
                  <Typography variant="h6" sx={{mb: 7.5, mt: 1 }} className="chart-title">Year wise  Distribution</Typography>
                  <BaseBarChart data={bardata} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div className="ap-flex ap-fdc ap-aic">
                  <Typography variant="h6" sx={{mb: 2 }} className="chart-title">Scan Type  Distribution</Typography>
                  <BasePieChart data={scanTypePieChartData} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div className="ap-flex ap-fdc ap-aic">
                  <Typography variant="h6" sx={{mb: 2 }} className="chart-title">Regionwise Scan Distribution</Typography>
                  <BasePieChart data={regionPieChartData} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div>
                  <Typography variant="h6" sx={{mb: 7.5, mt: 1 }} className="chart-title">Quarter wise Distribution</Typography>
                  <BaseBarChart data={bardata} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div>
                  <Typography variant="h6" sx={{mb: 7.5, mt: 1 }} className="chart-title">Month wise Distribution</Typography>
                  <BaseBarChart data={bardata} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div>
                  <Typography variant="h6" sx={{mb: 7.5, mt: 1 }} className="chart-title">Doctor wise referred Distribution</Typography>
                  <BaseBarChart data={bardata} />
                </div>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem cardborder="1px solid var(--theme-font-color__secondary)" className="chart-card-item">
                <div className="ap-flex ap-fdc ap-aic">
                  <Typography variant="h6" sx={{mb: 2 }} className="chart-title">Diagnosis Result</Typography>
                  <BasePieChart data={dignosisPieChartData} />
                </div>
              </CardItem>
            </Grid>
          </Grid>
        </Box>
      </Container>
  )
}

export default Insight