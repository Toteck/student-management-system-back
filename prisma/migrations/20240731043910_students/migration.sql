-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "course" TEXT NOT NULL,
    "register" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
