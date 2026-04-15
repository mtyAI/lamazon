type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-orange-400">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <a
      href="#"
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image area */}
      <div className="relative flex items-center justify-center bg-gray-50 p-6">
        <span className="text-7xl">{product.image}</span>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800 group-hover:text-orange-600">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 text-sm">
          <Stars rating={product.rating} />
          <span className="text-gray-400">({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2">
          {discount && (
            <span className="text-sm font-bold text-red-500">-{discount}%</span>
          )}
          <span className="text-xl font-bold text-gray-900">
            ¥{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ¥{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <button className="mt-3 w-full rounded-full bg-orange-500 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600">
          カートに入れる
        </button>
      </div>
    </a>
  );
}
