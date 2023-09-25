
import Product from "@/components/cards/Product";
import getProducts from "@/lib/getProducts"



export default async function page(props: any) {

    
  const { products } = await getProducts(props.params.cat)
  const searchTerm = props.searchParams.search

  let filteredProducts;

  if(searchTerm) {
    filteredProducts = products.filter((product: any) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    } else {
        filteredProducts = products
    }


  return (
    <div className="flex justify-center gap-3 p-4 flex-wrap w-full mt-8">
      {filteredProducts.map((product: Product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
}
