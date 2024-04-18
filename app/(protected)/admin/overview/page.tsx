import { currentUser } from "@/lib/auth";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">admin overview</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
        <div className="flex flex-col">
          <h6>total</h6>
          <div></div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Creatives;
