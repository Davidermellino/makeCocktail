export default function CocktailList({cocktails}) {
  {
    return (
        cocktails.map((cocktail) => (
          <div key={cocktail.name} className="card my-4 w-50 mx-auto">
            <div className="card-body">
              <h1 className="text-center card-title mb-5">
                {cocktail.name.toUpperCase()}
              </h1>
              <p className="card-text">
                <h4>Ingredienti: </h4>
                <ul>
                  {cocktail.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </p>
              <p className="card-text">
                <h5>Istruzioni</h5>
                {cocktail.instructions}
              </p>
            </div>
          </div>
        ))
    )
  }
}
