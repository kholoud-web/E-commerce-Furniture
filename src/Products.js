import prod1 from "/images/home/products/image 1.svg";
import prod2 from "/images/home/products/image 2.svg";
import prod3 from "/images/home/products/image 3.svg";
import prod4 from "/images/home/products/image 4.svg";
import prod5 from "/images/home/products/image 9.svg";
import prod6 from "/images/home/products/image 6.svg";
import prod7 from "/images/home/products/image 7.svg";
import prod9 from "/images/home/products/Images.svg";
import img1 from "../public/images/productImages/Maya sofa three seater (1) 1.svg";
import img2 from "../public/images/productImages/Outdoor sofa set 2.svg";
import img3 from "../public/images/productImages/Outdoor sofa set_2 1.svg";
import img4 from "../public/images/productImages/Stuart sofa 1.svg";

export const Products = [
  {
    id: 1,
    image: prod1,
    name: "Syltherine",
    des: "Stylish cafe chair",
    price: 2500000,
    discountPercentage: 30,
    isNew: false,
    details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    detailsImages: {
      details1: img1,
      details2: img2,
      details3: img3,
      details4: img4,
    },
    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },

      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
    sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 2,
    image: prod2,
    name: "Leviosa",
    des: "Stylish cafe chair",
    price: 2500000,
    discountPercentage: 0,
    isNew: false,
    details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    detailsImages: {
      details1: img1,
      details2: img2,
      details3: img3,
      details4: img4,
    },
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
      {
        id: 3,
        name: "omar",
        rating: 4,
        comment: "Very comfortable",
      },
      {
        id: 4,
        name: "farida",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
  sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 3,
    image: prod3,
    name: "Lolito",
    des: "Luxury big sofa",
    price: 7000,
    discountPercentage: 50,
    isNew: false,
    details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    detailsImages: {
      details1: img1,
      details2: img2,
      details3: img3,
      details4: img4,
    },
    rating: 4.6,
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
    sections: [
      {
        section: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        section: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        section: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        section: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 4,
    image: prod4,
    name: "Respira",
    des: "Outdoor bar table and stool",
    price: 5000,
    discountPercentage: 0,
    isNew: true,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus laboriosam harum. Nihil eos reprehenderit, ipsa esse ab ipsam? Deleniti.",
    detailsImages: {
      details1: img1,
      details2: img2,
      details3: img3,
      details4: img4,
    },
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
  sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 5,
    image: prod5,
    name: "Grifo",
    des: "Night lamp",
    price: 15000,
    discountPercentage: 0,
    isNew: false,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus laboriosam harum. Nihil eos reprehenderit, ipsa esse ab ipsam? Deleniti.",
    detailsImages: {
      details1: img1,
      details2: img2,
      details3: img3,
      details4: img4,
    },
    rating: 4.4,
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
   sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 6,
    image: prod6,
    name: "Muggo",
    des: "Small mug",
    price: 250000,
    discountPercentage: 0,
    isNew: true,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus laboriosam harum. Nihil eos reprehenderit, ipsa esse ab ipsam? Deleniti.",
    detailsImages: {
      details1: img1,
      details2: img2,
      details3: img3,
      details4: img4,
    },
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
  sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 7,
    image: prod7,
    name: "Pingky",
    des: "Cute bed set",
    price: 7000,
    discountPercentage: 50,
    isNew: false,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus laboriosam harum. Nihil eos reprehenderit, ipsa esse ab ipsam? Deleniti.",
    sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
    },
  {
    id: 9,
    image: prod9,
    name: "Potty",
    des: "Minimalist flower pot",
    price: 5000,
    discountPercentage: 0,
    isNew: true,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus laboriosam harum. Nihil eos reprehenderit, ipsa esse ab ipsam? Deleniti.",
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
   sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 10,
    image: prod1,
    name: "Syltherine",
    des: "Stylish cafe chair",
    price: 2500000,
    discountPercentage: 30,
    isNew: false,
    details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
   sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 11,
    image: prod2,
    name: "Leviosa",
    des: "Stylish cafe chair",
    price: 2500000,
    discountPercentage: 0,
    isNew: true,
    details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    rating: 4.8,
    sections: [
      {
        title: "General",
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
  {
    id: 12,
    image: prod3,
    name: "Lolito",
    des: "Luxury big sofa",
    price: 7000,
    discountPercentage: 50,
    isNew: false,
    details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Ahmed",
        rating: 5,
        comment: "Great quality",
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very comfortable",
      },
    ],
  sections: [
      {
        title: "General",
        salesPackage: "1 titleal sofa",
        modelNumber: "TFCBLGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
      },
      {
        title: "Product",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maximumLoadCapacity: "280 KG",
        originOfManufacture: "India",
      },

      {
        title: "Dimentions",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },

      {
        title: "Warranty",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      },
    ],
  },
];
