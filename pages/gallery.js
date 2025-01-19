import Image from "next/image";

export default function Gallery() {
  // Add as many image URLs as you like
  const images = [
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg",
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/681847/pexels-photo-681847.jpeg",
    "https://images.pexels.com/photos/1294501/pexels-photo-1294501.jpeg",
    "https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg",
    "https://images.pexels.com/photos/332459/pexels-photo-332459.jpeg",
    "https://images.pexels.com/photos/7110098/pexels-photo-7110098.jpeg",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded shadow relative w-full h-48"
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="
                object-cover
                transition-transform
                duration-300
                hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
