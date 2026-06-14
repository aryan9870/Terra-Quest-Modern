import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const FILTER_TABS = [
  "All",
  "UPSC",
  "UPPCS",
  "Prelims",
  "Mains",
  "Advance",
  "PYQs",
  "Test Series",
];

const TAB_CONTENT = [
  "All Courses",
  "UPSC Courses",
  "UPPCS Courses",
  "Prelims Courses",
  "Mains Courses",
  "Advance Courses",
  "PYQs Courses",
  "Test Series Courses",
];

export default function FilteredCourses() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="mx-auto mt-6 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-10">
      <Box sx={{ width: "100%", bgcolor: "#020817", color: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-scrollButtons": {
              color: "white",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#ff6b00",
            },
            "& .MuiTab-root": {
              color: "white",
              textTransform: "none",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1.25rem",
                lg: "1.5rem",
                xl: "2rem",
              },
              minWidth: { xs: "auto", sm: 90 },
              px: { xs: 1.5, sm: 2, md: 3 },
            },
            "& .Mui-selected": {
              color: "#ff6b00 !important",
            },
          }}
        >
          {FILTER_TABS.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>

        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
            {TAB_CONTENT[value]}
          </h3>
        </Box>
      </Box>
    </section>
  );
}
