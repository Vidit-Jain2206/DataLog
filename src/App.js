import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "./Pages/User";
import Posts from "./Pages/Posts";
import UserDetail from "./Pages/UserDetail";
import PostsDetails from "./Pages/PostsDetails";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/user/:id" element={<UserDetail />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/post/:id" element={<PostsDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
