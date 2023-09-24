
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex items-center gap-2 w-full">
        <Search className="text-gray-500"/>
        <Input className="w-1/2" placeholder="Search ...."/>
    </div>
  )
}
