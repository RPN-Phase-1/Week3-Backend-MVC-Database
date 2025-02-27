//jalankan mongodb di terminal: mongosh where_house < where-house-nosql.js

// //create db
// // use where_house

// // create collection
db.createCollection('Products');
db.createCollection('Inventory');
db.createCollection('Orders');

db.Products.insertMany([
  {
    _id: 1,
    product_name: "laptop",
    category: "Elektronik",
    price: 999.99
  },
  {
    _id: 2,
    product_name: "Meja Kursi",
    category: "Perabot",
    price: 199.99
  },
  {
    _id: 3,
    product_name: "Printer",
    category: "Elektronik",
    price: 299.99
  },
  {
    _id: 4,
    product_name: "Rak Buku",
    category: "Perabot",
    price: 149.99
  }
]);

//get data
db.Products.find({}, {_id: 0, product_name: 1, price: 1}).sort({price: 1});
/**
 * { product_name: 'Rak Buku', price: 149.99 },
  { product_name: 'Meja Kursi', price: 199.99 },
  { product_name: 'Printer', price: 299.99 },
  { product_name: 'laptop', price: 999.99 }
 */

  db.Inventory.insertMany([
  {
    _id: 1,
    product_id: 1,
    quantity: 50,
    location: "Gudang A"
  },
  {
    _id: 2,
    product_id: 2,
    quantity: 30,
    location: "Gudang B"
  },
  {
    _id: 3,
    product_id: 3,
    quantity: 20,
    location: "Gudang A"
  },
  {
    _id: 4,
    product_id: 4,
    quantity: 40,
    location: "Gudang B"
  }
]);

db.Products.aggregate([
  {
    $lookup: { //menggabungkan collection
      from: "Inventory",
      localField: "_id",
      foreignField: "product_id",
      as: "inventory_group",
    }
  },
  {
    $unwind: "$inventory_group" //menggabungkan field menjadi satu kesatuan, berdasarkan kecocokan
  },
  {
    $project: { //hanya menampilakn spesifikasi di dalamnya
      _id: 0,
      product_name: 1,
      quantity: "$inventory_group.quantity",
      location: "$inventory_group.location"
    }
  }
])

db.Products.updateOne({ product_name: "laptop" }, { $set: {price: 1099.99}});

db.Inventory.aggregate([
  {
    $lookup: {
      from: "Products",
      localField: "product_id",
      foreignField: "_id",
      as: "products_group",
    },
  },
  {
    $unwind: "$products_group",
  },
  {
    $group: {
      _id: "$location",
      total_value: {
        $sum: { $multiply: ["$products_group.price", "$quantity"] },
      },
    },
  },
]);


db.Orders.insertMany([
  {
    _id: 1,
    customer_id: 101,
    order_date: ISODate("2024-08-12"),
    order_details: [
      { product_id: 1, quantity: 2 },
      { product_id: 3, quantity: 1 }
    ]
  },
  {
    _id: 2,
    customer_id: 102,
    order_date: ISODate("2024-08-13"),
    order_details: [
      { product_id: 2, quantity: 1 },
      { product_id: 4, quantity: 2 }
    ]
  }
]);



db.Orders.aggregate([
  {
    $unwind: "$order_details", // Memecah array order_details menjadi dokumen individual
  },
  {
    $lookup: {
      from: "Products",          // Nama koleksi produk
      localField: "order_details.product_id",  // Field di order_details yang cocok dengan produk
      foreignField: "_id",       // Field di Products untuk join
      as: "product_group",
    }
  },
  {
    $unwind: "$product_group" // Memecah array hasil lookup menjadi dokumen individual
  },
  {
    $group: {
      _id: "$_id",            // Mengelompokkan berdasarkan order ID
      order_date: { $first: "$order_date" },  // Mengambil tanggal order
      total_amount: {
        $sum: { $multiply: ["$order_details.quantity", "$product_group.price"] } 
      }
    }
  },
  {
    $project: {
      _id: 1,
      order_date: 1,
      total_amount: 1
    }
  }
]);
