/*
  Warnings:

  - You are about to drop the column `date_birth` on the `alunos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "alunos" DROP COLUMN "date_birth",
ADD COLUMN     "dateBirth" DATE;
