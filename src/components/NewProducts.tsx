import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function NewProducts() {
  return (
    <Box sx={{ m: "90px 0 90px 0" }}>
      <Box sx={{ m: "0 200px 50px 200px" }}>
        <Typography sx={{ fontFamily: '"Lato", sans-serif', textAlign: "center" }} variant="h2">
          New products
        </Typography>
      </Box>
    </Box>
  );
}
