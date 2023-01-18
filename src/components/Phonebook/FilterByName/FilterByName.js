import React from "react";
import { Filter } from "./FilterByName.styled";

const FilterByName = ({ filter, onChange }) => (
  <Filter onChange={onChange} type="text" name="filter" value={filter} />
);

export default FilterByName;
