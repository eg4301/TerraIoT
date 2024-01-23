import { Box } from "@mui/material";
import Header from "../../components/Header";
import PH_Chart from "../../components/pH_Chart";

const PH = () => {
  return (
    <Box m="20px">
      <Header title="pH" subtitle="Water Parameter" />
      <Box height="75vh">
        <PH_Chart/>
      </Box>
    </Box>
  );
};

export default PH;
