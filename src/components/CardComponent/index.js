import {
  Card,
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import NumberFormat from "react-number-format";
export const CardComponent = ({ cardTitle, cardValue }) => {
  return (
    <Card>
      <Box
        sx={{
          p: 1,

          width: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>{cardTitle}</Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </Stack>
        <IconButton></IconButton>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: 2,
          py: 1,
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>
          {
            <NumberFormat
              value={cardValue}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              prefix="R$ "
            />
          }
        </Typography>
      </Stack>
    </Card>
  );
};
