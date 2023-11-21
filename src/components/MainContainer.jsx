import { useState, useEffect, useContext } from "react";
import Post from "./Post";
import TopMainHeader from "./TopMainHeader";
import { FilterContext } from "../context/filter.context";

function MainContainer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { isLatestClicked, isPopularClicked } = useContext(FilterContext);

  const APIurl = "https://run.mocky.io/v3/1eb48a56-fb03-4536-a1a3-13f583430643";

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(APIurl);
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
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
    <main className="flex-grow flex flex-col min-h-screen justify-start mr-2 pr-4 py-2 md:pr-0">
      <TopMainHeader />
      <div className="py-4 mr-2 md:mr-0">
        <Post posts={filteredPosts} isLoading={loading} />
      </div>
    </main>
  );
}

export default MainContainer;
