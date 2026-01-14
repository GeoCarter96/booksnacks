

export default function PlayerSkeleton() {
  return (
    <div>
       <div className="summary animate-pulse">
      <div className="audio__book--summary">
        {/* Title Skeleton */}
        <div className="h-8 w-1/3 bg-gray-200 rounded mb-4" />
        
        {/* Summary Text Skeleton */}
        <div className="space-y-2 mb-8">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
          <div className="audio__wrapper bg-gray-100 p-4 rounded-lg">
          <div className="audio__track--wrapper flex items-center gap-4">
            {/* Image Mask Skeleton */}
            <div className="w-12 h-12 bg-gray-200 rounded-md" />
            
            <div className="audio__track--details-wrapper space-y-2">
              {/* Track Title & Author Skeleton */}
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-24 bg-gray-200 rounded" />
            </div>
          </div>
           <div className="audio__controls--wrapper mt-6 flex justify-center">
            {/* Controls Skeleton */}
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
            </div>
          </div>

          <div className="audio__progress--wrapper mt-6 flex items-center gap-4">
            <div className="h-3 w-10 bg-gray-200 rounded" />
            <div className="h-2 flex-1 bg-gray-200 rounded-full" />
            <div className="h-3 w-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
