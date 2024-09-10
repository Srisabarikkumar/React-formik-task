import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import CreateBookRecord from "./pages/CreateBookRecord";
import CreateAuthorRecord from "./pages/CreateAuthorRecord";
import EditBook from "./pages/EditBook";
import EditAuthor from "./pages/EditAuthor";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/book-records" element={<CreateBookRecord />} />
          <Route path="/author-records" element={<CreateAuthorRecord />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/edit-author/:id" element={<EditAuthor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
