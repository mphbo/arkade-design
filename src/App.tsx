import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Landing from "./routes/Landing";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedPage = ({ children }: any) => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: (
      <AnimatedPage>
        <Landing />
      </AnimatedPage>
    ),
  },
]);

function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
