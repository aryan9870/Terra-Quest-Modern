import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function FilteredCourses() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full mt-10 px-20">
      <Box sx={{ width: "100%", bgcolor: "#020817", color: "white" }}>
        <Tabs
          sx={{}}
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#ff6b00",
            },
            "& .MuiTab-root": {
              color: "white",
            },
            "& .Mui-selected": {
              color: "#ff6b00 !important",
            },
          }}
        >
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="All" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="UPSC" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="UPPCS" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="Prelims" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="Mains" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="Advance" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="PYQs" />
          <Tab sx={{ color: "white", fontSize: "2rem" }} label="Test Series" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {value === 0 && <h3>All Courses</h3>}
          {value === 1 && <h3>UPSC Courses</h3>}
          {value === 2 && <h3>UPPCS Courses</h3>}
          {value === 3 && <h3>Prelims Courses</h3>}
          {value === 4 && <h3>Mains Courses</h3>}
          {value === 5 && <h3>Advance Courses</h3>}
          {value === 6 && <h3>PYQs Courses</h3>}
          {value === 7 && <h3>Test Series Courses</h3>}
        </Box>
      </Box>
    </div>
  );
}
