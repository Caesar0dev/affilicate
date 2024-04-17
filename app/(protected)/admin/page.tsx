import { currentUser } from "@/lib/auth";

const creatives = [
  {
    url: "http://localhost",
    ref: "reference url",
    convert: "convert",
    date: new Date()
  }
];

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Creatives</div>

      <div>
        <div>No creatives found.</div>
      </div>
    </div>
  );
};

export default Creatives;
