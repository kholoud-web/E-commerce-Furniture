import {Products} from "../../Products";

export default function ComparisonPage(){
    const comparedProducts = Products;
    return(
         <div className="max-w-7xl mx-auto px-6 py-10">
      {/* 🔥 Top Products */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div>
          <p className="text-gray-500">
            Go to Product page for more Products
          </p>
          <button className="underline mt-2">View More</button>
        </div>

        {comparedProducts.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-40 object-contain"
            />
            <h3 className="mt-3 font-semibold">{product.name}</h3>
            <p className="text-gray-500">Rs. {product.price}</p>

            {/* ⭐ Rating */}
            <div className="text-yellow-500 text-sm">
              {"★".repeat(Math.floor(product.rating))}
              <span className="text-gray-400 ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>
        ))}

        <div className="flex flex-col justify-center items-center border p-4 rounded-lg">
          <p>Add A Product</p>
          <button className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded">
            Choose a Product
          </button>
        </div>
      </div>

      {/* 🧾 Comparison Table */}
      <div className="border rounded-lg overflow-hidden">
        {sections.map((section) => (
          <div key={section.key}>
            {/* Section Title */}
            <div className="bg-gray-100 px-4 py-3 font-semibold">
              {section.title}
            </div>

            {/* Fields */}
            {Object.entries(section.fields).map(([fieldKey, label]) => (
              <div
                key={fieldKey}
                className="grid grid-cols-3 border-t"
              >
                {/* Label */}
                <div className="p-4 font-medium">{label}</div>

                {/* Values */}
                {comparedProducts.map((product) => (
                  <div key={product.id} className="p-4 text-gray-600">
                    {product.specs[section.key][fieldKey]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 🛒 Add to Cart */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div></div>
        {comparedProducts.map((product) => (
          <button
            key={product.id}
            className="bg-yellow-600 text-white py-3 rounded"
          >
            Add To Cart
          </button>
        ))}
      </div>
    </div>
    )
}