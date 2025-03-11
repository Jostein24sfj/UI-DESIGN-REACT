import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogPreviewCard } from "./components/BlogPreviewCard/BlogPreviewCard";
import { RecipePage } from "./components/RecipePage/RecipePage";
import { ResultsSummaryComponent } from "./components/ResultsSummaryComponent/ResultsSummaryComponent";
import GitHubProfileCard from "./components/GitHubProfileCard/GitHubProfileCard";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import Header from "./components/Header/Header";
import './App.css';

export function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={null} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/results" element={<ResultsSummaryComponent />} />
        <Route path="/blog-preview" element={<BlogPreviewCard />} />
        <Route path="/github" element={<GitHubProfileCard username="octocat" />} />
        <Route path="/weather" element={<WeatherWidget />} />
      </Routes>

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

      <footer>
        <p>© 2025</p>
      </footer>
    </Router>
  );
}

export default App;
