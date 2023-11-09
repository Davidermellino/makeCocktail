import { useEffect, useState } from "react";

export default function useCocktailsAPI(search) {
  const [cocktails, setCoctails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCocktail() {
      setLoading(true);
        try {
          const response = await fetch(
            `https://api.api-ninjas.com/v1/cocktail?name=${search}`,
            {
              headers: {
                "X-Api-Key": "TFprCGXrCXrJFiG5gCz1Q3l3RmLrMRCRSSznk3xO",
              },
            }
          );
          if (response.ok) {
            const json = await response.json();
            setCoctails(json);
          } else {
            setError("Errore nella richiesta dei cocktails");
          }
        } catch (error) {
          setError(`Errore nella richiesta - ${error.message} `);
        }
        setLoading(false);
    }

    if (search != "") {
        getCocktail();
    }
  }, [search]);

  return {
    error,
    loading,
    cocktails,
  };
}
