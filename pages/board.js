const boardMembers = [
    {
      name: "John Doe",
      role: "Board Member",
      phone: "+91 1234567890",
      email: "john.doe@example.com",
      photo:
        "https://images.pexels.com/photos/3775536/pexels-photo-3775536.jpeg",
    },
    {
      name: "Jane Smith",
      role: "Board Member",
      phone: "+91 9876543210",
      email: "jane.smith@example.com",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Alice Johnson",
      role: "Board Member",
      phone: "+91 9999999999",
      email: "alice.johnson@example.com",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Bob Williams",
      role: "Board Member",
      phone: "+91 8888888888",
      email: "bob.williams@example.com",
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Maria Davis",
      role: "Board Member",
      phone: "+91 7777777777",
      email: "maria.davis@example.com",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "David Brown",
      role: "Board Member",
      phone: "+91 6666666666",
      email: "david.brown@example.com",
      photo:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    },
    {
      name: "Jennifer Wilson",
      role: "Board Member",
      phone: "+91 5555555555",
      email: "jennifer.wilson@example.com",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Michael Taylor",
      role: "Board Member",
      phone: "+91 4444444444",
      email: "michael.taylor@example.com",
      photo:
        "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg",
    },
    {
      name: "Patricia Garcia",
      role: "Board Member",
      phone: "+91 3333333333",
      email: "patricia.garcia@example.com",
      photo:
        "https://images.pexels.com/photos/596547/pexels-photo-596547.jpeg",
    },
    {
      name: "Robert Martinez",
      role: "Board Member",
      phone: "+91 2222222222",
      email: "robert.martinez@example.com",
      photo:
        "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
    },
  ];
  
  export default function Board() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Board Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-4 flex flex-col items-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-sm mt-2">Phone: {member.phone}</p>
              <p className="text-sm">Email: {member.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  