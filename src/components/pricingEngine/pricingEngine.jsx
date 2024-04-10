import React, { useState } from "react";
import "./pricingEngine.css";
//mui
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
export default function PricingEngine() {
  const [alignment, setAlignment] = React.useState("Purchase");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const OccupancyType = [
    {
      value: "Owner Occupied",
    },
    {
      value: "Second Home",
    },
    {
      value: "Investment",
    },
  ];
  const ficoScore = [
    {
      value: "500 - 539 (Poor)",
    },
    {
      value: "540 - 559 (Poor)",
    },
    {
      value: "580 - 599 (Fair)",
    },
    {
      value: "600 - 619 (Fair)",
    },
    {
      value: "620 - 639 (Fair)",
    },
    {
      value: "640 - 659 (Fair)",
    },
    {
      value: "660 - 679 (Good)",
    },
    {
      value: "680 - 699 (Good)",
    },
    {
      value: "700 - 719 (Good)",
    },
    {
      value: "720 - 739 (Good)",
    },
    {
      value: "740 - 759 (Very Good)",
    },
    {
      value: "760 - 779 (Very Good)",
    },
    {
      value: "760 - 779 (Very Good)",
    },
    {
      value: "780 - 799 (Very Good)",
    },
    {
      value: "800 or higher (Exceptional)",
    },
  ];
  //ZIPCDE
  const [zipCode, setZipCode] = useState("");
  const [location, setLocation] = useState({ city: "", state: "" });
  const handleZipChange = (event) => {
    const zip = event.target.value;
    setZipCode(zip);

    if (zip.length === 5) {
      // Assuming US ZIP codes
      fetch(`https://api.zippopotam.us/us/${zip}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Invalid ZIP code.");
        })
        .then((data) => {
          const { places } = data;
          setLocation({
            city: places[0]["place name"],
            state: places[0].state,
          });
        })
        .catch((error) => {
          console.error(error.message);
          setLocation({ city: "Invalid ZIP code", state: "" });
        });
    } else {
      setLocation({ city: "", state: "" });
    }
  };
  //Loan type
  const loanType = [
    {
      value: "Conventional",
    },
    {
      value: "VA",
    },
    {
      value: "FHA",
    },
    {
      value: "ARM",
    },
  ];
  //property type
  const propertyType = [
    {
      value: "Single Family Residence",
    },
    {
      value: "Condominium - Attached",
    },
    {
      value: "Condominium - Detached",
    },
    {
      value: "Townhouse/PUD",
    },
    {
      value: "Duplex",
    },
    {
      value: "Triplex",
    },
    {
      value: "Fourplex",
    },
  ];
  //each pricing
  const [value, setValue] = React.useState("1");
  const handlePricingChange = (event, newValue) => {
    setValue(newValue);
  };
  //Pricing data table
  const columns = [
    { field: "id", headerName: "Interest Rate", width: 100 },
    { field: "lender", headerName: "Lender", width: 130 },
    {
      field: "lender_creditpoint",
      headerName: "Lender Credit/Points",
      width: 150,
    },
    {
      field: "monthlyPayment",
      headerName: "Monthly Payment(P + I)",
      type: "number",
      width: 150,
    },
  ];
  const pricingrows = [
    // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    {
      id: "6.25%",
      lender: "UWM",
      lender_creditpoint: "800",
      monthlyPayment: "$8000",
    },
    {
      id: "6.375%",
      lender: "UWM",
      lender_creditpoint: "- $1000",
      monthlyPayment: "$8300",
    },
    {
      id: "6.5%",
      lender: "UWM",
      lender_creditpoint: "- $2000",
      monthlyPayment: "$8600",
    },
  ];

  return (
    <div>
      <div className="pricingEngine_component">
        <div className="pe_title">Current Rates</div>

        <div className="rateSearchingTable">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              value="Purchase"
              sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#3537d0",
                },
              }}
            >
              Purchase
            </ToggleButton>
            <ToggleButton
              value="Refinance"
              sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "#3537d0",
                },
              }}
            >
              Refinance
            </ToggleButton>
          </ToggleButtonGroup>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "18rem",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="engine_selectionBox">
              <TextField
                label="Loan Amount"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Property Value"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Zip Code"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                onChange={handleZipChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                helperText={
                  zipCode.length >= 5 ? (
                    <div>
                      {location.city} , {location.state}
                    </div>
                  ) : (
                    <div></div>
                  )
                }
              />
              <TextField
                id="outlined-select-currency-native"
                select
                label="Property Type"
                // defaultValue="11"
                SelectProps={{
                  native: true,
                }}
                // helperText="Please select occupancy type"
              >
                {propertyType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </div>

            <div className="engine_selectionBox">
              <TextField
                id="outlined-select-currency-native"
                select
                label="Loan Type"
                // defaultValue="11"
                SelectProps={{
                  native: true,
                }}
              >
                {loanType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Occupancy Type"
                // defaultValue="11"
                SelectProps={{
                  native: true,
                }}
                // helperText="Please select occupancy type"
              >
                {OccupancyType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="FICO Score"
                defaultValue=""
                SelectProps={{
                  native: true,
                }}
                // helperText=""
              >
                {ficoScore.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              {alignment === "Purchase" ? (
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="First Time Home Buyer?"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </TextField>
              ) : (
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Refinance Type"
                  defaultValue=" "
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option></option>
                  <option>Rate & Term</option>
                  <option>Cash out</option>
                </TextField>
              )}
            </div>
          </Box>
        </div>
        <div className="pricingDisplay">
          <Box sx={{ width: "100%", typography: "body1", marginTop: "2rem" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handlePricingChange}
                  aria-label="lab API tabs pricing"
                >
                  <Tab
                    label="30yr Fixed"
                    value="1"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    label="20yr Fixed"
                    value="2"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    label="15yr Fixed"
                    value="3"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    label="10yr Fixed"
                    value="4"
                    sx={{ textTransform: "none" }}
                  />
                  <Tab label="ARM" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div>Item One, 30yr Fixed, EXAMPLE</div>
                <div style={{ height: "20rem", width: "100%" }}>
                  <DataGrid
                    rows={pricingrows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div> Item Two, 20yr Fixed</div>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Interest</TableCell>
                        <TableCell align="right">Lender</TableCell>
                        <TableCell align="right">
                          Lender Credit/Points
                        </TableCell>
                        <TableCell align="right">
                          Monthly Payment (P + I)
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pricingrows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{row.id}</TableCell>
                          <TableCell align="right">{row.lender}</TableCell>
                          <TableCell align="right">
                            {row.lender_creditpoint}
                          </TableCell>
                          <TableCell align="right">
                            {row.monthlyPayment}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value="3">Item Three,15</TabPanel>
              <TabPanel value="4">Item Four,10</TabPanel>
              <TabPanel value="5">Item Five,ARM</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}
