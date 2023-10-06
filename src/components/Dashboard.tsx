import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { Gauge, GaugeType } from "@eva-ics/webengine-react";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  const params = ["EVA ICS logal", "EVA ICS logal-1", "EVA ICS logal-2"];
  const data = [
    { column1: "system", column2: "mws1" },
    { column1: "server time", column2: "2023-0615T02:14:17+02:00" },
    { column1: "version", column2: "4.0.1" },
    { column1: "build", column2: "2023061501" },
    { column1: "uptime", column2: "4053.55690865" },
  ];

  const data_2 = [
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
    { id: 1, col1: "Row 1", col2: "Data A", col3: "Data X", col4: "Data Z" },
  ];

  return (
    <div>
      <div className="dashboard-main-wrapper root-container">
        <div className="dashboard-main-wrapper-content">
          <div className="dashboard-main-wrapper-content__side-left">
            <div className="dashboard-select">
              <div className="dashboard-select__connection">Connection</div>
              <div>
                <Select
                  className="editors-select"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  {params?.map((v) => (
                    <MenuItem key={v} value={v}>
                      {v}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="dashboard-main-content-block_table">
              <div className="dashboard-main-content-block__header">
                <h2 className="heading-h2">Node Info</h2>
              </div>
              <div className="dashboard-main-content-block__content content-info">
                <table className="info-table">
                  <tbody>
                    {data.map((row, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#191D22" : "#121721",
                        }}
                      >
                        <td>{row.column1}</td>
                        <td>{row.column2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dashboard-main-content-block_table">
              <div className="dashboard-main-content-block__header">
                <h2 className="heading-h2">HMI sessions</h2>
              </div>
              <div className="dashboard-main-content-block__content content-sessions">
                <table className="sessions-table">
                  <thead>
                    <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                      <th>Column 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data_2.map((row, index) => (
                      <tr
                        key={row.id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#191D22" : "#121721",
                        }}
                      >
                        <td>{row.col1}</td>
                        <td>{row.col2}</td>
                        <td>{row.col3}</td>
                        <td className="table-action">
                          {row.col4}
                          <button>kill</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="dashboard-main-wrapper-content__side-right">
            <div className="dashboard-main-content-gauges">
              <Gauge
                type={GaugeType.Modern}
                diameter={120}
                minValue={0}
                maxValue={100}
              />
              <Gauge
                type={GaugeType.Modern}
                diameter={120}
                minValue={0}
                maxValue={100}
              />
              <Gauge
                type={GaugeType.Modern}
                diameter={120}
                minValue={0}
                maxValue={100}
              />
              <Gauge
                type={GaugeType.Modern}
                diameter={120}
                minValue={0}
                maxValue={100}
              />
              <Gauge
                type={GaugeType.Modern}
                diameter={120}
                minValue={0}
                maxValue={100}
              />
            </div>
            <div className="dashboard-main-content-block_table ">
              <div className="dashboard-main-content-block__header">
                <h2 className="heading-h2">Cloud</h2>
              </div>
              <div className="dashboard-main-content-block__content content-sessions">
                <table className="sessions-table">
                  <thead>
                    <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                      <th>Column 4</th>
                      <th>Column 5</th>
                      <th>Column 6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data_2.map((row, index) => (
                      <tr
                        key={row.id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#191D22" : "#121721",
                        }}
                      >
                        <td>{row.col1}</td>
                        <td>{row.col2}</td>
                        <td>{row.col3}</td>
                        <td>{row.col4}</td>
                        <td>{row.col4}</td>
                        <td>{row.col4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
