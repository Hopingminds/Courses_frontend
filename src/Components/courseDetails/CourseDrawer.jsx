import React, { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";

export default function CourseDrawer({ isOpen, setIsOpen, component, onCardClick }) {
  const drawerRef = useRef(null); // Ref for the drawer

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const toggleBodyScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    window.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    toggleBodyScroll();

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, setIsOpen]);

  return (
    <main
      className={`fixed overflow-hidden bg-black -z-10 bg-opacity-25 inset-0 transform ease-in-out ${
        isOpen
          ? "transition-opacity opacity-100 duration-4000"
          : "transition-all opacity-0 duration-1000"
      }`}
    >
      <section
        ref={drawerRef}
        className={`absolute bg-gray-100 shadow-xl transition-transform duration-500 ease-in-out transform rounded-xl ${
          isOpen ? "scale-100" : "scale-50"
        }`}
        style={{
          width: "60vw", // Default width for small screens
          height: "80vh",
          top: "10vh",
          left: "20vw",
          // Tailwind responsive widths and positions
          "@media (min-width: 640px)": { width: "70vw", left: "15vw" }, // lg
          "@media (min-width: 1024px)": { width: "60vw", left: "20vw" }, // xl
        }}
      >
        <article className="w-full py-10 flex flex-col overflow-y-auto scroll-smooth h-full">
          <header
            className="absolute right-5 lg:right-10 text-red-400 text-xl lg:text-2xl top-5 lg:top-10 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <ImCross />
          </header>
          <div className="mt-5 lg:mt-10">
            {component && React.isValidElement(component) ? (
              React.cloneElement(component, { onCardClick })
            ) : (
              <div>No component provided</div>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
