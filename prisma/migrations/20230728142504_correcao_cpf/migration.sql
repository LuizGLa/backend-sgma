/*
  Warnings:

  - The primary key for the `alunos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Cpf` on the `alunos` table. All the data in the column will be lost.
  - The `id` column on the `alunos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `modulos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `modulos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[cpf]` on the table `alunos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id_alunos` on the `modulos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "modulos" DROP CONSTRAINT "modulos_id_alunos_fkey";

-- DropIndex
DROP INDEX "alunos_Cpf_key";

-- AlterTable
ALTER TABLE "alunos" DROP CONSTRAINT "alunos_pkey",
DROP COLUMN "Cpf",
ADD COLUMN     "cpf" CHAR(11) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "alunos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "modulos" DROP CONSTRAINT "modulos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "id_alunos",
ADD COLUMN     "id_alunos" INTEGER NOT NULL,
ADD CONSTRAINT "modulos_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_cpf_key" ON "alunos"("cpf");

-- AddForeignKey
ALTER TABLE "modulos" ADD CONSTRAINT "modulos_id_alunos_fkey" FOREIGN KEY ("id_alunos") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
