import React, { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from "react-redux";
import DashRecentSales from "../components/Dash/DashRecentSales";
import DashTops from "../components/Dash/DashTops";
import StorageIcon from '@material-ui/icons/Storage';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import WidgetsIcon from '@material-ui/icons/Widgets';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import "rsuite/dist/rsuite.css";
import { Card } from "react-bootstrap";


function Dashboard() {

  var dispatch = useDispatch();
  // if (!(corp !== undefined && corp !== null)) {
  //   dispatch(get_init_data({ ajax_call: 2 }));
  // }



  // useEffect(() => {
  //   dispatch(get_init_data({ ajax_call: 2 }));
  // }, [])


  // var corp = useSelector((state) => state.dash.corp_chart);

  // var rev_note      = corp.rev_note && corp.rev_note.split("OO");
  // var prof_note     = corp.profit_note && corp.profit_note.split("OO");
  // var cus_note      = corp.cus_note;
  // var order_note    = corp.order_note;

  // var revprof_state = {
  //   labels: corp.or_l.replace(/\"/g, "").split(","),
  //   datasets: [
  //     {
  //       label: 'Revenue',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: corp.rev_d.replace(/\"/g, "").split(","),
  //     }, {
  //       label: 'Profit',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: corp.prof_d.replace(/\"/g, "").split(","),
  //     }],

  // }

  // var cusor_state = {
  //   labels: corp.or_l.replace(/\"/g, "").split(","),
  //   datasets: [{
  //     label: 'Customer',
  //     backgroundColor: 'red',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderColor: 'red',
  //     borderWidth: 1,
  //     data: corp.cus_d.replace(/\"/g, "").split(","),
  //   },
  //   {
  //     label: 'Order',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 1,
  //     data: corp.or_d.replace(/\"/g, "").split(","),
  //   }]
  // }

  var cus_note=[];
   var order_note=[];
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <div className="notifications">
            <h6>Dashboard</h6>
            <div className="notify">
              <SettingsIcon/>
              <NotificationsIcon/>
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={3} sx={{padding: '0 !important'}}>
              <Grid item md={3}>
                <Card className="dash-card key-note">
                  <div>
                    <h6> Average Spent </h6>
                    <h4>$55,000.00</h4>
                    <p><span>+55%</span>Since Yesterday</p>
                  </div>
                  <StorageIcon/>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card className="dash-card key-note">
                  <div>
                    <h6> Average Spent </h6>
                    <h4>$55,000.00</h4>
                    <p><span>+55%</span>Since Yesterday</p>
                  </div>
                  <ShoppingBasketIcon/>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card className="dash-card key-note">
                  <div>
                    <h6> Average Spent </h6>
                    <h4>$55,000.00</h4>
                    <p><span>+55%</span>Since Yesterday</p>
                  </div>
                  <UnarchiveIcon/>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card className="dash-card key-note">
                  <div>
                    <h6> Average Spent </h6>
                    <h4>$55,000.00</h4>
                    <p><span>+55%</span>Since Yesterday</p>
                  </div>
                  <WidgetsIcon/>
                </Card>
              </Grid>
              <DashTops />
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Card className="dash-card">
            <h6> Recent Sales </h6>
            <DashRecentSales />
          </Card>
        </Grid>
      </Grid>
      {/* <DashEmail/> */}

    </>
  )
}

export default Dashboard