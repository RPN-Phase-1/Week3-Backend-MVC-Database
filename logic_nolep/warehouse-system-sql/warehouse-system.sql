-- 1. Membuat database warehouse dan membuat tabel.

CREATE TABLE IF NOT EXISTS Products (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT,
    category TEXT,
    price REAL
);

CREATE TABLE IF NOT EXISTS Inventory (
    inventory_id INTEGER PRIMARY KEY,
    product_id INTEGER,
    quantity INTEGER,
    location TEXT,
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE IF NOT EXISTS Orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    order_date TEXT
);

CREATE TABLE IF NOT EXISTS OrderDetails (
    order_detail_id INTEGER PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- 2. Memasukkan data ke dalam tabel Products.

INSERT INTO Products (product_id, product_name, category, price)
VALUES (1, 'Laptop', 'Elektronik', 999.99);

INSERT INTO Products (product_id, product_name, category, price)
VALUES (2, 'Meja Kursi', 'Perabot', 199.99);

INSERT INTO Products (product_id, product_name, category, price)
VALUES (3, 'Printer', 'Elektronik', 299.99);

INSERT INTO Products (product_id, product_name, category, price)
VALUES (4, 'Rak Buku', 'Perabot', 149.99);

-- 3. Query untuk menampilkan semua product beserta harga.
-- Diurutkan berdasarkan harga dalam urutan menurun.

SELECT product_name, price FROM Products ORDER BY price DESC;

-- 4. Memasukkan data ke dalam tabel Inventory.

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (1, 1, 50, 'Gudang A');

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (2, 2, 30, 'Gudang B');

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (3, 3, 20, 'Gudang A');

INSERT INTO Inventory (inventory_id, product_id, quantity, location)
VALUES (4, 4, 40, 'Gudang B');

-- 5. Query untuk menggabungkan tabel Produk dan Inventory.
-- Menampilkan nama produk, kuantitas, dan lokasi untuk semua produk.

SELECT p.product_name, i.quantity, i.location
FROM Products p
JOIN Inventory i ON p.product_id = i.product_id;

-- 6. Perbarui harga 'Laptop' menjadi 1099,99.

UPDATE Products SET price = 1099.99 WHERE product_name = 'Laptop';

-- 7. Query untuk menghitung nilai total inventaris pada setiap gudang.

SELECT i.location, SUM(p.price * i.quantity) as total_value
FROM Inventory i
JOIN Products p ON p.product_id = i.product_id
GROUP BY i.location;

-- 8. Memasukkan data ke dalam tabel Orders dan OrderDetails.

INSERT INTO Orders (order_id, customer_id, order_date)
VALUES (1, 101, '2024-08-12');

INSERT INTO Orders (order_id, customer_id, order_date)
VALUES (2, 102, '2024-08-13');

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (1, 1, 1, 2);

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (2, 1, 3, 1);

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (3, 2, 2, 1);

INSERT INTO OrderDetails (order_detail_id, order_id, product_id, quantity)
VALUES (4, 2, 4, 2);

-- 9. Query untuk menampilkan jumlah total setiap pesanan, termasuk order_id, order_date, dan total_amount.

SELECT o.order_id, o.order_date, SUM(p.price * od.quantity) as total_amount
FROM Orders o 
JOIN OrderDetails od ON od.order_id = o.order_id
JOIN Products p ON p.product_id = od.product_id
GROUP BY o.order_id, o.order_date;

-- 10. Query untuk mencari produk yang belum pernah dipesan.

SELECT p.product_id, p.product_name
FROM Products p
LEFT JOIN OrderDetails od ON p.product_id = od.product_id
WHERE od.product_id IS NULL;

-- 11. Membuat tampilan yang menunjukkan stok saat ini untuk semua produk, termasuk nama_produk, jumlah, dan lokasi.

CREATE VIEW current_quantity AS
SELECT Products.product_name, Inventory.quantity, Inventory.location
FROM Products
JOIN Inventory ON Products.product_id = Inventory.product_id;

SELECT * FROM current_quantity;
