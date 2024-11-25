import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Landing from "./routes/Landing";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

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
  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault(); // Prevent default scrolling behavior
      const scrollSpeed = 0.1; // Adjust scroll speed (0.5 = half speed)

      window.scrollBy({
        top: e.deltaY * scrollSpeed, // Multiply the scroll delta by the speed factor
        behavior: "auto", // Instant movement
      });
    };

    // Attach the scroll event to the window
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
