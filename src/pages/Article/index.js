import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ArticlePage() {
  return (
    <>
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 ">
        <Header />
        <div className="relative  mx-auto max-w-7xl py-16 bg-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 mt-4">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                {/* <span className="block text-base text-center text-orange-600 font-semibold tracking-wide uppercase">
                  Pendahula
                </span> */}
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Soroti Kasus Wadas, Greenpeace: Potret Paling Nyata Kekerasan
                  Negara Setelah 24 Tahun Reformasi
                </span>
              </h1>
              {/* <p className="mt-8 text-xl text-gray-500 leading-8">
              
              </p> */}
            </div>
            <div className="mt-6 prose prose-orange prose-lg text-gray-500 mx-auto">
              {/* <p>
                Faucibus commodo massa rhoncus, volutpat.{" "}
                <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                praesent donec est. Odio penatibus risus viverra tellus varius
                sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim.{" "}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
                id.
              </p>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul> */}
              <p>
                Aktivis Greenpeace Indonesia Khalisa Khalid menilai penanganan
                terhadap lingkungan dan sumber daya alam di bawah kendali
                pemerintahan Presiden Jokowi-Wapres Maruf Amin malah mengalami
                degradasi setelah reformasi yang kini sudah berusia 24 tahun.
              </p>
              {/* <h2>From beginner to expert in 30 days</h2> */}
              <p className="py-2">
                "Kami nilainya dalam konteks reformasi di bidang lingkungan
                hidup dan sumber daya alam, itu mengalami kemunduran," ujar
                Khalisa dalam diskusi publik 24 Tahun Reformasi-Arah Demokrasi
                Indonesia Kini secara virtual, Jumat (20/5/2022).
              </p>
              <blockquote>
                {/* <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p> */}
              </blockquote>
              {/* <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p> */}
              <figure>
                <img
                  className="w-full rounded-lg"
                  src="./img/5.jpeg"
                  alt=""
                  width={1310}
                  height={873}
                />
                {/* <figcaption>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption> */}
              </figure>
              {/* <h2>Everything you need to get up and running</h2> */}
              <p className="mt-4">
              "Jadi instrumen perlindungannya benar-benar direduksi gitu, dan bahkan Prof Emil juga sudah menyebut kita ini balik lagi puluhan tahun ke belakang itu, bahkan lebih buruk dari undang-undang sebelumnya ya undang-undang 23 tahun '97. Yang artinya 20 tahun, 24 tahun kurang lebih kita mundur ke belakangnya, bahkan kalau mengacu pada undang-undang sebelumnya di tahun 80-an, kemundurannya lebih jauh lagi gitu," ucap dia.
              </p>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
