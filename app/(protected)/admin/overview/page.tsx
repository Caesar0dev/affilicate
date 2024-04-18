import { currentUser } from "@/lib/auth";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Overview</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
        <div className="flex flex-col">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h6>Totals</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table 1</div>
                <div>Table 2</div>
                <div>Table 3</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
            <h6>Most valuable Affiliate</h6>
            <div className="p-4">Table</div>
          </div>

          <div>
            <h6>Recent Referral Visits</h6>
            <div className="p-4">Table</div>
          </div>

          <div>
            <h6>Highest Convert URLs</h6>
            <div className="p-4">Table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
