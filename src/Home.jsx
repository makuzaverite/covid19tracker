import React, { Fragment } from "react";
import SearchForm from "./components/SearchForm";
import Dashboard from "./components/Dashboard";
import Notes from "./components/Notes";

function Home({ param, onParamChange, state }) {
  return (
    <Fragment>
      <SearchForm param={param} onParamChange={onParamChange} />
      <Dashboard data={state} location={param} />
      <Notes />
    </Fragment>
  );
}

export default Home;
