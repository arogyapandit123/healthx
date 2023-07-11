import React from 'react'
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MoreDot from '../../Assets/Img/Common/more-dot.svg';
import { visuallyHidden } from "@mui/utils";
import './index.css'
import { Grid, Pagination } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Countdown from 'react-countdown';

const headCells = [
  {
    id: "queueNo",
    numeric: false,
    disablePadding: false,
    label: "Queue No."
  },
  {
    id: "patientName",
    numeric: false,
    disablePadding: false,
    label: "Patient Name"
  },
  {
    id: "age",
    numeric: false,
    disablePadding: false,
    label: "Age"
  },
  {
    id: "sex",
    numeric: false,
    disablePadding: false,
    label: "Sex"
  },
  {
    id: "refferedBy",
    numeric: false,
    disablePadding: false,
    label: "Reffered by"
  },
  {
    id: "estimatedScanTime",
    numeric: false,
    disablePadding: false,
    label: "Estimate Scan time"
  },
  {
    id: "nextSchedule",
    numeric: false,
    disablePadding: false,
    label: "Next Schedule"
  },
  {
    id: "watingTime",
    numeric: false,
    disablePadding: false,
    label: "Waiting Time"
  },
  {
    id: "scanRegion",
    numeric: false,
    disablePadding: false,
    label: "Scan Region"
  },
  {
    id: "scanType",
    numeric: false,
    disablePadding: false,
    label: "Scan Type"
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status"
  },
  {
    id: "11",
    numeric: false,
    disablePadding: false,
    label: ""
  },
];
function createData(
  queueNo,
  patientName,
  age,
  sex,
  refferedBy,
  estimatedScanTime,
  nextSchedule,
  watingTime,
  scanRegion,
  scanType,
  status) {
  return {
    queueNo,
    patientName,
    age,
    sex,
    refferedBy,
    estimatedScanTime,
    nextSchedule,
    watingTime,
    scanRegion,
    scanType,
    status
  };
}

const rows = [
  createData(1, "Maria Rosalio", 35, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(2, "Maria Rosalio", 52, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Pending'),
  createData(3, "Maria Rosalio", 62, 'F', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Not Started'),
  createData(4, "Maria Rosalio", 59, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Not Done'),
  createData(5, "Maria Rosalio", 56, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(6, "Maria Rosalio", 98, 'M', 'Dr.Manoj', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(7, "Maria Rosalio", 37, 'F', 'Dr.Shekher', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(8, "Maria Rosalio", 75, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(9, "Maria Rosalio", 18, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(10,"Maria Rosalio", 92, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(11, "Maria Rosalio", 18, 'F', 'Dr.Kabir', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(12, "Maria Rosalio", 60, 'M', 'Dr.Preeti', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done'),
  createData(13, "Maria Rosalio", 37, 'M', 'Dr.Neelesh', '2.30 Hrs', '25 Feb 23, 02:10 PM', '3 Hrs', 'Head Region', 'Report Generate', 'Done')
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [page1, setPage1] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory()

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChange = (event, newPage) => {
    console.log('handleChange', newPage)
    setPage(newPage - 1)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 1 ? Math.max(0, (page) * rowsPerPage - rows.length) : 0;

  const handlePatientSelection = (patient) => { 
    console.log(history,"checking")
    history.push(`/scan/scan-enhancement/${patient.queueNo}/scan-report`)
  }
  return (
    <Box sx={{ width: "100%" }}>
      <div className="ap-flex ap-jcsb">
        <Typography variant="h6" sx={{ mb: 1.5}}>Patient List</Typography>
        <Typography variant="body2" sx={{ fontSize: 'var(--theme-font-size__secondary)', fontWeight: 'var(--theme-font-weight__primary)', lineHeight: 'var(--theme-line-height__secondary)', color: 'var(--theme-font-color__quaternary)' }}>See all</Typography>
      </div>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
            stickyHeader
            aria-label="sticky table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => { handleClick(event, row.queueNo);handlePatientSelection(row) } }
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.queueNo}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align='left'
                        sx={{ my: 2.5, pl: 2}}
                      >
                        {row.queueNo}
                      </TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.patientName}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.age}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.sex}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.refferedBy}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.estimatedScanTime}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.nextSchedule}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>
                        {/* <Countdown daysInHours={true} date={new Date(row.nextSchedule).getTime()}/> */}
                        <Countdown daysInHours={true} date={Date.now() + 6000000}/>
                      </TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.scanRegion}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}>{row.scanType}</TableCell>
                      <TableCell align="left" sx={{ my: 2.5, px: 0}}><div className={row.status.toLowerCase().split(' ').join('-')}>{row.status}</div></TableCell>
                      {/* <TableCell align="left" sx={{ my: 2.5, px: 0}} onClick={() => handlePatientSelection(row)}>
                        <img 
                          src={MoreDot} 
                          srcSet={MoreDot}
                          alt="More option"
                          loading="lazy"
                        />
                      </TableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Typography variant="body2" sx={{ fontSize: 'var(--theme-font-size__primary)', fontWeight: 'var(--theme-font-weight__tertiary)', lineHeight: 'var(--theme-line-height__primary)', color: 'var(--theme-font-color__quaternary)' }}>
            Show {(page+1) * rowsPerPage > rows.length ? rows.length : (page+1) * rowsPerPage} from {rows.length}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Pagination count={Math.ceil(rows.length/rowsPerPage)} page={page+1} onChange={handleChange}  shape="rounded" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default EnhancedTable