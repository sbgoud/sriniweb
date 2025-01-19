import Image from "next/image";

const articles = [
  {
    title: "Foundation Launches New Rural Health Initiative",
    date: "July 20, 2025",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis magna ut turpis consequat, nec ultricies lacus viverra.",
    image:
      "https://images.pexels.com/photos/7089615/pexels-photo-7089615.jpeg",
  },
  {
    title: "SRINI Foundation Hosts Educational Workshops",
    date: "June 12, 2025",
    excerpt:
      "Etiam porta lectus vitae lorem ultrices, sit amet bibendum ipsum tempus. Phasellus viverra ac nisi posuere luctus.",
    image:
      "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg",
  },
  {
    title: "Collaboration with Local NGOs for Women Empowerment",
    date: "May 08, 2025",
    excerpt:
      "Duis sit amet sapien ac ex fermentum consequat. Fusce consectetur, quam quis sodales fringilla.",
    image:
      "https://images.pexels.com/photos/7598047/pexels-photo-7598047.jpeg",
  },
];

export default function News() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News & Articles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow hover:shadow-lg transition-shadow p-4 flex flex-col"
          >
            {/* Article Image */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded"
              />
            </div>
            {/* Title & Date */}
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            {/* Excerpt */}
            <p className="text-gray-700 flex-1">{article.excerpt}</p>
            {/* Read More (dummy link) */}
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
