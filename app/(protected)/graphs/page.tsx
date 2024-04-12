"use client";

import Chart from "@/components/chart";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Graphs = async () => {
  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Graphs</div>

      <div className="space-y-2">
        <div className="text-xl font-bold">Earnings</div>
        <div className="flex flex-row space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="thisweek">This Week</SelectItem>
              <SelectItem value="lastweek">Last Week</SelectItem>
              <SelectItem value="thismonth">This Month</SelectItem>
              <SelectItem value="lastmonth">Last Month</SelectItem>
              <SelectItem value="thisquarter">This Quarter</SelectItem>
              <SelectItem value="lastquarter">Last Quarter</SelectItem>
              <SelectItem value="thisyear">This Year</SelectItem>
              <SelectItem value="lastyear">Last Year</SelectItem>
            </SelectContent>
          </Select>

          <Button variant={"default"} className="bg-blue-500 hover:bg-blue-400">
            Filter
          </Button>
        </div>
      </div>

      <div className="mx-auto my-12">
        <Chart />
      </div>
    </div>
  );
};

export default Graphs;
