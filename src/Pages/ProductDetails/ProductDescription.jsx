import img1 from "../../../public/images/productImages/Cloud sofa three seater + ottoman_1 1.svg";
import img2 from "../../../public/images/productImages/Cloud sofa three seater + ottoman_2 1.svg";
import { useState } from "react";
import StarRating from "../../components/StarRating";

export default function ProductDescription({ product }) {
  const [activeTab, setActiveTab] = useState("describtion");

  return (
    <section className="w-full mx-auto py-16 px-6 text-center border-t border-[#D9D9D9] ">
      {/* Tabs */}
      <div className="flex justify-center gap-10 text-lg mb-8">
        <button
          onClick={() => setActiveTab("describtion")}
          className={`pb-2 cursor-pointer ${
            activeTab === "description"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-400"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("info")}
          className={`pb-2 cursor-pointer ${
            activeTab === "info"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-400"
          }`}
        >
          Additional Information
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 cursor-pointer ${
            activeTab === "reviews"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-400"
          }`}
        >
          Reviews [{product.reviews?.length || 0}]
        </button>
      </div>

      {/* Text */}
      {activeTab === "describtion" && (
        <div className="max-w-3xl mx-auto text-gray-500 leading-relaxed space-y-4 mb-12">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs.
          </p>
        </div>
      )}

      {/* Additional Info */}
      {activeTab === "info" && (
        <div className="max-w-xl mx-auto text-left text-gray-600 mb-6">
          <table className="w-full border">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Weight</td>
                <td className="p-3">7 kg</td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-semibold">Dimensions</td>
                <td className="p-3">40 × 30 × 25 cm</td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-semibold">Material</td>
                <td className="p-3">Wood</td>
              </tr>

              <tr>
                <td className="p-3 font-semibold">Color</td>
                <td className="p-3">Beige</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Reviews */}
    {activeTab === "reviews" && (
  <div className="max-w-xl mx-auto space-y-6 mb-6">

    {product.reviews?.length > 0 ? (
      product.reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded-lg flex flex-col items-center ">
          <h4 className="font-semibold">{review.name}</h4>
           <StarRating rating={product.rating} />
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-center">No reviews yet.</p>
    )}

  </div>
)}

      {/* Images */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#F4F4F4] rounded-xl p-6">
          <img src={img1} alt="sofa" className="mx-auto" loading="lazy" />
        </div>

        <div className="bg-[#F4F4F4] rounded-xl p-6">
          <img src={img2} alt="sofa" className="mx-auto" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
