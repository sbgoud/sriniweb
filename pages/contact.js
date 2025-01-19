export default function Contact() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
  
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Foundation Office</h2>
          <p>
            SRINI Foundation <br />
            Dummy Address, Gadkol Village <br />
            Nizamabad District, Telangana, India <br />
            PIN - 123456
          </p>
        </div>
  
        <form className="bg-white rounded shadow p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="border border-gray-300 p-2 w-full rounded"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
  