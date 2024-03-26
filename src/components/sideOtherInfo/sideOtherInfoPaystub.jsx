import React from "react";
import "./sideOtherInfo.css";
//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
export default function SideOtherInfoPaystub() {
  const mockPaystubGeneral1 = [
    { number: 1, itemName: "Employer Name", item: "xxxx comapny" },

    {
      number: 2,
      itemName: "Mailing Address",
      item: "123 Main St,xxx city, CA, 12345",
    },
    { number: 3, itemName: "Hourly Rate", item: "35" },
    { number: 4, itemName: "YTD Month", item: "0.5" },
  ];
  const mockPaystubYearToDate1 = [
    {
      number: 1,
      itemName: "Regular",
      earning: "3000",
      currentYTD: "3000",
      ytdMonthly: "3000",
    },
    {
      number: 2,
      itemName: "Sick Leave/Vacation",
      earning: "500",
      currentYTD: "500",
      ytdMonthly: "250",
    },
    {
      number: 3,
      itemName: "Bonus",
      earning: "0",
      currentYTD: "0",
      ytdMonthly: "0",
    },
    {
      number: 3,
      itemName: "Holiday",
      earning: "300",
      currentYTD: "300",
      ytdMonthly: "150",
    },
  ];
  const mockPaystubGeneral2 = [
    { number: 1, itemName: "Employer Name", item: "xxxx comapny" },

    {
      number: 2,
      itemName: "Mailing Address",
      item: "123 Main St,xxx city, CA, 12345",
    },
    { number: 3, itemName: "Hourly Rate", item: "35" },
    { number: 4, itemName: "YTD Month", item: "1" },
  ];
  const mockPaystubYearToDate2 = [
    {
      number: 1,
      itemName: "Regular",
      earning: "3000",
      currentYTD: "6000",
      ytdMonthly: "6000",
    },
    {
      number: 2,
      itemName: "Sick Leave/Vacation",
      earning: "500",
      currentYTD: "500",
      ytdMonthly: "500",
    },
    {
      number: 3,
      itemName: "Bonus",
      earning: "0",
      currentYTD: "0",
      ytdMonthly: "0",
    },
    {
      number: 3,
      itemName: "Holiday",
      earning: "300",
      currentYTD: "300",
      ytdMonthly: "300",
    },
  ];

  return (
    <div className="sideOtherInfo">
      <div className="sideOtherInfo_Container">
        <div className="sideOtherInfo_title">Paystub Detail Information</div>
        <div className="eachPaystub">
          <div className="sideOtherInfo_section">
            <div>01/01/2023 - 01/14/2023</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>General Information</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {mockPaystubGeneral1.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.number}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.itemName}
                          </TableCell>
                          <TableCell align="right">{eachInfo.item}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>YearToDate Information</Typography>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Earnings</TableCell>
                      <TableCell align="right">Current YTD</TableCell>

                      <TableCell align="right">Monthly YTD</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockPaystubYearToDate1.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.number}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.itemName}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.earning}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.currentYTD}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.ytdMonthly}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="sideOtherInfo_section">
            <div>01/01/2023 - 01/14/2023</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>General Information</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {mockPaystubGeneral2.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.number}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.itemName}
                          </TableCell>
                          <TableCell align="right">{eachInfo.item}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>YearToDate Information</Typography>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Current YTD</TableCell>
                      <TableCell align="right">months</TableCell>
                      <TableCell align="right"> YTD Monthly</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockPaystubYearToDate2.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.number}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.itemName}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.earning}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.currentYTD}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.ytdMonthly}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
