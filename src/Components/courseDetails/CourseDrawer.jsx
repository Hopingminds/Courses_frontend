import React,{useEffect} from "react";

export default function CourseDrawer({ isOpen, setIsOpen, component }) {
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
      className={
        "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-screen xl:max-w-[80%] md:w-[70%] lg:w-[70%] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <article className="w-full  py-10 flex flex-col overflow-y-auto scroll-smooth h-full  ">
          <header className="absolute right-10 text-red-400 text-2xl top-[100px] cursor-pointer" onClick={() => setIsOpen(false)}>X</header>
          <div className="mt-10">
          {component}
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
}
