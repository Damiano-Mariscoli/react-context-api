import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./HomePage.jsx";
import { Content } from "./Content.jsx";
import { ChiSiamo } from "./ChiSiamo.jsx";
import PostContext from "./context/PostContext.jsx";
import { useContext } from "react";
import DefaultLayout from "./DefaultLayout.jsx";
import SinglePosts from "./components/SinglePost.jsx";
import PostPage from "./components/PostPage.jsx";

function App() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <PostContext.Provider value={{ Posts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/posts" element={<Content />} />
            <Route path="/posts/:id" element={<SinglePosts />} />
            <Route path="/posts/context" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
