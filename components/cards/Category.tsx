import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
}

export default function Category({ name, img }: Props) {
  return (
    <article>
      <Link href={`/products/${name.toLowerCase()}`}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-auto ">
            <div className="flex flex-col gap-2">
              <Image
                src={img}
                alt="phone"
                width={86}
                height={86}
                className="rounded-xl"
              />
              <p>{name}</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </Link>
    </article>
  );
}
