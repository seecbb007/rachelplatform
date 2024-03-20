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

export default function SideOtherInfoW2() {
  const mockW2General = [
    { number: 1, itemName: "Year", item: "2022" },
    { number: 2, itemName: "Employer Name", item: "xxxx comapny" },
    {
      number: 3,
      itemName: "Employe Name",
      item: "John Doe",
    },

    { number: 4, itemName: "Employee Spcoa; Security", item: "xxx-xx-xxxx" },

    {
      number: 5,
      itemName: "Employee Mailing Address",
      item: "123 Main St,xxx city, CA, 12345",
    },
  ];
  const mockW2Genera2 = [
    { number: 1, itemName: "Year", item: "2023" },
    { number: 2, itemName: "Employer Name", item: "xxxx comapny" },
    {
      number: 3,
      itemName: "Employe Name",
      item: "John Doe",
    },

    { number: 4, itemName: "Employee Spcoa; Security", item: "xxx-xx-xxxx" },

    {
      number: 5,
      itemName: "Employee Mailing Address",
      item: "123 Main St,xxx city, CA, 12345",
    },
  ];
  return (
    <div className="sideOtherInfo">
      <div className="sideOtherInfo_Container">
        <div className="sideOtherInfo_title">W-2 Detail Information</div>

        <div className="eachPaystub">
          <div className="sideOtherInfo_section">
            <div>2022</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>General Information</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {mockW2General.map((eachInfo) => {
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
            <div className="sideOtherInfo_EachSection"></div>
          </div>
          <div className="sideOtherInfo_section">
            <div>2023</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>General Information</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {mockW2Genera2.map((eachInfo) => {
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
            <div className="sideOtherInfo_EachSection"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
