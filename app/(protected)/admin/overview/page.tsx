import { currentUser } from "@/lib/auth";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">admin overview</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
        <div className="flex flex-col">
          <div>
            <h6>Totals</h6>
            <div className="space-y-4 p-4">
              <div>Table 1</div>
              <div>Table 2</div>
              <div>Table 3</div>
            </div>
          </div>

          <div>
            <h6>Recent Referrals</h6>
            <div className="p-4">Table</div>
          </div>

          <div>
            <h6>Latest Affiliate Registrations</h6>
            <div className="p-4">Table</div>
          </div>
        </div>

        <div>
          <div>
            <h6>Latest Affiliate Registrations</h6>
            <div className="p-4">Table</div>
          </div>

          <div>
            <h6>Latest Affiliate Registrations</h6>
            <div className="p-4">Table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
