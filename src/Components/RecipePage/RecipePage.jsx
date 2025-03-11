import styles from "./RecipePage.module.css";
import recipeImage from "./image-omelette.jpeg";

export function RecipePage() {
  return (
    <div className={styles.recipePageWrapper}>
      <div className={styles.recipePage}>
        <img className={styles.recipeImage} src={recipeImage} alt="Omelette" />

        <h1 className={styles.recipeTitle}>Simple Omelette Recipe</h1>

        <p className={styles.recipeDescription}>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className={styles.prepTime}>
          <h3 className={styles.prepTimeTitle}>Preparation time</h3>
          <ul className={styles.prepTimeList}>
            <li>
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation:</strong> 5 minutes
            </li>
            <li>
              <strong>Cooking:</strong> 5 minutes
            </li>
          </ul>
        </div>

        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>

        <h2 className={styles.instructionsTitle}>Instructions</h2>
        <ol className={styles.instructionsList}>
          <li>
            <strong>Beat the eggs:</strong> Beat with a pinch of salt and
            pepper.
          </li>
          <li>
            <strong>Heat the pan:</strong> Use medium heat with butter or oil.
          </li>
          <li>
            <strong>Cook the omelette:</strong> Tilt the pan to coat evenly.
          </li>
          <li>
            <strong>Add fillings:</strong> Add optional fillings when set.
          </li>
          <li>
            <strong>Fold and serve:</strong> Fold one edge and cook briefly.
          </li>
          <li>
            <strong>Enjoy:</strong> Serve hot with seasoning.
          </li>
        </ol>

        <h2 className={styles.nutritionTitle}>Nutrition</h2>
        <table className={styles.nutritionTable}>
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
