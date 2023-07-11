import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EnhancedTable from "../../../Common/Table";
import { useTheme } from '@mui/material/styles';
const ScanAwaitingList = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" className="theme-title__typography--primary" sx={{ mb: '35px', color: `${theme.palette['--theme-font-color__tertiary'][theme.palette.mode]} !important` }}>Scan Awaiting list</Typography>
      <div className="line-seperator h-mb35"></div>
      <EnhancedTable />
    </Container>
  )
}

export default ScanAwaitingList