

import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import AddProducts from "./components/CreateProductForm";
import AdminDashboard from "./components/Dashboard";
import AdminNavbar from "./components/AdminNavbar";

const menu = [
  {name: "Dashboard",path:"/ ", icon:<DashboardIcon/>},
  {name: "Products",path:"/admin/products ", icon:<LocalMallIcon/>},
  {name: "Customers",path:"/admin/customers ", icon:<PeopleIcon/>},
  {name: "Orders",path:"/admin/orders ", icon:<ShoppingCartIcon/>},
  {name: "AddProducts",path:"/admin/product/create ", icon:<AddCircleIcon/>},
  // {name: "",path:" "},
]
const drawerWidth = 240;

const Admin = () =>{

  
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  const drawer = (
    <Box 
    sx={{
      overflow:"auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      // border:"1px solid red",
      height:"100%"
    }}
    >
      {/* {isLargeScreen && <Toolbar/>} */}
      <List>
        {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };


  return(
    <div>
      <div className="flex h-full"> 
      <CssBaseline/>
      {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile}/> */}
      <Drawer
       variant={drawerVariant}
       sx={{
         width: drawerWidth,
         flexShrink: 0,
         [`& .MuiDrawer-paper`]: {
           width: drawerWidth,
           boxSizing: "border-box",
           ...(drawerVariant === "temporary" && {
             top: 0,
             [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
               {
                 position: "fixed",
                 left: 0,
                 right: 0,
                 height: "100%",
                 zIndex: (theme) => theme.zIndex.drawer + 2,
               },
           }),
         },
       }}
       open={isLargeScreen || sideBarVisible}
       
      
      >
        {drawer}
      </Drawer>

      <div className="w-[85%] ">

        <Routes> 
          <Route path="/" element={<AdminDashboard/>}></Route>
          <Route path='/product/create' element={<CreateProductForm/>}></Route>
          <Route path="/products" element={<ProductsTable/>}></Route>
          <Route path="/orders" element={<OrdersTable/>}></Route>
          <Route path="/customers" element={<CustomersTable/>}></Route>
        </Routes>
      </div>

      </div>
    </div>
  )
}

export default Admin;