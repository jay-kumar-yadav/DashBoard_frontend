export default function TopProducts() {
  const products = [
    { name: 'Basic Tees', percentage: 55, color: 'bg-blue-500' },
    { name: 'Custom Short Pants', percentage: 31, color: 'bg-green-500' },
    { name: 'Super Hoodies', percentage: 14, color: 'bg-orange-500' },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium">{product.name}</span>
            <span className="text-gray-500">{product.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${product.color}`}
              style={{ width: `${product.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}