import { FaRegStar } from "react-icons/fa";
export default function ProductCard({ product }) {
return (
<div className="group bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
<div className="relative bg-gray-50">
{product.badge && (
<span className="absolute right-2 top-2 bg-red-500 text-black text-xs font-semibold px-2 py-2 rounded-full">{product.badge}</span>
)}
<img src={product.img} alt={product.title} className="w-full h-56 object-contain p-6 bg-white" />
</div>


<div className="p-4">
<p className="text-xs text-gray-400">{product.category}</p>
<h3 className="mt-1 text-sm font-semibold text-gray-900">{product.title}</h3>


<StarRating />


<div className="mt-3 flex items-baseline gap-2">
<span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
{product.originalPrice && (
<span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
)}
</div>
</div>
</div>
);
}

function StarRating() {

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1 mt-2">
      {stars.map((s) => (
        <FaRegStar />
      ))}
    </div>
  );
}