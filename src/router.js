import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import ListPosts from "./components/blog/ListPosts";
import Crud from "./components/CRUD";
import CreatePost from "./components/blog/CreatePost";
import ViewPost from "./components/blog/Viewpost";
import PostListItem from "./components/blog/PostListItem";
import Register from "./components/auth/register";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    {path:'listpost',element:<ListPosts/>},
    {path:'create',element:<CreatePost/>},
    {path:'crud',element:<Crud/>},
    {path:'delete',element:<PostListItem/>},
    {path:'view',element:<ViewPost/>},
    { path: 'register', element:<Register/>}
]);

export default router;