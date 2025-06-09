import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner = ({ offset = 60 }: { offset?: number }) => (
    <Box
        sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: `${offset}px`,
        }}
    >
        <CircularProgress />
    </Box>
);