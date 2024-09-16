export default function Header() {
  return (
    <div className="bg-gradient-to-l from-[#0F2027] via-[#0B1418] to-[#203A43] w-full flex flex-col  font-pop px-[5%] h-screen xsm:h-[130vh] sm:h-[130vh] xsm:px-2">
      <div className="mt-[5vh] xsm:w-full">
        <h1 className="xl:text-[70px] lg:text-[70px] md:text-[60px] sm:text-[50px] xsm:text-[35px] text-white font-semibold mb-4">
          10-Month
        </h1>
        <h1 className="text-4xl text-green-600 xl:text-[70px] lg:text-[70px] md:text-[60px] sm:text-[50px] xsm:text-[35px] font-semibold">
          Internship Program!
        </h1>
      </div> 
      <div className="flex flex-row xsm:flex-col sm:flex-col">

        <div className="text-white flex flex-row flex-wrap mt-[15vh] xsm:mt-[8vh] sm:mt-[8vh] gap-4 xsm:flex-cols-2 sm:flex-grid-2 pb-4 sm:justify-center sm:items-center xsm:justify-center xsm:items-center">
          {/* Card 1 */}
          <div
            className="group w-[15vw] xsm:w-[45%] sm:w-[45%] h-[25vh] shadow-lg rounded-xl p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300 relative"
            style={{
              borderRadius: "20px",
              border: "4px solid transparent",
              background:
                "linear-gradient(#203A43, #203A43) padding-box, linear-gradient(to right, white 30%, gray 100%, white 50%) border-box",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-2xl font-semibold text-green-600">4 Months</p>
              <p className="text-lg font-light py-3">Online/Offline Training</p>
            </div>
            <p className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 rounded-xl p-4">
              Some text appears on hover.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group w-[15vw] xsm:w-[45%] sm:w-[45%] h-[25vh] shadow-lg rounded-xl p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300 relative"
            style={{
              borderRadius: "20px",
              border: "4px solid transparent",
              background:
                "linear-gradient(#203A43, #203A43) padding-box, linear-gradient(to right, white 30%, gray 100%, white 50%) border-box",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-2xl font-semibold text-green-600">6 Months</p>
              <p className="text-lg font-light py-3">Work On Live Projects</p>
            </div>
            <p className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 rounded-xl p-4">
              Some text appears on hover.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group w-[15vw] xsm:w-[45%] sm:w-[45%] h-[25vh] shadow-lg rounded-xl p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300 relative"
            style={{
              borderRadius: "20px",
              border: "4px solid transparent",
              background:
                "linear-gradient(#203A43, #203A43) padding-box, linear-gradient(to right, white 30%, gray 100%, white 50%) border-box",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-2xl font-semibold text-green-600">Aptitude Training</p>
            </div>
            <p className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 rounded-xl p-4">
              Some text appears on hover.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="group w-[15vw] xsm:w-[45%] sm:w-[45%] h-[25vh] shadow-lg rounded-xl p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300 relative"
            style={{
              borderRadius: "20px",
              border: "4px solid transparent",
              background:
                "linear-gradient(#203A43, #203A43) padding-box, linear-gradient(to right, white 30%, gray 100%, white 50%) border-box",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-2xl font-semibold text-green-600">Personality Enhancement</p>
            </div>
            <p className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 rounded-xl p-4">
              Some text appears on hover.
            </p>
          </div>
          </div>

        {/* Card 5 */}
        <div
          className="group w-[25vw] h-[35vh] sm:object-cover xsm:object-cover xsm:w-full xsm:flex-col sm:w-full sm:flex-col md:flex-col shadow-lg rounded-xl p-1 flex justify-center items-center  cursor-pointer hover:text-white transition-all duration-300 relative lg:ml-7 xl:ml-7 2xl:ml-7 3xl:ml-7 lg:my-[10vh] xl:my-[10vh] 2xl:my-[10vh]"
          style={{
            borderRadius: "20px",
            border: "4px solid transparent",
            background:
              "linear-gradient(#203A43, #203A43) padding-box, linear-gradient(to right, white 30%, gray 100%, white 50%) border-box",
          }}
        >
          <div className="relative h-full w-full flex justify-center items-center">
            <img
              src="/Divyam-vashisht-1.jpg"
              alt="Card Image"
              className="transition-opacity duration-300 h-full w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-85 transition-all duration-300 rounded-lg"></div>
            <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-semibold text-green-500 flex flex-col justify-center items-center">
              <span className="py-3">One Year,</span>
              <span>Internship Certificate</span>
            </p>
          </div>
        </div>
        

      </div>
    </div>
  );
}
