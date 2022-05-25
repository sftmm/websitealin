/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Soroti Kasus Wadas, Greenpeace: Potret Paling Nyata Kekerasan Negara Setelah 24 Tahun Reformasi",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Aktivis Greenpeace Indonesia Khalisa Khalid menilai penanganan terhadap lingkungan dan sumber daya alam di bawah kendali pemerintahan Presiden Jokowi-Wapres Maruf Amin malah mengalami degradasi setelah reformasi yang kini sudah berusia 24 tahun.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
    "./img/5.jpeg",
    readingTime: "6 min",
    author: {
      name: "Khalisah Khalid",
      href: "#",
      imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Limbah Batu Bara dan Sawit Tak Masuk Kategori B3, Walhi: Ini yang Dikhawatirkan dari UU Cipta Kerja",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Ketua Desk Politik Wahana Lingkungan Hidup Indonesia (Walhi) Khalisa Khalid mengatakan, pihaknya sudah mengkhawatirkan sejak awal bahwa disahkannya Undang-Undang (UU) Cipta Kerja akan berdampak pada instrumen perlindungan lingkungan hidup",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
    "./img/6.jpeg",
    readingTime: "4 min",
    author: {
      name: "Khalisah Khalid",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Ekosida: Kejahatan Lingkungan yang Berpotensi Melahirkan Genosida",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Ada istilah yang terus dipopulerkan untuk kejahatan lingkungan hidup, yaitu ekosida atau ecoside. Penamaan secara khusus itu penting, untuk memberi tekanan bahwa perusakan lingkungan adalah sebuah kejahatan. Namun, menurut Kepala Desk Politik, Wahana Lingkungan Hidup (Walhi) Nasional, Khalisah Khalid, itu bukan kampanye yang mudah",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
    "./img/7.jpeg",
    readingTime: "11 min",
    author: {
      name: "Khalisah Khalid",
      href: "#",
      imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Article() {
  return (
    <div className="relative overflow-hidden bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
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
            height={784}
            fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
          />
        </svg>
      </div>
      {/* <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div> */}
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
