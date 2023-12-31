import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Product } from "@/types";

export const revalidate = 0;

const HomePage = async () => {
  const products: Product[] = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("d8d21a61-d33e-411f-8e98-dd8e98fae97c");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Productos recientes." items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
