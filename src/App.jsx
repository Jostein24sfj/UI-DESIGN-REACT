import React from "react";
import { BlogPreviewCard } from "./Components/BlogPreviewCard/BlogPreviewCard";
import "./App.css";
import { RecipePage } from "./components/RecipePage/RecipePage";
import { ResultsSummaryComponent } from "./components/ResultsSummaryComponent/ResultsSummaryComponent";
import GitHubProfileCard from "./components/GitHubProfileCard/GitHubProfileCard"; // Import GitHubProfileCard
import WeatherWidget from "./components/WeatherWidget/WeatherWidget"; // Import WeatherWidget
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* Header Section with Navigation Links */}
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog-preview">Blog Preview</Link>{" "}
              </li>
              <li>
                <Link to="/recipe">Recipe</Link>
              </li>
              <li>
                <Link to="/results">Results</Link>
              </li>
              <li>
                <Link to="/github">GitHub Profile</Link>
              </li>
              <li>
                <Link to="/weather">Weather</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes for Different Pages */}
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<div>Welcome to the homepage!</div>} /> {/* Empty homepage content */}
          {/* Recipe page route */}
          <Route path="/recipe" element={<RecipePage />} />
          {/* Results page route */}
          <Route path="/results" element={<ResultsSummaryComponent />} />
          {/* Blog Preview page route */}
          <Route path="/blog-preview" element={<BlogPreviewCard />} /> {/* Blog Preview route */}
          {/* GitHub Profile route */}
          <Route path="/github" element={<GitHubProfileCard username="octocat" />} /> {/* GitHub Profile route */}
          {/* Weather route */}
          <Route path="/weather" element={<WeatherWidget />} /> {/* Weather route */}
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
