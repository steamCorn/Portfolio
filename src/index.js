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
import Home from './views/Home';
import Layout from './views/Layout';
import Projects from './views/projectsPage/Projects';
import Contact from './views/Contact';
import NoPage from './views/NoPage';
// projects :
import Calculator from './views/projectsPage/calculator/Calculator';
import DrumMachine from './views/projectsPage/drumMachine/DrumMachine';
import Timer from './views/projectsPage/timer/Timer';
import QuoteBlock from './views/projectsPage/quoteMachine/QuotesBlock';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NoPage />,
//     children: [
//       {
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
//         ],
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}>
            <Route path="calculator" element={<Calculator />} />
            <Route path="drumMachine" element={<DrumMachine />} />
            <Route path="timer" element={<Timer />} />
          </Route>
          <Route path="calculator" element={<Calculator />} />
          <Route path="drumMachine" element={<DrumMachine />} />
          <Route path="timer" element={<Timer />} />
          <Route path="quoteMachine" element={<QuoteBlock />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
