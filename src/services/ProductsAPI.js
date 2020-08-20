const ProductAPI = (searchInput) => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchInput}`).then((data) =>
    data.json(),
  );
};
