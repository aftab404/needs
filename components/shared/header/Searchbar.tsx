"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // debounce

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`?search=${search}`);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);
  

  return (
    <div className="flex items-center gap-2 w-full">
      <Search className="text-gray-500" />
      <Input
        className="w-1/2"
        placeholder="Search ...."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
    </div>
  );
}
