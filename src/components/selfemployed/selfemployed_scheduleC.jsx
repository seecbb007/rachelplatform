import React, { useState } from "react";
import {
  MOCK_SOLEPROPS_CHEDULEC_DATA,
  MOCK_Coprs1120_DATA,
  MOCK_SCoprs1120S_DATA,
  MOCK_PARTNERSHIP1065_DATA,
} from "../mock_SELF_EMPLOYED_DATA";

//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
export default function Selfemployed_scheduleC() {
  const { year2022_scheduleC, year2023_scheduleC } =
    MOCK_SOLEPROPS_CHEDULEC_DATA;

  const { year2022_1120, year2023_1120 } = MOCK_Coprs1120_DATA;
  const { year2022_1120S, year2023_1120S } = MOCK_SCoprs1120S_DATA;
  const { year2022_1065, year2023_1065 } = MOCK_PARTNERSHIP1065_DATA;
  //Schedule C Income
  function calculateSumForScheduleC(data) {
    const {
      netProfitLoss,
      depreciation,
      depletion,
      amortization,
      mealAndEntertainment,
      expenseForBusiness,
      w2,
    } = data;

    return (
      netProfitLoss +
      depreciation +
      depletion +
      amortization -
      mealAndEntertainment +
      expenseForBusiness +
      w2
    );
  }
  const scheduleCIncomeDetail2022 = [
    {
      key: 1,
      itemName: "Net Profit/Loss (Line 31)",
      item: year2022_scheduleC.netProfitLoss,
    },
    {
      key: 2,
      itemName: "Depreciation (Line 13)",
      item: year2022_scheduleC.depreciation,
    },
    {
      key: 3,
      itemName: "Depletion (Line 12)",
      item: year2022_scheduleC.depletion,
    },
    {
      key: 4,
      itemName: "Amortization/Casualty loss",
      item: year2022_scheduleC.amortization,
    },
    {
      key: 5,
      itemName: "mealAndEntertainment",
      item: year2022_scheduleC.mealAndEntertainment,
    },
    {
      key: 6,
      itemName: "expenseForBusiness",
      item: year2022_scheduleC.expenseForBusiness,
    },
    {
      key: 7,
      itemName: "w2",
      item: year2022_scheduleC.w2,
    },
    {
      key: 8,
      itemName: "Total Schedule C Income",
      item: calculateSumForScheduleC(year2022_scheduleC),
    },
  ];
  const scheduleCIncomeDetail2023 = [
    {
      key: 1,
      itemName: "Net Profit/Loss (Line 31)",
      item: year2023_scheduleC.netProfitLoss,
    },
    {
      key: 2,
      itemName: "Depreciation (Line 13)",
      item: year2023_scheduleC.depreciation,
    },
    {
      key: 3,
      itemName: "Depletion (Line 12)",
      item: year2023_scheduleC.depletion,
    },
    {
      key: 4,
      itemName: "Amortization/Casualty loss",
      item: year2023_scheduleC.amortization,
    },
    {
      key: 5,
      itemName: "mealAndEntertainment",
      item: year2023_scheduleC.mealAndEntertainment,
    },
    {
      key: 6,
      itemName: "expenseForBusiness",
      item: year2023_scheduleC.expenseForBusiness,
    },
    {
      key: 7,
      itemName: "w2",
      item: year2023_scheduleC.w2,
    },
    {
      key: 8,
      itemName: "Total Schedule C Income",
      item: calculateSumForScheduleC(year2023_scheduleC),
    },
  ];
  //Corporation 1120 Income
  function calculateSumForCorporation1120(data) {
    const {
      taxableIncome,
      totalTax,
      depreciation,
      depletion,
      amortization,
      mortgagePayable,
      percentageOwnership,
      mealAndEntertainment,
      w2,
    } = data;
    let result =
      (taxableIncome -
        totalTax +
        depreciation +
        depletion +
        amortization -
        mealAndEntertainment -
        mortgagePayable) *
      percentageOwnership;
    return result + w2;
  }
  //S-Corporation 1120S Income
  function calculateSumForSCorporation1120S(data) {
    const {
      ordinaryIncomeK1,
      rentalIncomeK1,
      otherGrossRentalIncome,

      depreciation,
      depletion,
      amortization,
      mortgagePayable,
      percentageOwnership,
      mealAndEntertainment,
      w2,
    } = data;
    let result =
      (ordinaryIncomeK1 +
        rentalIncomeK1 +
        otherGrossRentalIncome +
        depreciation +
        depletion +
        amortization -
        mealAndEntertainment -
        mortgagePayable) *
      percentageOwnership;
    return result + w2;
  }
  //Partnership 1065 Income
  function calculateSumForPartnership1065(data) {
    const {
      ordinaryIncomeK1,
      rentalIncomeK1,
      otherGrossRentalIncome,
      depreciation,
      depletion,
      amortization,
      mortgagePayable,
      percentageOwnership,
      mealAndEntertainment,
      w2,
    } = data;
    let result =
      (ordinaryIncomeK1 +
        rentalIncomeK1 +
        otherGrossRentalIncome +
        depreciation +
        depletion +
        amortization -
        mealAndEntertainment -
        mortgagePayable) *
      percentageOwnership;
    return result + w2;
  }
  return (
    <div>
      <div>
        <div style={{ fontSize: "2rem" }}>Schedule C</div>
        <div>Business Start Date:</div>
        <div>Ownership share: </div>
        <div>
          Are you empployed by a family member, property seller, real estate
          agent, or other party to the transaction? Yes / No
        </div>
        <div>Total Schedule C Income </div>
        <div>
          In 2022:
          {calculateSumForScheduleC(year2022_scheduleC)}
        </div>
        <div>
          In 2023:
          {calculateSumForScheduleC(year2023_scheduleC)}
        </div>
        {/* Incresing trend: use the highest; decresing trend:use the average */}
      </div>
      <div>
        <div style={{ fontSize: "2rem" }}>Corporation 1120</div>
        <div>Business Start Date:</div>
        <div>Ownership share: </div>
        <div>
          Are you empployed by a family member, property seller, real estate
          agent, or other party to the transaction? Yes / No
        </div>
        <div>Total Corporation 1120 Income </div>
        <div>
          In 2022:
          {calculateSumForCorporation1120(year2022_1120)}
        </div>
        <div>
          In 2023:
          {calculateSumForCorporation1120(year2023_1120)}
        </div>
        {/* Incresing trend: use the highest; decresing trend:use the average */}
      </div>
      <div>
        <div style={{ fontSize: "2rem" }}>S-Corporation 1120S</div>
        <div>Business Start Date:</div>
        <div>Ownership share from K-1: </div>
        <div>
          Are you empployed by a family member, property seller, real estate
          agent, or other party to the transaction? Yes / No
        </div>
        <div>Total S-Corporation 1120s Income </div>
        <div>
          In 2022:
          {calculateSumForSCorporation1120S(year2022_1120S)}
        </div>
        <div>
          In 2023:
          {calculateSumForSCorporation1120S(year2023_1120S)}
        </div>
        {/* Incresing trend: use the highest; decresing trend:use the average */}
      </div>
      <div>
        <div style={{ fontSize: "2rem" }}>Partnership 1065</div>
        <div>Business Start Date:</div>
        <div>Ownership share from 1065: </div>
        <div>
          Are you empployed by a family member, property seller, real estate
          agent, or other party to the transaction? Yes / No
        </div>
        <div>Total Partnership 1065 Income </div>
        <div>
          In 2022:
          {calculateSumForPartnership1065(year2022_1065)}
        </div>
        <div>
          In 2023:
          {calculateSumForPartnership1065(year2023_1065)}
        </div>
        {/* Incresing trend: use the highest; decresing trend:use the average */}
      </div>
      <div className="sideOtherInfo_Container">
        <div className="sideOtherInfo_title">Schedul C </div>
        <div className="eachPaystub">
          <div className="sideOtherInfo_section">
            <div>2022 Schedule C from Form 1040</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>Detail from Schedule C</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {scheduleCIncomeDetail2022.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.key}
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
          </div>
          <div className="sideOtherInfo_section">
            <div>2023 Schedule C from Form 1040</div>
            <div className="sideOtherInfo_EachSection">
              <TableContainer component={Paper} sx={{ margin: "2rem 0" }}>
                <Typography>Detail from Schedule C</Typography>
                <Table aria-label="simple table">
                  <TableBody>
                    {scheduleCIncomeDetail2023.map((eachInfo) => {
                      return (
                        <TableRow
                          key={eachInfo.key}
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
          </div>
        </div>
      </div>
    </div>
  );
}
