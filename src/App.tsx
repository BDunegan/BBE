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
  background-color: #f4f7fc; /* Soft background for modern look */
`;

const Content = styled.main`
  flex: 1;
  padding: 1rem
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 70vw;
  margin: 0 auto;
  border-radius: 12px;
`;

const Root = () => {
  return (
    <Main>
      <Header />
      <Navigation />
      <Content>
        {/* Each section has its own id to match the navbar's href anchor */}
        <div id="home">
          <HomePage />
        </div>

        <div id="about">
          <AboutPage />
        </div>

        <div id="corporate-courses">
          <CorporateCourses />
        </div>

        <div id="private-courses">
          <PrivateCourses />
        </div>

        <div id="free-trial">
          <FreeTrialPage />
        </div>

        <div id="prices">
          <PricesPage />
        </div>

        <div id="contact">
          <ContactPage />
        </div>
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
      { path: '/contact', element: <ContactPage /> },
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
