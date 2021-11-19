import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import ManageProduct from '../ManageProduct/ManageProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import useContexts from '../../../hooks/useContexts';

const drawerWidth = 240;

const NewDashboard = (props) => {
    let { path, url } = useRouteMatch();
    const {authInfo}= useContexts()
    const {check}= authInfo
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {
        check?<List>
        <Link style={{textDecoration:"none", color:"black"}} to={`${url}/manageproduct`}>Manage Product</Link> <br />
        <Link style={{textDecoration:"none", color:"black"}} to={`${url}/manageorder`}>Manage order</Link> <br />
        <Link style={{textDecoration:"none", color:"black"}} to={`${url}/makeadmin`}>Make Admin</Link> <br />
        <Link style={{textDecoration:"none", color:"black"}} to={`${url}/addproduct`}>Add Product</Link> <br />
          
        </List> : <List>
      <Link style={{textDecoration:"none", color:"black"}} to={`${url}`}>My order</Link> <br />
      <Link style={{textDecoration:"none", color:"black"}} to={`${url}/review`}>Review</Link> <br />
      <Link style={{textDecoration:"none", color:"black"}} to={`${url}/pay`}>Pay</Link> <br />
        
      </List>
      }
      

      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Switch>

        <Route exact path={path}>
            <MyOrder></MyOrder>

        </Route>

        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        
        {/* admin  */}
        <Route path={`${path}/manageproduct`}>
          <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/manageorder`}>
          <ManageOrder></ManageOrder>
        </Route>
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}
NewDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
export default NewDashboard
