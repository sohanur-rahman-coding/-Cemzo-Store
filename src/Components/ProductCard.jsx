export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="h-48 w-full bg-gray-200 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2" title={product.title}>
            {product.title}
          </h2>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
            {product.category}
          </span>
        </div>
        
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="h-4 w-4 text-yellow-400 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {product.rating}
          </div>
        </div>
      </div>
    </div>
  );
}
