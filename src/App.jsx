import React from "react";
import { useFectchData } from "./Hooks";
import "./index.css";
import Header from "./components/Header";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { MapDasboard } from "./components/MapDashboard.jsx";
import Home from "./Home";

function App() {
  const [param, setParam] = useState("");
  const [reqType, setReqType] = useState("all");

  const state = useFectchData(param, reqType);

  const onParamChange = (e) => {
    const query = e.target.value;
    setParam(query);

    if (query.length <= 0) {
      setReqType("all");
    } else {
      setReqType("country");
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home state={state} onParamChange={onParamChange} param={param} />
        </Route>
        <Route path="/map" exact>
          <MapDasboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
