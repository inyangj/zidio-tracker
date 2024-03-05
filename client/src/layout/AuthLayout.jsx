import { Link } from "react-router-dom";
import { location } from "../assets/images";

const Layout = ({ children, className }) => {
  return (
    <section className="flex flex-col gap-y-6 md:flex-row w-full mx-auto bg-primaryWhite">
      <div className="background-image hidden lg:flex lg:w-1/2">
        <div className="absolute top-16 left-6 flex flex-row gap-2">
          <img
            src={location}
            alt="health icon"
            className="w-12 scale-75 h-12"
          />
          <h1 className="text-white text-3xl font-semibold">Zidio Tracker</h1>
        </div>
      </div>

      <div className={`w-full flex flex-col ${className}  px-3 lg:px-1 lg:w-1/2`}>
        {children}
      </div>
    </section>
  );
};

export default Layout;
