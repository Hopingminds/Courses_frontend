import React, { useEffect, useRef } from "react";

export default function CourseDrawer({ isOpen, setIsOpen, component }) {
  const drawerRef = useRef(null); // Ref for the drawer

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setIsOpen]);

  return (
    <main
      className={`fixed overflow-hidden bg-black -z-10 bg-opacity-25 inset-0 transform ease-in-out ${
        isOpen
          ? "transition-opacity opacity-100 duration-5000 translate-x-0"
          : "transition-all opacity-0 translate-x-full duration-2000 delay-1000"
      }`}
    >
      <section
        ref={drawerRef}
        className={`absolute bg-gray-100 shadow-xl transition-transform duration-500 ease-in-out transform rounded-xl
          ${isOpen ? "scale-100" : "scale-50"}
          sm:w-[90vw] sm:h-[70vh] sm:top-[10vh] sm:left-[5vw]
          md:w-[80vw] md:h-[75vh] md:top-[10vh] md:left-[10vw]
          lg:w-[70vw] lg:h-[80vh] lg:top-[11vh] lg:left-[15vw]
          xl:w-[60vw] xl:h-[80vh] xl:top-[11vh] xl:left-[20vw]
          2xl:w-[50vw] 2xl:h-[80vh] 2xl:top-[11vh] 2xl:left-[25vw]
        `}
        
        // style={{
        //   width: "70vw", 
        //   height: "80vh",
        //   top: "11vh", 
        //   left: "20vw", 
        // }}

        // className=" "
      >
        <article className="w-full py-10 flex flex-col overflow-y-auto scroll-smooth h-full">
          <header
            className="absolute right-10 text-red-400 text-2xl top-10 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            X
          </header>
          <div className="mt-10">{component}</div>
        </article>
      </section>
    </main>
  );
}