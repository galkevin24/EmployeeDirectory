import express from 'express';
const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees");
});

app.route("/employees/random").get((req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.send(employees[randomIndex]);
  });
  
  app.route("/employees/:id").get((req, res) => {
    const { id } = req.params;

    const employee = employees.find((e) => e.id === +id);
  
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
  
    res.send(employee);
  });