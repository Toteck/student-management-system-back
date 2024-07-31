import Express from "express";
import StudentController from "./controllers/StudentController";
import cors from "cors";

const app = Express();
app.use(Express.json());
const PORT = 3000;
app.use(cors());

app.get("/", () => {
  return "Olá Prisma";
});
app.post("/estudantes", StudentController.createStudent);

app.get("/estudantes/:id", StudentController.listStudentById);

app.get("/estudantes", StudentController.listStudents);

app.put("/estudantes/:id", StudentController.updateStudent);

app.delete("/estudantes/:id", StudentController.deleteStudent);

app.listen(PORT, () => {
  console.log(`Servidor rodando! ${PORT}`);
});
