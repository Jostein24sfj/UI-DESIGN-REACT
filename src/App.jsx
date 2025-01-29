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
    <Router>
      {/* Header Section with Navigation Links */}
      <header className="header">
        <h1>UI-DESIGN-REACT</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog-preview" className="nav-link">
                Blog Preview
              </Link>
            </li>
            <li>
              <Link to="/recipe" className="nav-link">
                Recipe
              </Link>
            </li>
            <li>
              <Link to="/results" className="nav-link">
                Results
              </Link>
            </li>
            <li>
              <Link to="/github" className="nav-link">
                GitHub Profile
              </Link>
            </li>
            <li>
              <Link to="/weather" className="nav-link">
                Weather
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Routes for Different Pages */}
      <Routes>
        {/* Home route: renders nothing or an empty div */}
        <Route path="/" element={<div className="empty-home"></div>} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/results" element={<ResultsSummaryComponent />} />
        <Route path="/blog-preview" element={<BlogPreviewCard />} />
        <Route
          path="/github"
          element={<GitHubProfileCard username="octocat" />}
        />
        <Route path="/weather" element={<WeatherWidget />} />
      </Routes>

      {/* Main Section with Content */}
      <main className="main-content">
        <section className="main-section">
          <BlogPreviewCard />
        </section>
        <section className="main-section">
          <RecipePage />
        </section>
        <section className="main-section">
          <ResultsSummaryComponent />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Company</p>
      </footer>
    </Router>
  );
}

export default App;
