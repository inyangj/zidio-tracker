import { Link } from "react-router-dom";
import { location } from "../assets/images";
import routes from "../router/routes";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-6 md:flex-row w-full font-AeonikTRAIL_Regular mx-auto bg-white">
        <div className="background-image hidden lg:flex lg:w-1/2">
          <div className="absolute top-16 left-6 flex flex-row gap-2">
            <img src={location} alt="health icon" className="w-12 h-12" />
            <h1 className="text-white text-3xl font-semibold">Zidio Tracker</h1>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-24 lg:px-1 lg:w-1/2">
          <div className="w-96 text-center lg:text-left">
            <div className="mt-36 mb-24 lg:hidden">
              <img
                src={location}
                alt="health icon"
                className="mx-auto w-12 h-12"
              />
              <h1 className="text-textprimary text-3xl font-semibold">
                Zidio Tracker
              </h1>
            </div>
            <h1 className="text-textprimary font-bold text-4xl">
              Lets Get you started
            </h1>
            <p className="text-textgray my-1 md:font-semibold text-lg lg:text-xs">
              Lets get you up and running with Zidio Tracker
            </p>
            <div className="mt-6">
              <Link to={routes.SIGN_UP}>
                <button className="bg-primary w-full py-3 rounded-md font-semibold text-white md:font-normal">
                  Create Account
                </button>
              </Link>
            </div>

            <div className="mt-6">
              <Link to={routes.LOGIN}>
                <button className="bg-primary w-full py-3 font-semibold rounded-md text-white md:font-normal">
                  Login
                </button>
              </Link>
            </div>

            <p className="text-textgreen fixed bottom-2 left-0 right-0 translate-x-0 lg:hidden">
              By signing up, you agree to Zidio Tracker
              <br />
              <span className="text-primary">Terms of Services</span> and{" "}
              <span className="text-primary">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
