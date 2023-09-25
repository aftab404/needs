"use client";

import { getCart } from "@/lib/useCart";
import CartItem from "@/components/cards/CartItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  const products = getCart();
  const total = products.reduce((acc: any, product: any) => {
    return acc + Number(product.price);
  }, 0);

  return (
    <div className="flex justify-between">
      <section className="flex flex-col gap-2 p-4">
        <p className="font-bold">Items</p>
        {products.map((product: any) => (
          <CartItem key={product.id} product={product} />
        ))}
        <p>{`Gross Total : $${total}`}</p>
      </section>

      <section>
        <div>Summary</div>
        <Link href='/checkout'>
           <Button variant={'outline'}>Checkout</Button>
        </Link>
       
      </section>
    </div>
  );
}
