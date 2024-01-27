import { useEffect, useState } from "react";

export default function Games() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let key = "2a3e3c54685146fe8d40f600aef2df29";
  useEffect(() => {
    fetch("https://api.rawg.io/api/genres?key=" + key, {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => console.log(response))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(products);

  return (
    <div>
      <p>Games</p>
    </div>
  );
}
