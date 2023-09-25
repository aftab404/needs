import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { Button } from "../../ui/button";

import Link from "next/link";
import Searchbar from "./Searchbar";
import { ShoppingCart } from "lucide-react";
import Profiledrop from "./Profiledrop";

export default async function Header() {
  const session = await getServerSession(options);

  return (
    <nav className=" flex justify-between items-center px-9 py-3 bg-slate-100 dark:bg-slate-900">
      <div className="flex gap-5 items-center w-full">
        <Link href="/">
          <p className="font-bold text-2xl">Needs.</p>
        </Link>

        <Searchbar />
      </div>
      <div className="flex items-center gap-2">
        {session ? (
          <Link href={"api/auth/signout"}>
            <Button>Logout</Button>
          </Link>
        ) : (
          <Link href={"api/auth/signin"}>
            <Button>Login</Button>
          </Link>
        )}

        <Link href={"/cart"}>
          <Button variant={"outline"}>
            <ShoppingCart />
          </Button>
        </Link>

        <div className="ml-2">
          {session && <Profiledrop user={session?.user} />}
        </div>
      </div>
    </nav>
  );
}
