import React from "react";
import "./otherInfo.css";
export default function OtherInfo() {
  const otherInfo_payStub = [
    { infoName: "Mailing Address", content: "..." },
    { infoName: "Borrower Name", content: "..." },
    { infoName: "Job Title, if possible", content: "..." },
  ];
  const otherInfo_w2 = [
    { infoName: "Mailing Address", content: "..." },
    { infoName: "Borrower Name", content: "..." },
    { infoName: "SSN or SSN last 4 digits", content: "..." },
    { infoName: "Company Name", content: "..." },
  ];
  const otherInfo_bankStatement = [
    { infoName: "Mailing Address", content: "..." },
    { infoName: "Account Holder Name", content: "..." },
    { infoName: "bank account Number", content: "..." },
    {
      infoName: "Account Type",
      content: "checking/saving/investment account/...",
    },
  ];
  const bankStatement_LargeDeposits = [
    { date: "01/01/2023", description: "Wire", amount: 10000.0 },
    { date: "01/20/2023", description: "Wire", amount: 50000.0 },
    { date: "01/25/2023", description: "transfer", amount: 80000.0 },
  ];

  const otherInfo_creditReport_recentAccount = [
    { openeddate: "01/2023", description: "credit card" },
    { openeddate: "01/2023", description: "auto loan" },
  ];
  const otherInfo_creditReport_publicRecord = [
    { date: "03/12", ActionType: "CHAPTER 11 BANKRUPTCY" },
    { date: "01/09", ActionType: "..." },
  ];
  return (
    <div>
      <div>OTHER INFO SECTION, Structure for Paystub </div>
      <div className="example1">
        <h2 className="otherInfo_header1">Other Info</h2>
        <div className="example1_Container">
          {otherInfo_payStub.map((eachInfo) => {
            return (
              <div className="otherInfo_box">
                <div>{eachInfo.infoName}</div>
                <div>{eachInfo.content}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>OTHER INFO SECTION, Structure for W-2 </div>
      <div className="example1">
        <h2 className="otherInfo_header1">Other Info</h2>
        <div className="example1_Container">
          {otherInfo_w2.map((eachInfo) => {
            return (
              <div className="otherInfo_box">
                <div>{eachInfo.infoName}</div>
                <div>{eachInfo.content}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>OTHER INFO SECTION, Structure for Bank Statement </div>
      <div className="example1">
        <h2 className="otherInfo_header1">Other Info</h2>
        <div className="example1_Container">
          {otherInfo_bankStatement.map((eachInfo) => {
            return (
              <div className="otherInfo_box">
                <div>{eachInfo.infoName}</div>
                <div>{eachInfo.content}</div>
              </div>
            );
          })}
        </div>
        <div className="transactionList">
          <div>List of the large transactions</div>
          <div className="transactionList_eachList">
            <div>date</div>
            <div>description</div>
            <div>amount</div>
          </div>
          {bankStatement_LargeDeposits.map((eachInfo) => {
            return (
              <div className="transactionList_eachList">
                <div>{eachInfo.date}</div>
                <div>{eachInfo.description}</div>
                <div>{eachInfo.amount}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="creditReport_structure">
        <div>Structure for Credit Report</div>

        <div>
          All Borrower Name, SSN, FICO Score, DOB. AND credit report issue date
        </div>
        <div>OTHER INFO SECTION, Structure for Credit Report </div>
        <div className="example1">
          <h2 className="otherInfo_header1">Other Info</h2>

          <div className="creditReportList">
            <div>List of the recent open accounts</div>
            <div className="creditReportList_eachList">
              <div>date</div>
              <div>description</div>
            </div>
            {otherInfo_creditReport_recentAccount.map((eachInfo) => {
              return (
                <div className="creditReportList_eachList">
                  <div>{eachInfo.openeddate}</div>
                  <div>{eachInfo.description}</div>
                </div>
              );
            })}
          </div>
          <div className="creditReportList">
            <div>
              List of the any bankruptcies, foreclosures, or forbearances
            </div>
            <div className="creditReportList_eachList">
              <div>date</div>
              <div>description</div>
            </div>
            {otherInfo_creditReport_publicRecord.map((eachInfo) => {
              return (
                <div className="creditReportList_eachList">
                  <div>{eachInfo.date}</div>
                  <div>{eachInfo.ActionType}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
