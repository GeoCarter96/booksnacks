export const BookSkeleton = () => {
  return (
    <div className="for-you__recommended--books-link pointer-events-none">
     
      <figure className="book__image--wrapper animate-pulse bg-gray-200">
        <div className="book__image aspect-[1/1.5]" /> 
      </figure>

    
      <div className="h-5 w-3/4 animate-pulse bg-gray-200 rounded mt-4 mb-2" />

     
      <div className="h-4 w-1/2 animate-pulse bg-gray-200 rounded mb-2" />

      <div className="h-3 w-full animate-pulse bg-gray-200 rounded mb-4" />

      
      <div className="flex gap-4">
        <div className="h-4 w-12 animate-pulse bg-gray-200 rounded" />
        <div className="h-4 w-12 animate-pulse bg-gray-200 rounded" />
      </div>
    </div>
  );
};