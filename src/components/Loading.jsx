import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((index) => (
        <div
          key={`loader-${index}`}
          className="flex items-center space-x-4 mt-12"
        >
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[900px]" />
            <Skeleton className="h-4 w-[900px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
