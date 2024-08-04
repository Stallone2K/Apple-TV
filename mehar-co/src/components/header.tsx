import Mehar from "../assets/MeharCo.jpeg";
const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0 z-30">
        <nav className="sticky top-0 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img src={Mehar} alt="Mehar Consultant" className="h-11 w-32" />
            </div>
            <ul className="flex space-x-6 text-lg text-gray-600 font-bold">
              <li>
                <a href="#" className="hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-blackContrast text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
