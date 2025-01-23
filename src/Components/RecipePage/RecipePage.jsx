import React from "react";
import styles from "./RecipePage.module.css";
import recipeImage from "./image-omelette.jpeg";

export function RecipePage() {
  return (
    <div className={styles["recipe-page-wrapper"]}>
      <div className={styles["recipe-page"]}>
        <img src={recipeImage} alt="Omelette" />

        <h1>Simple Omelette Recipe</h1>

        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className={styles["prep-time"]}>
          <h3>Preparation time</h3>
          <ul>
            <li><strong>Total:</strong> Approximately 10 minutes</li>
            <li><strong>Preparation:</strong> 5 minutes</li>
            <li><strong>Cooking:</strong> 5 minutes</li>
          </ul>
        </div>

        <h2>Ingredients</h2>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>

        <h2>Instructions</h2>
        <ol>
          <li><strong>Beat the eggs:</strong> Beat with a pinch of salt and pepper.</li>
          <li><strong>Heat the pan:</strong> Use medium heat with butter or oil.</li>
          <li><strong>Cook the omelette:</strong> Tilt the pan to coat evenly.</li>
          <li><strong>Add fillings:</strong> Add optional fillings when set.</li>
          <li><strong>Fold and serve:</strong> Fold one edge and cook briefly.</li>
          <li><strong>Enjoy:</strong> Serve hot with seasoning.</li>
        </ol>

        <h2>Nutrition</h2>
        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td className={styles.measurements}>277kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td className={styles.measurements}>0g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td className={styles.measurements}>20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td className={styles.measurements}>22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
