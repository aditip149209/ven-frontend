
function CardSkeleton() {
  return (
    <div className="bg-cardlight rounded-xl p-8 shadow-md flex flex-col items-start animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded mb-4"></div> {/* Image skeleton */}
    </div>
  )
}

export default CardSkeleton