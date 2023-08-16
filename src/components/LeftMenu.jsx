import logoDesktop from "../assets/logo_desktop.png";

function LeftMenu() {
  return (
    <aside className="w-1/5 hidden md:block p-10">
      <img
        src={logoDesktop}
        alt="logodesktop"
        className="mx-auto mb-20 h-[54px] w-auto"
      />
      <div className="mt-5">
        <div className="mb-8 h-2 w-4/5 bg-fx-white"></div>
        <div className="mb-8 h-2 w-4/5 bg-fx-white"></div>
        <div className="mb-8 h-2 w-4/5 bg-fx-white"></div>
        <div className="mb-8 h-2 w-4/5 bg-fx-white"></div>
        <div className="mb-8 h-2 w-4/5 bg-fx-white"></div>
      </div>
    </aside>
  );
}

export default LeftMenu;
