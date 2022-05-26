import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Gallery(props) {
  const { pictures } = props;
  return (
    <>
      <div className="relative pt-6 pb-4 sm:pb-24 lg:pb-32 ">
        <Header />
        <div className="relative py-4 bg-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 mt-4">
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {pictures.map((picture) => (
                  <a key={picture.id} href={picture.href} className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={picture.imageSrc}
                        alt={picture.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{picture.name}</h3>
                      <p>{picture.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {picture.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

Gallery.defaultProps = {
  pictures: [
    {
      id: 1,
      name: "Focus Paper Refill",
      href: "#",
      price: "$13",
      description: "3 sizes available",
      imageSrc: "./img/13.jpeg",
      imageAlt:
        "Person using a pen to cross a task off a pictureivity paper card.",
    },
    {
      id: 2,
      name: "Focus Card Holder",
      href: "#",
      price: "$64",
      description: "Walnut",
      imageSrc: "./img/1.jpeg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/2.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 4,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/11.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 5,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/12.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 6,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/16.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 7,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/14.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 8,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/15.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 9,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc: "./img/3.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    // More pictures...
  ],
};

Gallery.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object),
};
