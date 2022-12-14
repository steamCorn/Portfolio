import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

import './index.css';

import Home from './views/home/Home';
import Layout from './views/Layout';
import Projects from './views/projectsPage/Projects';
import About from './views/About';
import Contact from './views/Contact';
import NoPage from './views/NoPage';

import Calculator from './views/projectsPage/calculator/Calculator';
import DrumMachine from './views/projectsPage/drumMachine/DrumMachine';
import Timer from './views/projectsPage/timer/Timer';
import QuoteBlock from './views/projectsPage/quoteMachine/QuotesBlock';
import ProjectsLayout from './views/projectsPage/ProjectsLayout';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NoPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'projects',
//         element: <Projects />,
//         children: [
//           {
//             path: 'calculator',
//             element: <Calculator />,
//           },
//           {
//             path: 'drumMachine',
//             element: <DrumMachine />,
//           },
//           {
//             path: 'timer',
//             element: <Timer />,
//           },
//           {
//             path: 'quoteMachine',
//             element: <QuoteBlock />,
//           },
//         ],
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );

export default function App() {
  return (
    <div>
      <div className="bg-style-wrapper"></div>
      <div className="content-wrapper">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />}>
                <Route path="calculator" element={<Calculator />} />
                <Route path="drumMachine" element={<DrumMachine />} />
                <Route path="timer" element={<Timer />} />
                <Route path="quoteMachine" element={<QuoteBlock />} />
                <Route path=":projectName" element={<ProjectsLayout />} />
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// https://isotropic.co/react-multiple-pages/
// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
// https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

// How write code
// https://flatlogic.com/blog/how-to-create-react-app-in-2021-guide/
