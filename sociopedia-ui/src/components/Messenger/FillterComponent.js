import React, { useState } from "react";
import { Box, FormControl, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

const FilterComponent = ({ onApplyFilter }) => {
  const [filters, setFilters] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleApplyFilter = () => {
    onApplyFilter(filters);
  };

  return (
    <Box
      style={{ position: 'relative', backgroundColor: 'blue', left: '0', bottom: '0', width: '10%', height: '100%', padding: '10px' }}
    >
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={filters.option1} onChange={handleChange} name="option1" />}
            label="Option 1"
          />
          <FormControlLabel
            control={<Checkbox checked={filters.option2} onChange={handleChange} name="option2" />}
            label="Option 2"
          />
          <FormControlLabel
            control={<Checkbox checked={filters.option3} onChange={handleChange} name="option3" />}
            label="Option 3"
          />
        </FormGroup>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleApplyFilter}>
        Apply Filter
      </Button>
    </Box>
  );
};

export default FilterComponent;
