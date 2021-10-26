const getDataFromApi = () => {
  return (
    // fetch('https://github.com/lauraportillo/api-express-comics/api/comic')
    fetch('http://localhost:8080/api/comic')
      .then((response) => response.json())
      .then((data) => {
        return data.map((comic) => {
          return {
            id: comic.id,
            name: comic.name,
            isbn: comic.isbn,
            author: comic.author,
            image: comic.image,
            description: comic.description,
          };
        });
      })
  );
};

export default getDataFromApi;
