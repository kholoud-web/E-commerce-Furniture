import img1 from "../../../public/images/productImages/Cloud sofa three seater + ottoman_1 1.svg";
import img2 from "../../../public/images/productImages/Cloud sofa three seater + ottoman_2 1.svg";


export default function ProductDescription(){
    return(
          <section className="w-full mx-auto py-16 px-6 text-center border-t border-[#D9D9D9] ">
      
      {/* Tabs */}
      <div className="flex justify-center gap-10 text-lg mb-8">
        <button className="font-semibold border-b-2 border-black pb-2">
          Description
        </button>

        <button className="text-gray-400 hover:text-black">
          Additional Information
        </button>

        <button className="text-gray-400 hover:text-black">
          Reviews [5]
        </button>
      </div>

      {/* Text */}
      <div className="max-w-3xl mx-auto text-gray-500 leading-relaxed space-y-4 mb-12">
        <p>
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and
          sound of Marshall, unplugs the chords, and takes the show on the
          road.
        </p>

        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and
          extended highs.
        </p>
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#F4F4F4] rounded-xl p-6">
          <img
            src={img1}
            alt="sofa"
            className="mx-auto"
            loading="lazy"
          />
        </div>

        <div className="bg-[#F4F4F4] rounded-xl p-6">
          <img
            src={img2}
            alt="sofa"
            className="mx-auto"
            loading="lazy"
          />
        </div>
      </div>

    </section>
    )
}