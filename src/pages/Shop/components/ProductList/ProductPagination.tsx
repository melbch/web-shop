import { Pagination, Stack } from "@mui/material";

interface ProductPaginationProps {
    totalPages: number;
    currentPage: number;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const ProductPagination: React.FC<ProductPaginationProps> = ({ totalPages, currentPage, onChange }) => (
    <div className="flex justify-center mt-6">
        <Stack spacing={2}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={onChange}
                color="primary"
                shape="rounded"
            />
        </Stack>
    </div>
);