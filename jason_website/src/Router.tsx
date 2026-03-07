import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./components/movies";
import MyCard from "./daisyui";
import FormApp from "./forms";
import Counter from "./myapp";
import PropsDestruct from "./components/propsdestruct";
import ReactEvents from "./events";
import ApiUse from "./components/apiuse";
import Choice from "./components/Favourite";
import Users from "./components/users";
import PostData from "./components/postdata";

function Router1(){
    return(
        <BrowserRouter>
         <nav className="text-2xl text-center gap-2 p-4 bg-gray-200 mb-4 flex justify-center space-x-4 text-blue-400">
            <Link to="/">Movies</Link>
            <Link to="/shop">Shopping</Link>
            <Link to="/contact">Counter</Link>
            <Link to="/form">Form</Link>
            <Link to="/props">Props Destructuring</Link>
            <Link to="/choice">Favourite Color</Link>
            <Link to="/api">API Use</Link>
            <Link to="/users">Users</Link>
            <Link to="/postdata">Post Data</Link>
         </nav>

         <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/shop" element={<MyCard/>}/>
            <Route path="/contact" element={<Counter/>}/>
            <Route path="/form" element={<FormApp/>}/>
            <Route path="/props" element={<PropsDestruct/>}/>
            <Route path="/choice" element={<Choice/>}/>
            <Route path="/api" element={<ApiUse/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/postdata" element={<PostData/>}/>
         </Routes>
        </BrowserRouter>
    )
}
export default Router1;