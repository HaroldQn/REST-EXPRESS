import { pool } from "../config/db.js";

export const getEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM employees");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployee = async (req, res) => {
  const id_param = req.params.id;
  try {
    const [result] = await pool.query("SELECT * FROM employees WHERE id = ?", [
      id_param,
    ]);
    result.length === 0 ? res.sendStatus(404) : res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [{ insertId: id }] = await pool.query(
      "INSERT INTO employees (name, salary) values (?, ?) ",
      [name, salary]
    );
    res.send({ id_employee: id, name_employee: name, salary_employee: salary });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateEmployee = async (req, res) => {
  const id_param = req.params.id;
  const { name, salary } = req.body;
  try {
    console.log(id_param, name, salary);
    const result = await pool.query(
      "UPDATE employees SET name = ?, salary = ? WHERE id = ? ",
      [name, salary, id_param]
    );
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployee = async (req, res) => {
  const id_param = req.params.id;
  try {
    const result = await pool.query("DELETE FROM employees WHERE id = ?", [
      id_param,
    ]);
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
