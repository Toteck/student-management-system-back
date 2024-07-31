import { Request, Response } from "express";
import StudentService from "../service/StudentService";


export default {
  async createStudent(request: Request, response: Response) {
    try {
      const student = await StudentService.createStudent(request.body);
      return response.status(200).json({
        error: false,
        message: "Sucesso: Estudante cadastrado com sucesso!",
        student,
      });
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: error.message,
      });
    }
  },

  async listStudentById(request: Request, response: Response) {
    try {
      const student = await StudentService.listStudentById(Number(request.params.id));
      return response.status(200).json({
        error: false,
        student,
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: error.message,
      });
    }
  },

  async listStudents(request: Request, response: Response) {
    try {
      const students = await StudentService.listStudents();
      return response.status(200).json({
        error: false,
        students,
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: error.message,
      });
    }
  },

  async updateStudent(request: Request, response: Response) {
    try {
      const updatedStudent = await StudentService.updateStudent(
        Number(request.params.id),
        request.body
      );
      return response.status(200).json({
        error: false,
        message: "Sucesso: Estudante atualizado!",
        student: updatedStudent,
      });
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: error.message,
      });
    }
  },

  async deleteStudent(request: Request, response: Response) {
    try {
      const deletedStudent = await StudentService.deleteStudent(Number(request.params.id));
      return response.status(200).json({
        error: false,
        message: "Estudante deletado com sucesso!",
        student: deletedStudent,
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: error.message,
      });
    }
  },
};
