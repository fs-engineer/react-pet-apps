import React from "react";
import { Input } from "./Input.styled";

const FilterByName = ({ filter, onChange, type = "text" }) => (
  <Input
    onChange={(e) => onChange(e.target.value)}
    type={type}
    name="filter"
    value={filter}
  />
);

export default FilterByName;
