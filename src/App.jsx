import { BlogPreviewCard } from "./Components/BlogPreviewCard/BlogPreviewCard";
import "./App.css";
import { RecipePage } from "./components/RecipePage/RecipePage";
import { ResultsSummaryComponent } from "./components/ResultsSummaryComponent/ResultsSummaryComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* Header Section with Navigation Links */}
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipe">Recipe</Link></li>
              <li><Link to="/results">Results</Link></li>
            </ul>
          </nav>
        </header>

        {/* Routes for Different Pages */}
        <Routes>
          <Route path="/" element={<BlogPreviewCard />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/results" element={<ResultsSummaryComponent />} />
        </Routes>

        {/* Main Section with Content */}
        <main>
          <section>
            <BlogPreviewCard />
          </section>

          <section>
            <RecipePage />
          </section>

          <section>
            <ResultsSummaryComponent />
          </section>
        </main>

        {/* Footer */}
        <footer>
          <p>© 2025 Your Company</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
