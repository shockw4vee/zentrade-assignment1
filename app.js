document.addEventListener('DOMContentLoaded', function () {
  fetch('assignment.json')
      .then(response => response.json())
      .then(data => displayProductList(data.products));
});

function displayProductList(products) {
  const productListContainer = document.getElementById('productList');
  

  const productList = Object.keys(products).map(key => ({ id: key, ...products[key] }));

  productList.sort((a, b) => b.popularity - a.popularity);

  productList.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
          <h3>${product.title}</h3>
          <p>Subcategory: ${product.subcategory}</p>
          <p>Price: $${product.price}</p>
          <p>Popularity: ${product.popularity}</p>
          <hr>
      `;
      productListContainer.appendChild(productDiv);
  });
}
