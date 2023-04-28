import React from "react" ;

const Recipe = ( {  recipe  } ) => {
  return (
    <div>
      <h2>{ recipe.name } ({recipe.dietaryRestrictions})</h2>
      <img  src = { recipe.image } alt = { recipe.name } />
      <p> { recipe.description }</p>
      
    </div>
  );
};

export default Recipe;