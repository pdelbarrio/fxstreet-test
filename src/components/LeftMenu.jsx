import logoDesktop from "../assets/logo_desktop.png";

function LeftMenu() {
  return (
    <aside className="hidden md:block min-h-screen bg-fx-dark-blue p-10 min-w-[200px]">
      <img
        src={logoDesktop}
        alt="logodesktop"
        className="mx-auto mb-20 h-[54px] w-auto flex-shrink-0"
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
