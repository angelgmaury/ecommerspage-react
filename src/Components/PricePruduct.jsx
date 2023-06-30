export function PricePruduct() {
  return (
    <div className="mt-8 px-5 flex items-center justify-between desktop:mt-0 desktop:flex-col desktop:items-start desktop:relative desktop:bottom-10">
      <div className="flex items-center gap-4">
        <p className="text-2xl font-bold">{"$125.00"}</p>
        <span className="bg-paleOrange rounded-md">
          <p className="text-orangeMain px-2 font-bold">50%</p>
        </span>
      </div>
      <p className="font-bold text-gray-300 textCompleted">$250.00</p>
    </div>
  );
}
