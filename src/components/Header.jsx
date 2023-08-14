import logoMobile from "../assets/logo_mobile.png";

function Header() {
  return (
    <header className="p-4 bg-fx-dark-blue md:bg-fx-white">
      <div className="flex justify-between md:hidden">
        <img src={logoMobile} alt="logomobile" className="h-8 w-auto" />
        <div className="flex mt-2">
          <div className="w-5 h-5 rounded-full bg-fx-gray-dot mr-5"></div>
          <div className="w-5 h-5 rounded-full bg-fx-gray-dot"></div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="">
          <div className="flex">
            <div className="w-4 h-4 rounded-full bg-fx-blue-clear mr-3"></div>
            <div className="mb-2 h-2 w-1/6 bg-fx-blue-clear mt-1 mr-3"></div>
          </div>
          <div className="flex">
            <div className="mb-2 h-2 w-1/6 bg-fx-orange mt-1"></div>
            <div className="w-4 h-4 rounded-full bg-fx-gray-dark"></div>
            <div className="w-4 h-4 rounded-full bg-fx-gray-dark"></div>
            <div className="flex">
              <div className="w-4 h-4 rounded-full bg-fx-gray-dark mr-3"></div>
              <div className="mb-2 h-2 w-[100px] bg-fx-gray-dark mt-1 mr-3"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
