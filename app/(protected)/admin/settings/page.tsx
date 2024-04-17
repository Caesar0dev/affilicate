import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "@/lib/auth";

const Setting = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Settings</div>

      <div className="space-y-8">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <div>License key</div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-row space-x-2">
              <Input />
              <Button>Deactivate License</Button>
              <span className="text-xs "> Your license is valid!</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">Setup wizard</div>
          <div className="col-span-3">
            <Button>Lunch Setup Wizard</Button>
          </div>
        </div>
        <div>
          <Button>Save change</Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
