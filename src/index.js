import express from "express";

import employeesRoutes from "./routes/employees.routes.js";
import pingRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use("/api", employeesRoutes);
app.use(pingRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Enpoint not found" });
});

app.listen(3000);
console.log("Server on port", 3000);
