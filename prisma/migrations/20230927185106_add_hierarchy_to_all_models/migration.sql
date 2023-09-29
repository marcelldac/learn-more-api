/*
  Warnings:

  - Added the required column `hierarchy` to the `Coordinator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hierarchy` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hierarchy` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coordinator" ADD COLUMN     "hierarchy" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "hierarchy" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hierarchy" INTEGER NOT NULL;
