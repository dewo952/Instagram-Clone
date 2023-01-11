import Stories from "../Components/HomePage Components/Stories";
import BasicProfile from "../Components/HomePage Components/BasicProfile";
import Suggestion from "../Components/HomePage Components/Suggestion";
import Footer from "../Components/Footer";
import Post from "../Components/HomePage Components/Post";

const HomePage = () => {
  return (
    <>
      <div className="container pt-8 max-w-5xl">
        <main className="grid grid-cols-3">
          <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
            <Stories />
            <Post />
            <Post />
            <Post /> 
  
          </div>
          <div className="col-span-1 hidden lg:block">
            <div className="fixed p-5 w-80">
              <BasicProfile />
              <Suggestion />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
