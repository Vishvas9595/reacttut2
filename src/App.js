import React from "react";
  import { useState } from "react";
  import "./App.css";
  import Navbar from "./components/Navbar";
  // import About from "./components/About";
  import TextForm from "./components/TextForm";
  import Alert from "./components/Alert";
  // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  function App() {
    const [mode, setmode] = useState("light");
    const [alert, setAlert] = useState(null);
    //whrther dark mode is enabled or notnpm audit

    const showAlert = (message, type) => {
      setAlert({
        message: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    };

    const toggleMode = () => {
      if (mode === "light") {
        setmode("dark");
        document.body.style.backgroundColor = "#2F4F4F";
        showAlert("Dark mode has been enabled", "success");

        // setInterval(() => {
        //   "Textutilitd is good";
        // }, 2000);

        // setInterval(() => {
        //   "Install now Textutilitd is good";
        // }, 1500);
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    };
    return (
      <>
        {/* <Router> */}
          <Navbar
            titel="Textutil"
            aboutext="About us"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            {/* <Switch> */}
              {/* <Route exact path="/about">
                <About aboutext="about us" />
              </Route> */}
              {/* <Route exact path="/"> */}
                <TextForm
                  showAlert={showAlert}
                  heading="Type your feed back "
                  mode={mode}
                />
              {/* </Route>
            </Switch> */}
          </div>
        {/* </Router> */}
      </>
    );
  }

  export default App;