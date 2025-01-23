import "./blogPreviewCard.css"
import avatarImage from "./image-avatar.webp"
import illustrationImage from "./illustration-article.svg"

export function BlogPreviewCard(){
    return (
        
        <div class= "card">
            <header>
            <img class="topImg" src={illustrationImage} alt="" />
            <h1>Learning</h1>
            <p>Produsert 23.01.2025</p>
            </header>

            <section>
            <h2>HTML & CSS foundation</h2>
            <p>These languages are the backbone of every website,
               defining structure, content and presentation.</p>
            </section>
            
            <footer>
            <img src={avatarImage} alt="" />
             <h3>Greg Hopper</h3>
            </footer>
        </div>
            
    )
}