import { Metadata } from "next";
import UserTable from "./user-table";

export const metadata: Metadata = {
  title: "User | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function UserPage() {
  return <div>

    <UserTable/>
  </div>;
}
