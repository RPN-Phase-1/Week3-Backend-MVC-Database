-- Active: 1726112075349@@127.0.0.1@3306@where_house
-- DROP DATABASE where_house

-- CREATE DATABASE where_house

CREATE TABLE IF NOT EXISTS Products(
  product_id INTEGER PRIMARY KEY, 
  product_name VARCHAR(100) NOT NULL, 
  category VARCHAR(100) NOT NULL, 
  price DECIMAL(10, 2)
);

CREATE TABLE IF NOT EXISTS Inventory (
  inventory_id INTEGER PRIMARY KEY, 
  product_id INTEGER REFERENCES Products(product_id), 
  quantity INTEGER NOT NULL, 
  location TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Orders (
  order_id INTEGER PRIMARY KEY, 
  customer_id INTEGER REFERENCES Inventory(inventory_id), 
  order_date DATETIME 
);

CREATE TABLE IF NOT EXISTS OrderDetails (
  order_detail_id INTEGER PRIMARY KEY, 
  order_id INTEGER REFERENCES Ordes(order_id), 
  product_id INTEGER REFERENCES Products(product_id), 
  quantity INTEGER NOT NULL
);

INSERT INTO Products(product_id, product_name, category, price) VALUES
(1, 'Laptop', 'Elektronik', 999.99),
(2, 'Meja Kursi', 'Perabot', 199.99),
(3, 'Printer', 'Elektronik', 299.99),
(4, 'Rak Buku', 'Perabot', 149.99);

SELECT product_name, price FROM products ORDER BY price DESC


INSERT INTO inventory(inventory_id, product_id, quantity, location) VALUES
(1, 1, 50, 'Gudang A'),
(2, 2, 30, 'Gudang B'),
(3, 3, 20, 'Gudang A'),
(4, 4, 40, 'Gudang B');


SELECT Products.product_name, Inventory.quantity, Inventory.location 
FROM Inventory
JOIN Products ON Inventory.product_id = Products.product_id


UPDATE Products SET price = 1099.99 WHERE product_name = 'Laptop'


SELECT Inventory.location, SUM(Products.price * Inventory.quantity) AS total_value
FROM Inventory
JOIN Products ON Inventory.product_id = Products.product_id 
GROUP BY Inventory.location


INSERT INTO Orders(order_id, customer_id, order_date) VALUES
(1, 101, '2024-08-12'), 
(2, 102, '2024-08-13');


INSERT INTO Orderdetails(order_detail_id, order_id, product_id, quantity) VALUES
(1, 1, 1, 2), 
(2, 1, 3, 1), 
(3, 2, 2, 1),
(4, 2, 4, 2);


SELECT Orders.order_id, Orders.order_date, SUM(Products.price * OrderDetails.quantity) AS total_amount
FROM Orders
JOIN OrderDetails ON orderDetails.order_id = orders.order_id
JOIN Products ON OrderDetails.product_id = products.product_id
GROUP BY orders.order_id


SELECT products.product_id, products.product_name
FROM products
JOIN orderdetails ON orderdetails.product_id = products.product_id
WHERE orderdetails.product_id IS NULL


SELECT products.product_name, inventory.quantity, inventory.location
FROM inventory
JOIN products ON inventory.product_id = products.product_id