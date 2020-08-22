export const ProductAPI = (searchInput) =>
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchInput}`).then((data) =>
    data.json(),
  );

export const getById = (id) =>
  fetch(`https://api.mercadolibre.com/items/${id}`).then((data) => data.json());
