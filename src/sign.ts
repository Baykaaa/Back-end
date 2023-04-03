import express from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";

const pool = new Pool({
  user: "rtd",
  host: "54.169.69.87",
  database: "pe8db",
  password: "Tiny722$",
  port: 3306,
});

const app = express();

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const result = await pool.query(
    "SELECT password FROM users WHERE username = $1",
    [username]
  );
  if (result.rowCount === 0) {
    res.status(401).json({ message: "Incorrect username or password" });
    return;
  }
  const dbHashedPassword = result.rows[0].password;

  const match = await bcrypt.compare(password, dbHashedPassword);
  if (match) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Incorrect username or password" });
  }
});
