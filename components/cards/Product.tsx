"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "../ui/button";
import { addToCart } from "@/lib/useCart";


export default function Product({ product }: { product: Product }) {

 

  const handleClick = () => {
    addToCart(product);
  };

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
      <CardFooter className="flex justify-between items-center">
        <p className="font-bold ">${product.price}</p>
        <Button onClick={handleClick}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
