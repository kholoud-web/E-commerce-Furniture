export default function ProductDetails({product}){
    return(
         <section className="max-w-7xl mx-auto py-16 px-10 grid lg:grid-cols-2 gap-12">

      {/* LEFT SIDE */}
      <div className="flex gap-6">

        {/* thumbnails */}
        <div className="flex flex-col gap-4">
          {Object.values(product.detailsImages)?.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-20 h-20 object-cover rounded-lg bg-[#F9F1E7] cursor-pointer"
              loading="lazy"
            />
          ))}
        </div>

        {/* main image */}
        <div className=" p-6 rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] object-contain"
            loading="lazy"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

        <p className="text-gray-500 text-xl mb-4">${product.price}</p>

        {/* rating */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-gray-500 text-sm">
            5 Customer Reviews
          </span>
        </div>

        {/* description */}
        <p className="text-gray-600 mb-6">
          {product.details}
        </p>

        {/* Size */}
        <div className="mb-6">
          <p className="text-gray-500 mb-2">Size</p>

          <div className="flex gap-3">
            <button className="bg-[#B88E2F] text-white px-3 py-1 rounded">
              L
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded">XL</button>
            <button className="bg-gray-200 px-3 py-1 rounded">XS</button>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <p className="text-gray-500 mb-2">Color</p>

          <div className="flex gap-3">
            <span className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-black rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-yellow-600 rounded-full cursor-pointer"></span>
          </div>
        </div>

        {/* cart buttons */}
        <div className="flex items-center gap-4 mb-10">

          <div className="flex items-center border rounded-lg">
            <button className="px-4 py-2">-</button>
            <span className="px-4">1</span>
            <button className="px-4 py-2">+</button>
          </div>

          <button className="border px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
            Add To Cart
          </button>

          <button className="border px-6 py-3 rounded-lg">
            + Compare
          </button>

        </div>

        {/* product info */}
        <div className="text-gray-500 space-y-2 border-t pt-6">
          <p>SKU : SS001</p>
          <p>Category : Sofas</p>
          <p>Tags : Sofa, Chair, Home, Shop</p>
        </div>

      </div>

   
    </section>
    )
}