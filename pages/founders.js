export default function Founders() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Founders</h1>
  
        {/* Founder 1: Srinivas Goud Rachakonda */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Mr. Srinivas Goud Rachakonda
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            {/* Dummy portrait from Pexels */}
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
              alt="Srinivas Goud (Dummy Portrait)"
              className="w-48 h-48 object-cover rounded-full mr-6 mb-4 md:mb-0"
            />
            <p>
              Srinivas Goud Rachakonda, a native of Gadkol village in Nizamabad
              district, Telangana, has made significant strides in the fields of
              investment banking and financial technologies. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
  
          {/* Family Photos */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg"
                alt="Srinivas with wife and 2 kids (Dummy)"
                className="w-full rounded shadow"
              />
              <p className="text-sm text-gray-600 mt-2">
                Srinivas with wife and 2 kids (Dummy photo from Pexels).
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3770586/pexels-photo-3770586.jpeg"
                alt="Family photo with parents (Dummy)"
                className="w-full rounded shadow"
              />
              <p className="text-sm text-gray-600 mt-2">
                Family photo with parents included (Dummy photo from Pexels).
              </p>
            </div>
          </div>
        </div>
  
        {/* Founder 2: Tirumala Rani Dayala */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Mrs. Janaki
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            {/* Dummy portrait from Pexels */}
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="Tirumala Rani Dayala (Dummy Portrait)"
              className="w-48 h-48 object-cover rounded-full mr-6 mb-4 md:mb-0"
            />
            <p>
              Janaki co-founded SRINI Foundation with a vision to
              uplift rural communities through education and inclusive programs.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              placerat congue massa.
            </p>
          </div>
        </div>
      </div>
    );
  }
  