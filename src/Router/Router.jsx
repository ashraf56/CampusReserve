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
import Protected from "./Protected";
import Errorpage from "../Errorpage";
import Profilepage from "../UserProfile/Profilepage";
import Apply from "../Admission/Apply";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body> ,
      errorElement:<Errorpage></Errorpage>
,      children: [
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
  element: <Protected> <Profile/></Protected>,
},
{
  path:'/profilepage',
  element: <Profilepage/>,
},
{
  path:'/apply/:id',
  element: <Apply/>,
  loader: ({params})=> fetch(`https://campusreserve-server.onrender.com/college/${params.id}`)

},
{
  path:'/admission',
  element: <Protected><Admission/></Protected>
},
{
  path:'/Myclg',
  element: <Protected><Mycollege/> </Protected>
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
  element: <Protected>
    <DetailCollege/>
  </Protected> 
  , 
  loader: ({params})=> fetch(`https://campusreserve-server.onrender.com/college/${params.id}`)
},

      ]
    },
  ]);

  export default router;