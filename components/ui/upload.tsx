import { cn } from "@/lib/utils";
function upload({ className }: { className: String }) {
  return (
    <input
      className={cn(
        "block mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
        className
      )}
      id="default_size"
      type="file"
    />
  );
}

export default upload;
