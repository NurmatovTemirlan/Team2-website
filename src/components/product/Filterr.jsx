import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { useProducts } from "../context/ProductContext";

const StyledFormControl = styled(FormControl)({
  margin: "20px",
  padding: "10px",
  border: "1px solid #FF8C00", // Темно-оранжевый цвет рамки
  borderRadius: "5px",
});

const DarkOrangeRadio = styled(Radio)({
  "&.Mui-checked": {
    color: "#FF8C00", // Темно-оранжевый цвет при нажатии
  },
});

const Filterr = () => {
  const { fetchByParams } = useProducts();

  return (
    <StyledFormControl>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => fetchByParams("category", e.target.value)}
      >
        <FormControlLabel
          value="All"
          control={<DarkOrangeRadio />}
          label="Все"
          sx={{ color: "black" }} // Темно-оранжевый цвет для текста
        />
        <FormControlLabel
          value="Групповые"
          control={<DarkOrangeRadio />}
          label="Групповые"
          sx={{ color: "black" }}
        />
        <FormControlLabel
          value="Индивидуальные"
          control={<DarkOrangeRadio />}
          label="Индивидуальное"
          sx={{ color: "black" }}
        />
      </RadioGroup>
    </StyledFormControl>
  );
};

export default Filterr;
