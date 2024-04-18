import { currentUser } from "@/lib/auth";

const Admin = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">ADMIN</div>
    </div>
  );
};

export default Admin;
