import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Home = lazy(async () => import('@/pages/Home/Home.tsx'));
const About = lazy(async () => import('@/pages/About/About.tsx'));
const Project = lazy(async () => import('@/pages/Project/Project.tsx'));
const RootLayout = lazy(async () => import('@/layout/RootLayout'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Project" element={<Project />} />
    </Route>
  )
);

export default router;
