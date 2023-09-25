import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { removeItem } from "@/lib/useCart";

export default function CartItem({ product }: { product: Product }) {


    const handleClick = (id : number) => {
        removeItem(id)
    }


  return (
    <div>
      <Card className="flex justify-between items-center m-4">
        <CardHeader>
          <CardTitle>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={124}
              height={124}
              className="rounded-xl"
            ></Image>
          </CardTitle>
        </CardHeader>
        <CardContent>{product.title}</CardContent>
        <CardFooter className="flex justify-between items-center gap-4">
          <p className="font-bold ">${product.price}</p>
          <Button onClick={() => handleClick(product.id)} variant={"destructive"}>
            <Trash2 />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
