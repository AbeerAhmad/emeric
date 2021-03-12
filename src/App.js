import "./App.css";
import Header from "./Component/header";
import Home from "./Component/home";
import Footer from "./Component/footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contactus from "./Component/Contactus";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  const [count, setcount] = useState(1);
  const [user, setuser] = useState({ name: "akhtar" });

  const gbtvfu = (a) => {
    console.log(a);
  };
  useEffect(() => {
    console.log("refresh");
  }, [count]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={"App"}>
          <Header
            anotherprop={"jsahdjahsdjha"}
            setuser={setuser}
            setcount={setcount}
            count={count}
          />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Switch>
              <Route
                path="/contactus/:id"
                component={(props) => {
                  return <Contactus name={"abeer"} {...props} />;
                }}
              />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <Footer footerfun={gbtvfu} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
