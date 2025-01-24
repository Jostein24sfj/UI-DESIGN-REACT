import { BlogPreviewCard } from "./Components/BlogPreviewCard/BlogPreviewCard";
import "./App.css";
import { RecipePage } from "./Components/RecipePage/RecipePage";
import { NFTCard } from "./Components/NFTCard/NFTCard";
import { SocialCard } from "./Components/SocialCard/social";

function App() {
  return (
    <>
      <header></header>
      <main>
        <section>
          <BlogPreviewCard />
        </section>

        <section>
          <NFTCard />
        </section>

        <section>
          <SocialCard />
        </section>

        <section>
          <RecipePage />
        </section>

        <section>{/* <ResultsSummaryComponent/> */}</section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
