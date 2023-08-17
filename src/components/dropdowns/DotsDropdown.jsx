import { HideIcon, OptionsIcon } from "../Icons";

export default function DotsDropdown() {
  return (
    <div className="absolute ml-[-131px] mt-[5px] md:ml-[0px] md:mt-[5px] bg-white border border-gray-300 shadow-lg">
      <div className="flex hover:bg-fx-gray pt-3 px-2 cursor-pointer">
        <HideIcon />
        <span className="text-fx-text-post ml-3 mb-2">Hide</span>
      </div>
      <div className="flex hover:bg-fx-gray pb-3 px-2 cursor-pointer">
        <OptionsIcon />
        <span className="text-fx-text-post ml-3">Improve my feed</span>
      </div>
    </div>
  );
}
