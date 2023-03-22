import Home from "./components/Home";
import Nav from './components/Nav'
import Toprated from './components/TopRated'
import Upcoming from "./components/Upcoming";
import Details from "./components/IndividualsMovieDetails";
import Error from './components/Error'
import {  Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="movies/:id" element={<Details />} />
        <Route path="upcoming/:id" element={<Details />} />
        <Route path="toprated/:id" element={<Details />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
