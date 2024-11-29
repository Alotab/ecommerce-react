
import { 
    createBrowserRouter, 
    RouterProvider, 
    Route,
    Outlet,
    } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./app.scss"
// This creates a layout for the Navbar and Footer to appear in some pages in the app
// The Outlet in between will represent the apps that will have Navbar and Footer in their pages
// Basically, having children in the layout
const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children: [
            {
                path:"/",
                element:<Home />

            },
            {
                path:"/products/:id",
                element:<Products />
            },
            {
                path:"/product/:id",
                element:<Product />
            }
        ]
    }
    
])


// const router = createBrowserRouter([
//     {
//         path:"/",
//         element:<Home />
//     },
//     {
//         path:"/products/:id",
//         element:<Products />
//     },
//     {
//         path:"/product/:id",
//         element:<Product />
//     }
// ])

const App = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App