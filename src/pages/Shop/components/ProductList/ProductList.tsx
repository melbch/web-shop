import { useState, useEffect, useRef } from "react";

import { useFilteredProducts } from "./hooks/useFilteredProducts";
import { useUrlFilters } from "./hooks/useUrlFilters";
import type { Filters } from "../../../../types/filterTypes";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { useProductsData } from "./hooks/useProductsData";
import { useUniqueGenres } from "./hooks/useUniqueGenres";
import { useUniqueAuthors } from "./hooks/useUniqueAuthors";
import { FilterSidebarDrawer } from "./FilterSidebarDrawer";
import { ProductPagination } from "./ProductPagination";
import { LoadingSpinner } from "./LoadingSpinner";
import { ProductGrid } from "./ProductGrid";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const smallWidth = 60;

const ProductList = () => {
    const [filters, setFilters] = useState<Filters>({
        genre: [],
        author: "",
        title: "",
        minPrice: 0,
        maxPrice: 100,
        featured: "",
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [bigDrawerOpen, setBigDrawerOpen] = useState(false);

    const theme = useTheme();
    const listRef = useRef<HTMLDivElement>(null);

    const { products, loading } = useProductsData();

    useUrlFilters(setFilters);
    const filteredProducts = useFilteredProducts(products, filters);
    const uniqueGenres = useUniqueGenres(products);
    const uniqueAuthors = useUniqueAuthors(products);

    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    const productsPerPage = 12;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openBigDrawer = () => setBigDrawerOpen(true);
    const closeBigDrawer = () => setBigDrawerOpen(false);

    const scrollPosition = useScrollPosition();

    const maxSidebarMovement = smallWidth;
    const scrollFactor = 30;
    const scrollPositionEffect = -(scrollPosition / scrollFactor);
    
    const sidebarTop = Math.min(0, Math.max(-maxSidebarMovement, scrollPositionEffect / 70));

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {loading ? (
                <LoadingSpinner offset={smallWidth} />
            ) : (
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        position: "relative",
                    }}
                >
                    <FilterSidebarDrawer 
                        bigDrawerOpen={bigDrawerOpen}
                        openBigDrawer={openBigDrawer}
                        closeBigDrawer={closeBigDrawer}
                        filters={filters}
                        setFilters={setFilters}
                        genres={uniqueGenres}
                        authors={uniqueAuthors}
                        sidebarTop={sidebarTop}
                    />

                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            marginLeft: `${smallWidth}px`,
                            width: `calc(100% - ${smallWidth}px)`,
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            transition: theme.transitions.create(["width", "margin"], {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.standard,
                            }),
                        }}
                    >
                        <div ref={listRef} style={{ height: 0, margin: 0, padding: 0 }} />
                        
                        <ProductGrid products={currentProducts} />

                        <ProductPagination 
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onChange={handlePageChange}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ProductList;