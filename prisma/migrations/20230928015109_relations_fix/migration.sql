/*
  Warnings:

  - You are about to drop the column `subjectId` on the `Teacher` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teacherId]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teacherId` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_subjectId_fkey";

-- DropIndex
DROP INDEX "Teacher_subjectId_key";

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "subjectId";

-- CreateIndex
CREATE UNIQUE INDEX "Subject_teacherId_key" ON "Subject"("teacherId");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
