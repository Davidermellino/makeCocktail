import {  useState } from "react";
import Form from "./assets/Form";
import CocktailList from "./assets/CocktailList"
import useCocktailsAPI from "./assets/useCocktailsAPI";

function App() {
  const [cocktail, setCocktail] = useState("");
  const [search, setSearch] = useState("");
  const {error , loading, cocktails} = useCocktailsAPI(search);


  const getValue = (event) => {
    setCocktail(event.currentTarget.value);
  };
  const ricerca = (event) => {
    event.preventDefault();
    setSearch(cocktail);
  };

  return (
    <div>
      {error && <article style={{
          backgroundColor: 'red',
          color: 'white'
        }}>{error}</article>}
      <h1 className="text-center my-3">SCEGLI UN COCKTAIL</h1>
        <Form getValue={getValue} ricerca={ricerca} cocktail={cocktail}></Form>
      {loading && "Caricamento..."}
      <CocktailList cocktails={cocktails}></CocktailList>
    </div>
  );
}

export default App;
