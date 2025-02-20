import express from 'express';


import employeesRoutes  from './routes/employees.routes.js';
import pingRoutes  from './routes/index.routes.js';


const app = express();

app.use(express.json());

app.use(employeesRoutes);
app.use(pingRoutes);

app.listen(3000)
console.log('Server on port', 3000);