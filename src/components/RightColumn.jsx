function RightColumn() {
  return (
    <aside className="w-[33vw] hidden md:block">
      <div className="flex flex-col">
        <div className="bg-fx-blue-clear pt-10 pb-20 pl-10 pr-10 rounded-lg">
          <div className="mb-4">
            <div className="mb-2 h-2 w-4/5 bg-fx-white"></div>
          </div>
          <div className="mt-4">
            <div className="mb-2 h-2 w-2/4 bg-fx-white"></div>
          </div>
        </div>

        <div className="border border-fx-blue-clear rounded-lg mt-5 p-5">
          <div className="flex justify-center">
            <div className="mb-2 h-2 w-1/3 bg-fx-blue-clear mt-1 mr-3"></div>

            <div className="w-4 h-4 rounded-full bg-fx-blue-clear"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightColumn;
