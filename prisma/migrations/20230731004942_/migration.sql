-- AlterTable
ALTER TABLE "modulos" ALTER COLUMN "nota1" DROP NOT NULL,
ALTER COLUMN "nota1" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "nota2" DROP NOT NULL,
ALTER COLUMN "nota2" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "nota3" DROP NOT NULL,
ALTER COLUMN "nota3" SET DATA TYPE DOUBLE PRECISION;
