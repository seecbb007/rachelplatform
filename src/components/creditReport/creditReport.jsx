import React, { useState } from "react";
import "./creditReport.css";
import { mockData } from "../../mockdataCredit";

//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

export default function CreditReport() {
  //Get average median credit score for all borrowers
  function medianCreditScoreForAll(a, b) {
    return Math.floor((a + b) / 2);
  }
  //Check the minimum Credit Score
  function minimumCreditScore(score) {
    if (score < 620) {
      return "Fail to meet loan eligibility for fixed-rate loan";
    }
    if (score < 640) {
      return "Fail to meet loan eligibility for ARMs";
    }
    if (score >= 640) {
      return "meet eligibility, continue to process";
    }
  }
  //Include Public record information:  disclose whether any judgments, foreclosures, tax liens, or bankruptcies were discovered

  //mockData
  const mockPersonalData = {
    name: "John Doe",
    ficoScore: 650,
    reportIssuedDate: "03/01/2023",
  };
  //MUI table
  function createData(name: number, accountType: string, openedDate: string) {
    return { name, accountType, openedDate };
  }

  const rows = [
    createData(1, "Citi credit card", " 01 /2023"),
    createData(2, "USAA Saving Account", " 01 /2023"),
    createData(3, "CHASE credit card", " 02 /2023"),
  ];
  const [mockPersonalDataCreditReport, setMockPersonalDataCreditReport] =
    useState(mockData.mortgageApplication.creditReport.listOfDebts);

  //Mock Data for Public Account
  const mockDataPublicAccount = [
    {
      number: "ABC111",
      fileDate: "03/11",
      actionType: "CHAPTER 11 BANKRUPTCY",
      status: "SATISFIED",
      statusDate: "01/12",
    },
  ];
  return (
    <div style={{ backgroundColor: "#e7ecef" }}>
      <div className="creditReportPage">
        <div className="creditReportPage_Container">
          <div className="cr_header">
            <div>Credit Report</div>
          </div>
          <div className="cr_allInformation">
            <div className="generalInfo">
              <div>Name: {mockPersonalData.name}</div>
              <div>
                <div>FICO Score: {mockPersonalData.ficoScore}</div>
                <div>Issued Date: {mockPersonalData.reportIssuedDate}</div>
              </div>
            </div>
            <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
              <Typography>Credit Report Info</Typography>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Account</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Monthly Payment</TableCell>
                    <TableCell align="right">Unpaid Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockPersonalDataCreditReport.map((eachDebt) => {
                    return (
                      <TableRow
                        key={eachDebt.accountNumber}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {eachDebt.creditorName}
                        </TableCell>
                        <TableCell align="right">
                          {eachDebt.accountType}
                        </TableCell>
                        <TableCell align="right">
                          {eachDebt.monthlyPayment}
                        </TableCell>
                        <TableCell align="right">{eachDebt.balance}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
              <Typography>Opened Account</Typography>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Account</TableCell>
                    <TableCell align="right">Opened Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.number}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.accountType}
                      </TableCell>
                      <TableCell align="right">{row.openedDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
              <Typography>Public Record</Typography>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ActionType</TableCell>
                    <TableCell align="right">File Date</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Status Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockDataPublicAccount.map((eachAcct) => (
                    <TableRow
                      key={eachAcct.number}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {eachAcct.actionType}
                      </TableCell>
                      <TableCell align="right">{eachAcct.fileDate}</TableCell>
                      <TableCell align="right">{eachAcct.status}</TableCell>
                      <TableCell align="right">{eachAcct.statusDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
