import { createBrowserRouter } from "react-router-dom";
import Body from "../Body";
import Home from "../HOME/Home";
import AllCollege from "../AllCollege/AllCollege";
import Admission from "../Admission/Admission";
import Mycollege from "../Mycollege/Mycollege";
import DetailCollege from "../AllCollege/DetailCollege";
import Signup from "../Auths/Signup/Signup";
import Login from "../Auths/Login/Login";
import Profile from "../UserProfile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body> ,
      children: [
{
  path:'/',
  element: <Home></Home>
},
{
  path:'/college',
  element: <AllCollege/>
},
{
  path:'/profile',
  element: <Profile/>,
},
{
  path:'/admission',
  element: <Admission/>
},
{
  path:'/Myclg',
  element: <Mycollege/>
},
{
  path:'/Signup',
  element: <Signup/>
},
{
  path:'/login',
  element: <Login/>
},
{
  path:'/college/:id',
  element: <DetailCollege/>
  , 
  loader: ({params})=> fetch(`http://localhost:3000/college/${params.id}`)
},

      ]
    },
  ]);

  export default router;