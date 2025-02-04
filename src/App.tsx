// App.tsx
import './App.css';
import Header from './components/Header';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ContactPage from './components/Contact';
import CorporateCourses from './components/CorporateCourses';
import PrivateCourses from './components/PrivateCourses';
import AboutPage from './components/About';
import FreeTrialPage from './components/FreeTrialPage';
import PricesPage from './components/Prices';

import Footer from './components/Footer';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Root = () => {
  return (
    <Main>
      <Header />
      <Navigation />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Main>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/corporate-courses', element: <CorporateCourses /> },
      { path: '/private-courses', element: <PrivateCourses /> },
      { path: '/contact', element: <ContactPage /> }, // New contact page route
      { path: '/about', element: <AboutPage /> },
      { path: '/free-trial', element: <FreeTrialPage /> },
      { path: '/prices', element: <PricesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
