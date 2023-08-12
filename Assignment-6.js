
        const product = {
            name: "apple 2020 macbook air laptop",
            price: 82000,
            color: "gray",
            hardDisk: "256gb",
          };
          
          console.log("Below are the product details");
          for (const key in product) {
            console.log(`${key}: ${product[key]}`);
          }