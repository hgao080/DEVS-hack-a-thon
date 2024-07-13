import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import MainPage from "./Pages/MainPage";
import Dashboard from './Pages/Dashboard';
<<<<<<< HEAD
import Board from './Pages/Board';
=======
import About from "./Pages/About"
import DashboardImprovement from "./Pages/DashboardImprovement"
>>>>>>> e3793f06f74779a5ca33778bbd5e8d08e0fe3691

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/daily',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <MainPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/year',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/average',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/improvement',
    element: <DashboardImprovement />,
  },
  {
    path: '/dashboard/leaderboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/leaderboard',
    element: <Board />,
  }
])

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
