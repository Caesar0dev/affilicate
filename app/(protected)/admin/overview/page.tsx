import { currentUser } from "@/lib/auth";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Overview</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
        <div className="space-y-8">
          <Accordion type="single" collapsible defaultValue="item-1" className="border shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4 border-b">
                <h6 className="text-lg">Totals</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table 1</div>
                <div>Table 2</div>
                <div>Table 3</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible defaultValue="item-2" className="border shadow-md">
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 border-b">
                <h6 className="text-lg">Recent Referrals</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible defaultValue="item-2" className="border shadow-md">
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 border-b">
                <h6 className="text-lg">Latest Affiliate Registrations</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-6">
          <Accordion type="single" collapsible defaultValue="item-2" className="border shadow-md">
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 border-b">
                <h6 className="text-lg">Most valuable Affiliate</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible defaultValue="item-2" className="border shadow-md">
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 border-b">
                <h6 className="text-lg">Recent Referral Visits</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible defaultValue="item-2" className="border shadow-md">
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 border-b">
                <h6 className="text-lg">Highest Convert URLs</h6>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 p-4">
                <div>Table</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
