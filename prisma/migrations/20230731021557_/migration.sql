/*
  Warnings:

  - The primary key for the `modulos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `modulos` table. All the data in the column will be lost.
  - Added the required column `name` to the `modulos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "modulos" DROP CONSTRAINT "modulos_pkey",
DROP COLUMN "id",
ADD COLUMN     "name" CHAR(60) NOT NULL,
ADD CONSTRAINT "modulos_pkey" PRIMARY KEY ("id_alunos", "name");
