const getDataFromApi = () => {
  return fetch('https://github.com/lauraportillo/api-express-comics/api/comics')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((comic) => {
        return {
          id: comic.id,
          name: comic.name,
          isbn: comic.isbn,
          author: comic.author,
          image: comic.image,
          description: comic.description,
        };
      });
    });
};

export default getDataFromApi;
