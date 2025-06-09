import { Box, Drawer, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import type { Filters } from "../../../../types/filterTypes";

const smallWidth = 60;
const largeWidth = 335;

interface FilterSidebarDrawerProps {
    bigDrawerOpen: boolean;
    openBigDrawer: () => void;
    closeBigDrawer: () => void;
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    genres: string[];
    authors: string[];
    sidebarTop: number;
}

export const FilterSidebarDrawer: React.FC<FilterSidebarDrawerProps> = ({
    bigDrawerOpen,
    openBigDrawer,
    closeBigDrawer,
    filters,
    setFilters,
    genres,
    authors,
    sidebarTop,
}) => (
    <>
        <Box
            sx={{
                width: smallWidth,
                height: "100vh",
                position: "fixed",
                top: sidebarTop,
                left: 0,
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1200,
                paddingTop: 2,
                transition: "top 0.2s ease-in-out",
            }}
        >
            {!bigDrawerOpen && (
                <>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "16px",
                            whiteSpace: "nowrap",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) rotate(-90deg)",
                            textAlign: "center",
                            zIndex: 1300,
                            pointerEvents: "none",
                        }}
                    >
                        FILTER
                    </Typography>
                    <IconButton
                        onClick={openBigDrawer}
                        aria-label="Open filter sidebar"
                        size="large"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: "-17px",
                            transform: "translateY(-50%)",
                            zIndex: 1400,
                            backgroundColor: "#f0f0f0",
                            borderRadius: "50%",
                            padding: "5px",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                            "&:hover": {
                                backgroundColor: "#e0e0e0",
                            },
                        }}
                    >
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                </>
            )}
        </Box>

        <Drawer
            variant="temporary"
            open={bigDrawerOpen}
            onClose={closeBigDrawer}
            ModalProps={{ keepMounted: true, disableScrollLock: true }}
            sx={{
                "& .MuiDrawer-paper": {
                    position: "fixed",
                    width: bigDrawerOpen ? largeWidth : smallWidth,
                    height: "100vh",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    top: 0,
                    bottom: 0,
                    zIndex: 1300,
                    transition: "width 0.3s ease-in-out",
                },
                zIndex: 1300,
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                <IconButton onClick={closeBigDrawer} aria-label="Close filter sidebar">
                    <ChevronLeftIcon />
                </IconButton>
            </Box>
            <FilterSidebar filters={filters} setFilters={setFilters} genres={genres} authors={authors} />
        </Drawer>
    </>
);