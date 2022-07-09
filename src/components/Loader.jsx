import React from "react";
import { Stack } from "@mui/material";
import { Circles } from "react-loader-spinner";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Circles color="grey" />
  </Stack>
);

export default Loader;