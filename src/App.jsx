import { BlogPreviewCard } from "./Components/BlogPreviewCard/BlogPreviewCard";
import "./App.css";
import { RecipePage } from "./components/RecipePage/RecipePage";

function App() {
  return (
    <>
      <header></header>
      <main>

    <section>
      <BlogPreviewCard/>
    </section>

    <section>
      <RecipePage/>
    </section>

    <section>
      <ResultsSummaryComponent/>
    </section>

  </main>
    <footer></footer>
    </>
  )
}

export default App;
