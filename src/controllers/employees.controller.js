import { pool } from "../config/db.js";

export const getEmployees = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM employees");
  res.json(result);
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [{ insertId: id }] = await pool.query(
    "INSERT INTO employees (name, salary) values (?, ?) ",
    [name, salary]
  );
  res.send({ id_employee: id, name_employee: name, salary_employee: salary });
};

export const updateEmployee = async (req, res) => {
  const id_param = req.params.id;
  const {name, salary} = req.body;
  console.log(id_param, name, salary);
  const result = await pool.query(
    "UPDATE employees SET name = ?, salary = ? WHERE id = ? ",
    [name, salary, id_param]
  );
  res.send(result);
};

export const deleteEmployee = async (req, res) => {
  const id_param = req.params.id;
  const result = await pool.query("DELETE FROM employees WHERE id = ?", [
    id_param,
  ]);
  res.send(result);
};
