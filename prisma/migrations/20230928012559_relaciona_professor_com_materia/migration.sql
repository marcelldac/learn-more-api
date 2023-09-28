/*
  Warnings:

  - You are about to drop the `Subjects` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[subjectId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subjectId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subjects" DROP CONSTRAINT "Subjects_subjectId_fkey";

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Subjects";

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_subjectId_key" ON "Teacher"("subjectId");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
