import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];

}   


export default function Product({product}: {product: Product} ) {
  return (
    <Card className="flex flex-col justify-between w-80">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
            src={product.thumbnail}
            alt={product.title}
            width={256}
            height={256}
            className="rounded-xl" 

            ></Image>
      </CardContent>
      <CardFooter>
        <p className="font-bold ">${product.price}</p>
      </CardFooter>
    </Card>
  );
}
