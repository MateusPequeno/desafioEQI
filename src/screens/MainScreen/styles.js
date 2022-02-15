import styled from "styled-components";
import {
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    black: {
      main: "#000000",
      contrastText: "#fff",
    },
    grey: {
      main: "	#606060",
      contrastText: "	#000000",
    },
    orange: {
      main: "#FF4500",
      contrastText: "	#FFFFFF",
    },
  },
});

export const ToggleButtonGroupDiv = styled(ToggleButtonGroup).attrs({
  color: "orange",
  exclusive: true,
})``;

export const ToggleButtonMui = styled(ToggleButton)``;
export const TinyCheckedIcon = styled(CheckIcon).attrs({
  fontSize: "small",
})``;

export const Container = styled.div`
  background-color: #d3d3d3;
  padding: 25px;
  box-shadow: 0 10px 30px 0 rgb(24 28 33 / 5%);
  border-radius: 11px;
`;

export const SimuladorContainer = styled.div`
  border-radius: 11px;
  display: flex;
`;

export const Header = styled(Typography).attrs({
  variant: "h4",
})`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const FirstForm = styled.div``;
export const Label = styled(Typography)``;
export const SmallerLabel = styled(Typography).attrs({
  mt: 2,
})``;
export const InputLabel = styled(Typography).attrs({
  mt: 2,
})``;

export const ClearFieldsButton = styled(Button).attrs({
  variant: "outlined",
  mt: 2,
})``;

export const SimulateButton = styled(Button).attrs({
  variant: "contained",
})``;

export const IndexDiv = styled.div`
  margin-left: 8%;
`;

export const ResultsDiv = styled.div`
  margin-left: 6%;
`;

export const ResultCardsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 115%;
  margin-top: 3%;
`;
