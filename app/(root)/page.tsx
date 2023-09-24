import { getServerSession } from "next-auth/next";

import { options } from "../api/auth/[...nextauth]/options";
import Navigationbar from "@/components/shared/Navigationbar";

export default async function Page() {
  const session = await getServerSession(options);

  return (
    <div className="w-full flex justify-center p-6">
      <Navigationbar/>
    </div>
  );
}
