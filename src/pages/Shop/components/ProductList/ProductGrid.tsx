import ProductCard from "../../ProductCard";
import type { Product } from "../../../../types/productTypes";

export const ProductGrid = ({ products }: { products: Product[] }) => (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 flex-grow">
        {products.length > 0 ? (
            products.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
            <p className="col-span-full min-h-[300px] flex flex-col items-center justify-center text-center text-gray-500 text-lg italic font-semibold px-4">
                No products found matching the current filters.
            </p>
        )}
    </div>
);