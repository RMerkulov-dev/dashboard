import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Gauge, GaugeType } from "@eva-ics/webengine-react";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  const data_1 = Array.from({ length: 5 }, (_, rowIndex) => {
    return [`Row ${rowIndex + 1}, Cell 1`, `Row ${rowIndex + 1}, Cell 2`];
  });

  const data_2 = Array.from({ length: 10 }, (_, rowIndex) => {
    return [
      `Row ${rowIndex + 1}, Cell 1`,
      `Row ${rowIndex + 1}, Cell 2`,
      `Row ${rowIndex + 1}, Cell 3`,
      <TableCell key={`button-${rowIndex}`}>
        <Button variant="contained" color="primary">
          Click {rowIndex + 1}
        </Button>
        <span>{rowIndex + 1}</span>
      </TableCell>,
    ];
  });

  const data_3 = Array.from({ length: 10 }, (_, rowIndex) => {
    return [
      `Row ${rowIndex + 1}, Cell 1`,
      `Row ${rowIndex + 1}, Cell 2`,
      `Row ${rowIndex + 1}, Cell 3`,
      `Row ${rowIndex + 1}, Cell 4`,
      `Row ${rowIndex + 1}, Cell 5`,
      `Row ${rowIndex + 1}, Cell 6`,
    ];
  });

  return (
    <main>
      <div className="root-container">
        <div className="dashboard-wrapper">
          <div className="dashboard-wrapper__connection">
            <div className="connection-status">Connection</div>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <Select
                  labelId="dashboard-select-label"
                  id="dashboard-select"
                  value={selectedValue}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    "&:focus": {
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    },
                    "&::before": {
                      color: "#fff",
                    },
                  }}
                >
                  <MenuItem value={10}>Value 1</MenuItem>
                  <MenuItem value={20}>Value 2</MenuItem>
                  <MenuItem value={30}>Value 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="dashboard-wrapper__content">
            <div className="dashboard-wrapper__block">
              <div className="dashboard-wrapper__part">
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Column 1</TableCell>
                        <TableCell>Column 2</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data_1.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="dashboard-wrapper__part">
                <TableContainer component={Paper} style={{ maxHeight: 300 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Column 1</TableCell>
                        <TableCell>Column 2</TableCell>
                        <TableCell>Column 3</TableCell>
                        <TableCell>Column 4</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data_2.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div className="dashboard-wrapper__block">
              <div className="dashboard-wrapper__part">
                <div className="dashboard-wrapper__content__gauges">
                  <Gauge
                    type={GaugeType.Modern}
                    diameter={130}
                    minValue={0}
                    maxValue={100}
                  />
                  <Gauge
                    type={GaugeType.Modern}
                    diameter={130}
                    minValue={0}
                    maxValue={100}
                  />
                  <Gauge
                    type={GaugeType.Modern}
                    diameter={130}
                    minValue={0}
                    maxValue={100}
                  />
                  <Gauge
                    type={GaugeType.Modern}
                    diameter={130}
                    minValue={0}
                    maxValue={100}
                  />
                  <Gauge
                    type={GaugeType.Modern}
                    diameter={130}
                    minValue={0}
                    maxValue={100}
                  />
                </div>
              </div>
              <div className="dashboard-wrapper__part">
                <TableContainer component={Paper} style={{ maxHeight: 300 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Column 1</TableCell>
                        <TableCell>Column 2</TableCell>
                        <TableCell>Column 3</TableCell>
                        <TableCell>Column 4</TableCell>
                        <TableCell>Column 5</TableCell>
                        <TableCell>Column 6</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data_3.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
