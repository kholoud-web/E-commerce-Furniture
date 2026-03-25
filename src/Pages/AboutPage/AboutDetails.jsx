import img1 from "/images/about/Rectangle 68 (1).svg";
import img2 from "/images/about/Rectangle 68 (2).svg";
import img3 from "/images/about/Rectangle 68.svg";
import icon1 from "/images/about/dashicons_admin-users.svg";
import icon2 from "../../../public/images/about/Vector (3).svg";
import icon3 from "../../../public/images/about/ci_tag.svg";
import { useState } from "react";

export default function AboutDetails() {
     const [expandedDesc , setExpandedDesc] = useState({});
const posts =[
    {
        id:1,
       mainImage :img1,
       icon1:icon1,
       icon2 :icon2,
       icon3: icon3, 
       title:"Going all-in with millennial design",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
       {
         id:2,
       mainImage :img2,
       icon1:icon1,
       icon2 :icon2,
       icon3: icon3, 
       title:"Exploring new ways of decorating",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
       {
         id:3,
       mainImage :img3,
       icon1:icon1,
       icon2 :icon2,
       icon3: icon3, 
       title:"Handmade pieces that took time to make",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },

]
  const toggleReadMore = (index) => {
    setExpandedDesc((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    {posts.map((post,index)=>{
        const isExpanded = expandedDesc[index];
  const shortText = post.description.slice(0, 120);
  return(
      <div className="my-8" key={post.id}>
        <img src={post.mainImage} alt="millennial design" className="w-full  object-cover rounded-xl" />
        <div className="flex gap-8 mt-4">
          <div className="flex">
            <img src={post.icon1} alt="admin" />
            <span className="text-[#9F9F9F] font-[14px]">Admin</span>
          </div>
          <div className="flex">
            <img src={post.icon2} alt="date" />
            <span className="text-[#9F9F9F] font-[14px]">14 Oct 2022</span>
          </div>
          <div className="flex">
            <img src={post.icon3} alt="wood" />
            <span className="text-[#9F9F9F] font-[14px]">Wood</span>
          </div>
        </div>
        <h3 className="text-[#000000] font-medium my-8 text-2xl">{post.title}</h3>
      <p className="text-[#9F9F9F] font-normal">
        {isExpanded ? post.description : `${shortText}...`}
      </p>

      <button
        onClick={() => toggleReadMore(index)}
        className="text-black font-medium mt-2 underline cursor-pointer"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>     
       </div>
  )
})}
    </section>
  );
}
