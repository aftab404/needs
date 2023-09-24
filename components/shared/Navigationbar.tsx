"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Category from "../cards/Category";
import { categories } from "@/constants";

export default function Navigationbar() {
  return (
    <NavigationMenu className="p-4 border border-gray-800 rounded-xl">
      <NavigationMenuList className="flex flex-wrap">
        {categories.map((category) => (
          <Category name={category.name} img={category.url} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
