import { LeftArrowIcon } from "../Icons";

export default function TopDropdown() {
  return (
    <div className="absolute ml-[-260px] mt-[30px] md:ml-[30px] md:mt-[30px] bg-white border border-gray-300 shadow-lg">
      <div className="flex items-center bg-gray-200 p-2">
        <LeftArrowIcon />
        <span className="ml-2">Tell us why:</span>
      </div>
      <div className="flex items-center p-2 mt-2">
        <input type="radio" className="mr-2 ml-2" />
        <span className="text-sm">I&apos;m not interested in this author</span>
      </div>
      <div className="flex items-center p-2">
        <input type="radio" className="mr-2 ml-2" />
        <span className="text-sm">I&apos;m not interested in this topic</span>
      </div>
      <div className="flex items-center p-2">
        <input type="radio" className="mr-2 ml-2" />
        <span className="text-sm">
          I&apos;ve seen too many posts on this topic
        </span>
      </div>
      <div className="flex items-center p-2">
        <input type="radio" className="mr-2 ml-2" />
        <span className="text-sm">The information is incorrect</span>
      </div>
      <div className="flex items-center p-2">
        <input type="radio" className="mr-2 ml-2" />
        <span className="text-sm">I&apos;ve seen this post before</span>
      </div>
      <div className="flex items-center p-2">
        <input type="radio" className="mr-2 ml-2" />
        <span className="text-sm">Other reasons</span>
      </div>

      <div className="p-4 flex items-center justify-center">
        <span className="text-xs text-gray-400 border border-b-gray-400 px-20 py-2">
          Hide content
        </span>
      </div>
    </div>
  );
}
