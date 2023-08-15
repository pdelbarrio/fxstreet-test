import { useState, useEffect } from "react";
import { AllButton, LatestButton, PopularButton } from "./Buttons";
import Post from "./Post";

function MainContainer() {
  const [isLatestClicked, setIsLatestClicked] = useState(true);
  const [isPopularClicked, setIsPopularClicked] = useState(false);
  const [posts, setPosts] = useState([]);

  const APIurl = "https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7";

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(APIurl);
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (isPopularClicked) {
      return post.isPopular === true;
    } else if (isLatestClicked) {
      return post.isPopular === false;
    }
    return true;
  });

  return (
    <main className="p-4 flex-grow flex flex-col justify-start">
      <div className="flex justify-between">
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
      </div>
      <div className="py-4">
        <Post posts={filteredPosts} />
      </div>
    </main>
  );
}

export default MainContainer;
