import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const MultiSelect = ({
  label = "Label",
  options = [],
  selected = [],
  setSelected = noop,
  isAllOption = false,
  emptyValue = "",
  size = "medium",
}) => {
  const filteredSelected = selected.filter((selection) =>
    options.includes(selection),
  );

  const isAllSelected =
    filteredSelected.length > 0 &&
    options.every((option) => filteredSelected.includes(option));

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (isAllOption && value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
    } else {
      setSelected(typeof value === "string" ? value.split(",") : value);
    }
  };

  const orderedSelected = [...filteredSelected].sort((a, b) => {
    return options.indexOf(a) - options.indexOf(b);
  });

  return (
    <FormControl sx={{ m: 1, width: 200 }} size={size}>
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        size={size}
        value={orderedSelected}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) =>
          isAllSelected ? allOption : selected.join(", ")
        }
      >
        {isAllOption && (
          <MenuItem value="all">
            <Checkbox
              checked={isAllSelected}
              indeterminate={!isAllSelected && filteredSelected.length > 0}
            />
            <ListItemText primary={allOption} />
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={orderedSelected.includes(option)} />
            <ListItemText primary={option || emptyValue} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
