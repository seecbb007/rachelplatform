import React, { useState } from "react";
import { Mock_1040ScheduleE_RentalIncome } from "../mockRentalIncome";

export default function HousingExpense() {
  const { personalInfo, data, year, documentType } =
    Mock_1040ScheduleE_RentalIncome.fileData;

  const [detailPropertyData, setDetailPropertyData] = useState(
    data.detailHomeAddress
  );
  //Housing Expense Structure
  const housingExpense = {
    homeInsurance: {
      totalAmount: 1000,
      period: 12,
    },
    hoa: {
      totalAmount: 5000,
      period: 12,
    },
    propertyTax: {
      totalAmount: 20000,
      period: 12,
    },
  };
  // Rental Income Structure, please refer to mockRentalIncome.js

  function calculateHousingExpense_yearly(data) {
    const { totalAmount, period } = data;
    return (totalAmount / period).toFixed(1);
  }

  //calculateRental Income:
  function calculateRentalIncome(data) {
    const {
      homeAddress,
      fairRentalDate,
      personalUseDate,
      totalRentalIncome,
      totalRentalExpense,
      insuranceExpense,
      mortgageInterest,
      taxExpenses,
      hoa,
      depreciationOrDepletion,
      extraordinaryExpense,
    } = data;
    let RentalMonth = (fairRentalDate / 365).toFixed(0);
    let adjustedRentalIncome =
      (totalRentalIncome -
        totalRentalExpense -
        insuranceExpense -
        taxExpenses -
        hoa +
        mortgageInterest +
        depreciationOrDepletion +
        extraordinaryExpense) /
      12;
    return (adjustedRentalIncome / RentalMonth).toFixed(2);
  }
  return (
    <div>
      <div>
        <h1>Housing Expense Calculation:</h1>
        <div>
          Yearly Home Insurance Amount:
          {calculateHousingExpense_yearly(housingExpense.homeInsurance)}
        </div>
        <div>
          Yearly HOA Amount:
          {calculateHousingExpense_yearly(housingExpense.hoa)}
        </div>
        <div>
          Yearly PropertyTax Amount:
          {calculateHousingExpense_yearly(housingExpense.propertyTax)}
        </div>
      </div>
      <div>
        <div> Each Property Rental Income</div>
        <div>
          {detailPropertyData.map((eachProperty) => {
            return (
              <div style={{ border: "2px solid black" }}>
                <div>Home Address: {eachProperty.homeAddress}</div>
                <div>Fair Rental Date: {eachProperty.fairRentalDate}</div>
                <div>Total Rental Income: {eachProperty.totalRentalIncome}</div>
                <div>
                  Total Rental Expense: {eachProperty.totalRentalExpense}
                </div>
                <div>
                  Total Insurance Expense in schedule E:
                  {eachProperty.insuranceExpense}
                </div>
                <div>
                  Total mortgage Interest in schedule E:
                  {eachProperty.mortgageInterest}
                </div>
                <div>
                  Total Tax Expense in schedule E:
                  {eachProperty.taxExpenses}
                </div>
                <div>
                  HOA in schedule E:
                  {eachProperty.hoa}
                </div>
                <div>
                  Total Depreciation/Depletion in schedule E:
                  {eachProperty.depreciationOrDepletion}
                </div>
                <div>
                  Total extraordinaryExpense in schedule E:
                  {eachProperty.extraordinaryExpense}
                </div>
                <div>
                  Monthly qualifying rental income (or loss):{" "}
                  {calculateRentalIncome(eachProperty)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
