import React from "react";
import "./pricing.css";
// MUI
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
export default function Pricing1() {
  //   const pricingItem_title = [
  //     "term",
  //     "Interest Rate / APR",
  //     ,
  //     "Lender Credits/Points",
  //     "Monthly Paymen",
  //   ];
  const pricingMockData = [
    {
      itemTitle: [
        "Term",
        "Interest Rate/ APR",

        "Lender Credits/Points",
        "Monthly Payment",
      ],
      term: "30Yr fixed",
      rate: "6.75 / 6.99%",

      lenderCP: "$ 2000",
      monthlyPayment: "$7000",
    },
    {
      itemTitle: [
        "Term",
        "Interest Rate/ APR",

        "Lender Credits/Points",
        "Monthly Payment",
      ],
      term: "30Yr fixed",
      rate: "6.875 / 7.15%",

      lenderCP: "$ 1000",
      monthlyPayment: "$7500",
    },
  ];
  const loanCharge = [
    { loanChargeItem: "Origination fee", loanChargeCost: "$1099" },
  ];
  const loanCharge_cannotShop = [
    {
      cannotShopItem: "Apprasal",
      cannotShopitem_cost: "$600-1000",
    },
    {
      cannotShopItem: "Credit Report",
      cannotShopitem_cost: "$60",
    },
    {
      cannotShopItem: "Flood Certificate",
      cannotShopitem_cost: "$16",
    },
  ];
  return (
    <div>
      <div className="pricingContainer">
        <div className="pricingTitle">Your pricing based on the zipcode</div>
        <div className="pricingList">
          {pricingMockData.map((eachData) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    border: "1px solid black",
                    // width: "60rem",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="each_pricingItem">
                    <div className="pricingItem_TitleContainer">
                      {eachData.itemTitle.map((eachTitle) => {
                        return (
                          <div className="each_pricingItem_title">
                            {eachTitle}
                          </div>
                        );
                      })}
                    </div>
                    <div className="pringItem_ItemContainer">
                      <div>{eachData.term}</div>
                      <div>{eachData.rate}</div>

                      <div>{eachData.lenderCP}</div>
                      <div>{eachData.monthlyPayment}</div>
                    </div>
                  </div>

                  <button className="rachel_button">Talk to Rachel</button>
                </AccordionSummary>
                <AccordionDetails>
                  <div>Mortgage fee included</div>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 450,
                      bgcolor: "background.paper",
                    }}
                  >
                    <Typography>A. Origination Charges</Typography>
                    {loanCharge.map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={value.loanChargeCost}
                      >
                        <ListItemText primary={value.loanChargeItem} />
                      </ListItem>
                    ))}
                    <Typography>B. Services You Can Not Shop For</Typography>
                    {loanCharge_cannotShop.map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={value.cannotShopitem_cost}
                      >
                        <ListItemText primary={value.cannotShopItem} />
                      </ListItem>
                    ))}
                    <Typography>
                      All other title,recording fee, prepaid interest, prepaid
                      property tax will apply
                    </Typography>
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ border: "1px solid red" }}
            >
              <div className="each_pricingItem">
                {pricingItem_title.map((eachItem) => {
                  return (
                    <div className="each_pricingItem_title">{eachItem}</div>
                  );
                })}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion> */}
        </div>
      </div>
    </div>
  );
}
