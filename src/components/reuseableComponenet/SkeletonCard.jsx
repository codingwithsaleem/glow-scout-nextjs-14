
import { Skeleton } from "@/components/ui/skeleton"

 function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[155px] md:w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 md:w-[250px]" />
        <Skeleton className="h-4 md:w-[200px]" />
      </div>
    </div>
  )
}

export default SkeletonCard