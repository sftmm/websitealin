/* eslint-disable jsx-a11y/no-redundant-roles */
import { CameraIcon } from "@heroicons/react/solid";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
  return (
    <>
      <div className="bg-white relative pt-6 pb-16 sm:pb-24 lg:pb-32 ">
        <Header />
        <div className="relative py-16 bg-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Halooo
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Berkenalan dengan <span className="text-indigo-600">Khalisa Khalid</span>
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <img
                        className="rounded-lg shadow-lg object-cover object-center"
                        src="./img/10.jpeg"
                        alt="Whitney leaning against a railing on a downtown street"
                        width={1184}
                        height={1376}
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Photo by Google</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    Khalisah Khalid, perempuan kelahiran Jakarta, 25 Agustus
                    1978 ini lebih akrab dipanggil Alin. Oleh rekan-rekannya, di
                    depan namanya ditambahkan kata Mpok.. Ibu berputri satu
                    bernama Jingga Syifa Kanira dari pernikahannya dengan Ade
                    Fadli yang juga seorang aktivis lingkungan ini sudah lama
                    malang melintang di Walhi, organisasi yang dikenalnya
                    semenjak jadi aktivis Mapala tahun 1997.
                  </p>
                </div>
                <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    Jurusan Komunikasi dan Penyiaran Islam (KPI)Fakultas Dakwah
                    IAIN Syarif Hidayatullah Ciputat (kini UIN). Ia pernah
                    menjabat sebagai Dewan Nasional Walhi selama 1 periode
                    hingga tahun 2012.
                  </p>
                  <p>
                    Saat ini Alin memegang amanat sebagai Kepala Departemen
                    Pengembangan Jaringan dan Sumberdaya. Ketekunannya
                    mempelajari relasi antara perempuan dan lingkungan hidup,
                    membuatnya berkesempatan menimba ilmu dalam sebuah short
                    course tentang Ekologi Politik Feminis di Institute for
                    Social Studies (ISS) di Belanda.
                  </p>
                  <p>
                    Berikut hasil wawancara Swara Rahima dengan perempuan yang
                    juga berkiprah di Biro Politik dan Ekonomi Pimpinan Pusat
                    Sarekat Hijau Indonesia, yang juga sempat melakukan
                    penelitian tentang perempuan pejuang lingkungan dengan
                    Komnas Perempuan, RMI dan Bina Desa dengan metode penggalian
                    data “tutur perempuan” ini.
                  </p>
                  <ul role="list" class="list-disc ml-6">
                    <li>
                      Persoalan lingkungan hidup apa saja yang menjadi masalah
                      serius akhir-akhir ini?
                    </li>
                    <li>
                      Apa sajakah yang dikategorikan ke dalam bencana ekologis
                      itu?
                    </li>
                    <li>
                      Seberapa besar dan dalam bentuk apa saja kerusakan alam
                      yang diakibatkan oleh globalisasi ekonomi itu ?
                    </li>
                  </ul>
                  <p>
                    Selanjutnya, yang saya kira memang dibutuhkan adalah
                    bersinergi, konsolidasi. Di sini kita sering memanfaatkan
                    momentum. Misalnya di Hari Tani, kita konsolidasi.
                  </p>

                  <p>
                    Tetapi kita juga harus mulai mengkonsolidasikan ide,
                    gagasan, mencoba menemukan itu. Mungkin tantangan besarnya
                    di situ. Tetapi saya kira, pasti bisa. Di tengah fragmentasi
                    gerakan, bukan saja gerakan lingkungan dan gerakan
                    perempuan. Mengingat gerakan perempuan saja fragmentasi
                    gerakannya begitu kuat.
                  </p>
                  <p>
                    Namun, di tengah fragmentasi gerakan, kita kan harus terus
                    mencoba. Seperti di internal kami ada Gender Working Group.
                    Ada kemajuannya dan juga ada kemandegannya, dan mesti
                    didinamisir lagi. Saya kira itu merupakan dinamika gerakan
                    sosial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
