import React from "react";

const Support = () => {
  const courses = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=",
      date: "September 10, 2024",
      name: "React Development",
      description:
        "Learn the basics of React and how to build scalable web applications.",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw6Mk_YZsbSp1g6tL_6qZlhI0STrZL2mXVQ&s",
      instructor: "John Doe",
      designation: "Senior Developer",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=",
      date: "September 12, 2024",
      name: "UI/UX Design",
      description:
        "Understand the principles of UI/UX design and create stunning user interfaces.",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw6Mk_YZsbSp1g6tL_6qZlhI0STrZL2mXVQ&s",
      instructor: "Jane Smith",
      designation: "Lead Designer",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=",
      date: "September 15, 2024",
      name: "Machine Learning",
      description:
        "Dive into machine learning algorithms and build intelligent models.",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw6Mk_YZsbSp1g6tL_6qZlhI0STrZL2mXVQ&s",
      instructor: "Alice Johnson",
      designation: "Data Scientist",
    },
  ];

  return (
    <div className="container mx-auto p-5 xsm:p-2 sm:p-2 py-10 xsm:mt-10 sm:mt-10 w-[70%]">
      <div className="grid grid-cols-1 xsm:grid-cols-1 xsm:w-full sm:w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex gap-2 py-5">
                <p className="text-gray-500 text-sm">INTERNET</p>
                <p className="text-gray-500 text-sm">{course.date}</p>
              </div>
              <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex items-center">
                <img
                  src={course.profileImage}
                  alt={course.instructor}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">{course.instructor}</p>
                  <p className="text-gray-500 text-sm">{course.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
