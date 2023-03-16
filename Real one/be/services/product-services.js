import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products`);

  await Promise.all(
    rows.map(async (row) => {
      const description = await getDescription(row.id);
      row.description = description.map((d) => d.description);
      const reviews = await getReviews(row.id);
      row.reviews = reviews;
      const images = await getImages(row.id);
      row.imgUrl = images;
      const colors = await getColors(row.id);
      row.colors = colors.map((c) => c.color);
      const size = await getSizes(row.id);
      row.size = size.map((s) => s.size);
    })
  );
  return rows[0];
}

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products where title like '%${keyword}%'`
  );
  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescription(row.id);
      row.description = descriptions.map((d) => d.description);

      const reviews = await getReviews(row.id);
      row.review = reviews.map((r) => r.review);

      const images = await getImages(row.id);
      row.imgUrl = images;

      const color = await getColors(row.id);
      row.color = color.map((c) => c.color);

      const size = await getSizes(row.id);
      row.size = size.map((s) => s.size);
    })
  );

  return rows[0];
}

export async function getDescription(productId) {
  const [rows] = await pool.query(
    `select * from product_description where product_id = ?`,
    [productId]
  );
  return rows;
}
export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select * from product_reviews where product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getImages(productId) {
  const [rows] = await pool.query(
    `select original,thumbnail from product_images where product_id = ?`,
    [productId]
  );
  return rows;
}
export async function getSizes(productId) {
  const [rows] = await pool.query(
    `select s.size from product_size ps left join size s on ps.size_id = s.id where product_id  like ?`,
    [productId]
  );
  return rows;
}

export async function getColors(productId) {
  const [rows] = await pool.query(
    `select color from product_colors pc left join color c on c.id = pc.color_id where product_id = ?`,
    [productId]
  );
  return rows;
}
