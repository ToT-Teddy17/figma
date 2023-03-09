import { pool } from "../config/mysql-config.js";
export async function getParentMenus() {
  const [rows] = await pool.query(
    `SELECT * FROM menus WHERE parent_id IS NULL`
  );

  return rows;
}
export async function getChildMenus(parentId) {
  const [rows] = await pool.query(`SELECT * FROM menus WHERE parent_id= ?`, [
    parentId,
  ]);

  return rows;
}
