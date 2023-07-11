import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Logo from '../../Assets/Img/Navbar/logo.svg'
import HomeSvg from '../../Assets/Img/Navbar/home.svg'
import RegistrationSvg from '../../Assets/Img/Navbar/registration.svg'
import LineupSvg from '../../Assets/Img/Navbar/line-up.svg'
import ScanSvg from '../../Assets/Img/Navbar/scan.svg'
import InsightSvg from '../../Assets/Img/Navbar/insight-board.svg'
import HomeSelectedSvg from '../../Assets/Img/Navbar/home-selected.svg'
import RegistrationSelectedSvg from '../../Assets/Img/Navbar/registration-selected.svg'
import LineupSelectedSvg from '../../Assets/Img/Navbar/line-up-selected.svg'
import ScanSelectedSvg from '../../Assets/Img/Navbar/scan-selected.svg'
import InsightSelectedSvg from '../../Assets/Img/Navbar/insight-board-selected.svg'
import './index.css'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from "../../Context/Authentication/AuthProvider";
import ThemeToggler from "../ThemeToggler";
import { useLocation } from "react-router-dom";

const navLinks = [
  {
    imgPath: HomeSvg,
    selectedImgPath: HomeSelectedSvg,
    name: 'Home',
    action: '/dashboard'
  },
  {
    imgPath: RegistrationSvg,
    selectedImgPath: RegistrationSelectedSvg,
    name: 'Registration',
    action: '/patient-registration'
  },
  {
    imgPath: LineupSvg,
    selectedImgPath: LineupSelectedSvg,
    name: 'Line-up',
    action: '/line-up'
  },
  {
    imgPath: ScanSvg,
    selectedImgPath: ScanSelectedSvg,
    name: 'Scan',
    action: '/scan'
  },
  {
    imgPath: InsightSvg,
    selectedImgPath: InsightSelectedSvg,
    name: 'Insight Board',
    action: '/insight'
  }
]
const settings = ["Profile", "Account", "Dashboard", "logout"];

function ResponsiveAppBar() {
  const history = useHistory();
  const location = useLocation();
  const { logOut } = React.useContext(AuthContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    if(setting === 'logout') {
      history.push('/signin')
      logOut()
    }
    setAnchorElUser(null);
  };
  const getActiveSvg = (page) => {
    if(location.pathname.split('/')[1] === page.action.split('/')[1]) {
      return page.selectedImgPath
    }
    return page.imgPath
  }
  return (
    <>
      <AppBar position="fixed" className="theme-navbar__container">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo Start */}
            <IconButton aria-label="logo" className="nav-link-logo-icon-button">
              <img
                src={Logo}
                srcSet={Logo}
                alt={'logo'}
                loading="lazy"
              />
            </IconButton>
            {/* Logo End */}
            {/* Mobile Dropdown page NavLink start */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="var(--theme-font-color__tertiary)"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {navLinks.map((page) => (
                  <NavLink activeClassName="nav-link__active" to={page.action} key={page.name}>
                    <MenuItem
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 1.25, color: "var(var(--theme-font-color__primary))", display: "block" }}
                      className="nav-link-menu-item"
                    >
                      <IconButton
                        key={page.name}
                        aria-label={page.name}
                        sx={{pl: 1, pr: 1}}
                        className="nav-link-menu-item-icon-button"
                      >
                        <img
                          src={getActiveSvg(page)}
                          srcSet={getActiveSvg(page)}
                          alt={page.name}
                          loading="lazy"
                        />
                        <Typography  sx={{ pl: 1 }} textAlign="center">{page.name}</Typography>
                      </IconButton>
                    </MenuItem>
                  </NavLink>
              ))}
              </Menu>
            </Box>
            {/* Mobile Dropdown page NavLink end */}
            {/* Desktop NavLink start */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map((page) => (
                <NavLink activeClassName="nav-link__active" to={page.action} key={page.name}>
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 1.25, color: "var(--theme-font-color__primary)", display: "block" }}
                    className="nav-link-menu-item"
                  >
                  <IconButton
                    key={page.name}
                    aria-label={page.name}
                    sx={{pl: 1, pr: 1}}
                    className="nav-link-menu-item-icon-button"
                    // onClick={(event) => handleNavigationRouting(event, page)}
                  >
                    <img
                      src={getActiveSvg(page)}
                      srcSet={getActiveSvg(page)}
                      alt={page.name}
                      loading="lazy"
                    />
                    <Typography sx={{ pl: 1 }} textAlign="center">{page.name}</Typography>
                  </IconButton>
                </MenuItem>
                </NavLink>
              ))}
            </Box>
            {/* Desktop NavLink End */}
            {/* Notification Start */}
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="var(--theme-font-color__tertiary)"
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            {/* Notification End */}
            {/* Setting & Profile Start */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ mr: 2 }}/>
                  <Typography textAlign="center" sx={{ display: { xs: "none", md: "flex" }}}>Manoj Y</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <ThemeToggler />
              </Menu>
            </Box>
            {/* Setting & Profile End */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
