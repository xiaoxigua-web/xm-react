import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Home from '../view/Home'
import About from '../view/About'
import Zustand from '../view/zustand-demo/index'

const router = createBrowserRouter([
  {
    path:'/',
    Component: Layout,
    children:[
      {
        // path: 'home',
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'zustand',
        Component: Zustand,
      },
    ]
  },
])

export default router