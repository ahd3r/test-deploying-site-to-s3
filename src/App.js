import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from './About';
import Home from './Home';
import Joke from './Joke';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">{'Home <Link>'}</Link>
          </li>
          <li>
            <a href="/">{'Home <a>'}</a>
          </li>
          <li>
            <Link to="/about">{'About <Link>'}</Link>
          </li>
          <li>
            <a href="/about">{'About <a>'}</a>
          </li>
          <li>
            <Link to="/joke">{'Joke <Link>'}</Link>
          </li>
          <li>
            <a href="/joke">{'Joke <a>'}</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/joke" element={<Joke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
