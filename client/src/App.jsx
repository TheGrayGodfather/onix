import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageSkeleton from "./components/skeleton/PageSkeleton.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Auth from "./pages/Auth.jsx"

const Home = lazy(() => import("./pages/Home.jsx"));
const Problems = lazy(() => import("./pages/Problems.jsx"));
const Chatters = lazy(() => import("./pages/Chatter.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="problems" element={<Problems />} />
          <Route path="chatter" element={<Chatters />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
