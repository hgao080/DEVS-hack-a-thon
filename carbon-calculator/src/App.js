import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import MainPage from "./Pages/MainPage";
import Dashboard from './Pages/Dashboard';
import Board from './Pages/Board';
import About from "./Pages/About"
import DashboardImprovement from "./Pages/DashboardImprovement"
import ContactUs from "./Pages/ContactUs";

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
    element: <ContactUs />,
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
