// App.tsx
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CorporateCourses from './components/CorporateCourses';
import PrivateCourses from './components/PrivateCourses';

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
      { path: '/', element: <p>Welcome to the Home Page!</p> },
      { path: '/corporate-courses', element: <CorporateCourses /> },
      { path: '/private-courses', element: <PrivateCourses /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
