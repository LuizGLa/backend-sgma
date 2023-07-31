/*
  Warnings:

  - You are about to alter the column `nota1` on the `modulos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `nota2` on the `modulos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `nota3` on the `modulos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "modulos" ALTER COLUMN "nota1" SET DATA TYPE INTEGER,
ALTER COLUMN "nota2" SET DATA TYPE INTEGER,
ALTER COLUMN "nota3" SET DATA TYPE INTEGER;
