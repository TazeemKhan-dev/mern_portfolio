import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/apiSlice";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.api);
  useEffect(() => {
    dispatch(fetchData()); // Dispatch API call on component mount
  }, [dispatch]);
  return (
    <div className="app">
      <Navbar />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          <Header />
          <About />
          <Work />
          <Skills />
          {/* <Testimonial /> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
