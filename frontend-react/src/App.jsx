import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/apiSlice";
import { useEffect } from "react";
import Loader from "./components/loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData()); // Dispatch API call on component mount
  }, [dispatch]);

  return (
    <div className="app">
      {status === "loading" && <Loader />} {/* Use the Loader component */}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
