
// const product=[
//     {name: "laptop", price: 50000},
//     {name: "i-pad", price: 100000},
//     {name: "laptop bag", price: 5000},
//     {name: "Mobile", price: 20000},
//     {name: "Airbuds", price: 4000},
// ];
// function check({name,price}){
//     console.log(Math.min(product.price));
// }
// check(product);


const product = [
    { name: "laptop", price: 50000 },
    { name: "i-pad", price: 100000 },
    { name: "laptop bag", price: 5000 },
    { name: "Mobile", price: 20000 },
    { name: "Airbuds", price: 4000 },
  ];
  
  function check(products) {
    let maxPrice = 0;
  
    for (const item of products) {
      if (item.price > maxPrice) {
        maxPrice = item.price;
        productname=item.name;
      }
    }
  
    console.log("The product with maximum ammount is "+productname+ " which is priced at Rs.", maxPrice);

    let minPrice = 10000000;
  
    for (const item of products) {
      if (item.price < minPrice) {
        minPrice = item.price;
        productname=item.name;
      }
    }
  
    console.log("The product with minmum ammount is "+productname+ " which is priced at Rs.", minPrice);
  }
  
  check(product);