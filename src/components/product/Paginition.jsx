import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[800],
    },
  },
});

const Paginition = ({ count, handleChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          onChange={handleChange}
          count={count}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "white",
                  border: `1px solid ${orange[800]}`,
                },
                "& .MuiPaginationItem-icon": {
                  color: orange[800],
                },
                color: "black",
              }}
            />
          )}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Paginition;
