import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Gallery(props) {
  const { pictures } = props;
  return (
    <>
      <div className="relative pt-6 pb-4 sm:pb-24 lg:pb-12 ">
        <Header />
        <div className="relative  mx-auto max-w-7xl py-6 bg-white overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:pt-8 lg:pb-10 lg:px-8 mt-4">
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-3xl text-center tracking-tight font-extrabold text-gray-900 sm:text-4xl mb-8">
                Galeri
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
      name: "Gunung Everest",
      href: "#",

      description:
        "Gunung Everest (bahasa Inggris: Mount Everest) adalah gunung tertinggi di dunia (jika diukur dari permukaan laut). Rabung puncaknya menandakan perbatasan ...",
      imageSrc: "./img/13.jpeg",
      imageAlt:
        "Person using a pen to cross a task off a pictureivity paper card.",
    },
    {
      id: 2,
      name: "Danau Toba",
      href: "#",

      description:
        "Danau Toba terletak di Sumatra Utara dan menjadi salah satu dari keajaiban alam di dunia. Danau ini adalah danau terbesar di Asia Tenggara dan juga dikenal ...",
      imageSrc: "./img/1.jpeg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Focus Carry Case",
      href: "#",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "./img/2.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 4,
      name: "Cappadocia",
      href: "#",

      description:
        "Cappadocia adalah wilayah kuno yang terletak di Turki tengah selatan atau tenggara Ankara. Cappadocia berada di dataran tinggi yang terjal di ...",
      imageSrc: "./img/11.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 5,
      name: "Focus Carry Case",
      href: "#",

      description: "Heather Gray",
      imageSrc: "./img/12.jpeg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 6,
      name: "Focus Carry Case",
      href: "#",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "./img/2.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 7,
      name: "Focus Carry Case",
      href: "#",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "./img/2.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 8,
      name: "Focus Carry Case",
      href: "#",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "./img/2.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 9,
      name: "Focus Carry Case",
      href: "#",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "./img/2.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    // More pictures...
  ],
};

Gallery.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object),
};
