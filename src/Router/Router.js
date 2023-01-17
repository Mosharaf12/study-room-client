import Main from "../layout/Main";
import AddStudent from "../Pages/AddStudent/AddStudent";
import EditStudent from "../Pages/EditStudent/EditStudent";
import Home from "../Pages/Home/Home";
import Students from "../Pages/Students";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addstudent",
                element: <AddStudent></AddStudent>
            },
            {
                path: "/student",
                element: <Students></Students>
            },
            {
                path: "/student/:id",
                loader:async({params})=> await fetch(`https://study-room-server.vercel.app/student/${params.id}`),
                element: <EditStudent></EditStudent>
            },
        ]
    }
])