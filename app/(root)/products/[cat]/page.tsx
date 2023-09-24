
import Product from "@/components/cards/Product";
import getProducts from "@/lib/getProducts"





export default async function page({params} : {params: {cat: string}}) {

  const { products } = await getProducts(params.cat)

  return (
    <div className="flex justify-center gap-3 p-4 flex-wrap w-full">
      {products.map((product: any) => (
        <Product product={product}/>
      ))}
    </div>
  );
}
