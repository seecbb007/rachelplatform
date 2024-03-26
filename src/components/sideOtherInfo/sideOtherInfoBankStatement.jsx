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
export default function SideOtherInfoBankStatement() {
  const mockBankStatementgeneral1 = [
    {
      itemNumber: 1,
      itemType: "Account Holder",
      item: "John Doe",
    },
    {
      itemNumber: 2,
      itemType: "Account Number",
      item: "1234567890000",
    },
    {
      itemNumber: 3,
      itemType: "Financial Institution",
      item: "BOA",
    },
    {
      itemNumber: 4,
      itemType: "Beginning Balance",
      item: "500000",
    },
    {
      itemNumber: 4,
      itemType: "Ending Balance",
      item: "662000",
    },
  ];
  const mockBankStatementlargeDeposit1 = [
    { itemNumber: 1, date: "01/02/2033", depositAmount: "12000" },
    { itemNumber: 2, date: "01/15/2033", depositAmount: "50000" },
    { itemNumber: 3, date: "01/20/2033", depositAmount: "100000" },
  ];
  const mockBankStatementgeneral2 = [
    {
      itemNumber: 1,
      itemType: "Account Holder",
      item: "John Doe",
    },
    {
      itemNumber: 2,
      itemType: "Account Number",
      item: "1234567890000",
    },
    {
      itemNumber: 3,
      itemType: "Financial Institution",
      item: "BOA",
    },
    {
      itemNumber: 4,
      itemType: "Beginning Balance",
      item: "662000",
    },
    {
      itemNumber: 4,
      itemType: "Ending Balance",
      item: "882000",
    },
  ];
  const mockBankStatementlargeDeposit2 = [
    { itemNumber: 1, date: "02/02/2033", depositAmount: "200000" },
  ];
  return (
    <div className="sideOtherInfo">
      <div className="sideOtherInfo_Container">
        <div className="sideOtherInfo_title">Bank Statement</div>

        <div className="eachPaystub">
          <div className="sideOtherInfo_section">
            <div>01/01/2023 - 01/31/2023</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>General Information</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {mockBankStatementgeneral1.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.itemNumber}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.itemType}
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
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Deposit Amount</TableCell>
                      <TableCell align="right">Verification</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockBankStatementlargeDeposit1.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.number}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.date}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.depositAmount}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.verification}
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
            <div>02/01/2023 - 02/28/2023</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>General Information</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {mockBankStatementgeneral2.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.itemNumber}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.itemType}
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
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Deposit Amount</TableCell>
                      <TableCell align="right">Verification</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockBankStatementlargeDeposit2.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.number}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {eachInfo.date}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.depositAmount}
                          </TableCell>
                          <TableCell align="right">
                            {eachInfo.verification}
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
