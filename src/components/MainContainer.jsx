import { useState } from "react";
import { AllButton, LatestButton, PopularButton } from "./Buttons";

function MainContainer() {
  const [isLatestClicked, setIsLatestClicked] = useState(true);
  const [isPopularClicked, setIsPopularClicked] = useState(false);

  return (
    <main className="p-4 flex-grow flex justify-between">
      <div className="flex space-x-4">
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            setIsLatestClicked(true), setIsPopularClicked(false);
          }}
        >
          <LatestButton isClicked={isLatestClicked} />
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            setIsLatestClicked(false), setIsPopularClicked(true);
          }}
        >
          <PopularButton isClicked={isPopularClicked} />
        </div>
      </div>
      <div className="flex space-x-4">
        <div>Show:</div>
        <AllButton />
      </div>
    </main>
  );
}

export default MainContainer;
