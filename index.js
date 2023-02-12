// Constructor function 
function Product(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
  
  // Array to store product objects
  var products = [];
  
  // product objects to the array
  function addProduct(name, description, price, image) {
    var product = new Product(name, description, price, image);
    products.push(product);
  }
  
  addProduct("Product 1", "Description for product 1", "$00", "image1.jpg");
  addProduct("Product 2", "Description for product 2", "$00", "image2.jpg");
  addProduct("Product 3", "Description for product 3", "$00", "image3.jpg");
  
  // hidden page
  document.getElementById("show-products").addEventListener("click", function() {
    document.getElementById("product-list").style.display = "block";
  });
  
