let addBtn = document.querySelector(".add-btn");
let nameInput = document.querySelector(".add-name");
let priceInput = document.querySelector(".add-price");
let products = JSON.parse(localStorage.getItem("products"));
let productsList = document.querySelector(".products-list");
let count = document.querySelector(".count");
let price = document.querySelector(".price");

addBtn.addEventListener("click", () => {
  if (nameInput.value != "" && priceInput.value != "") {
    let obj = {
      name: nameInput.value,
      price: priceInput.value,
    };
    products.push(obj);
    localStorage.setItem("products", JSON.stringify(products));
    nameInput.value = "";
    priceInput.value = "";
    getAllProducts();
  }
});

function getAllProducts() {
  if (products.length == 0) {
    productsList.innerHTML = "Məhsul yoxdur";
  } else {
    productsList.innerHTML = "";
    products.forEach((el) => {
      return (productsList.innerHTML += `
          <div class="product">
          <p class="product-name">${el.name} (${el.price}AZN)</p>
          <button onClick="deleteProduct(${el.price})" class="remove-btn">Sil</button>
        </div>
          `);
    });
  }
  let sumPrice = 0;
  for (let i of products) {
    sumPrice = sumPrice + +i.price;
  }
  count.innerHTML = `Ümumi məhsul sayı: ${products.length}`;
  price.innerHTML = `Məhsulların toplam dəyəri: ${sumPrice} AZN`;
}
getAllProducts();

function deleteProduct(price) {
  products = products.filter((el) => el.price != price);
  localStorage.setItem("products", JSON.stringify(products));
  getAllProducts();
}
