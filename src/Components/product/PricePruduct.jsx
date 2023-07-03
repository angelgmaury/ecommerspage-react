export function PricePruduct({ product }) {
  const precioOriginal = parseFloat(product.price);
  const descuento = parseFloat(product.descuento);
  const precioConDescuento = precioOriginal * (1 - descuento / 100);

  return (
    <div className="mt-8 px-5 flex items-center justify-between desktop:mt-0 desktop:flex-col desktop:items-start desktop:relative desktop:bottom-10">
      <div className="flex items-center gap-4">
        <p className="text-2xl font-bold">{precioConDescuento.toFixed(2)}</p>
        <span className="bg-paleOrange rounded-md">
          <p className="text-orangeMain px-2 font-bold">{descuento}% OFF</p>
        </span>
      </div>
      <p className="font-bold text-gray-300 textCompleted">
        {precioOriginal.toFixed(2)}
      </p>
    </div>
  );
}
