function RightColumn() {
  return (
    <aside className="w-[33vw] hidden md:block">
      <div className="flex flex-col">
        <div className="bg-fx-blue-clear pt-10 pb-20 pl-10 pr-10 rounded-lg">
          <div className="mb-4">
            <span className="bg-fx-white text-fx-white">
              _____________________________________________
            </span>
          </div>
          <div className="mt-4">
            <span className="bg-fx-white text-fx-white">
              _____________________
            </span>
          </div>
        </div>

        <div className="border border-fx-blue-clear rounded-lg mt-5 p-10">
          <div className="flex justify-center">
            <div className="mt-1 mr-3">
              <span className="bg-fx-blue-clear text-fx-blue-clear">
                ________________________
              </span>
            </div>

            <div className="mb-4">
              <div className="w-8 h-8 rounded-full bg-fx-blue-clear"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightColumn;
