-- CreateTable
CREATE TABLE "alunos" (
    "id" VARCHAR(36) NOT NULL,
    "name" CHAR(60) NOT NULL,
    "Cpf" CHAR(11) NOT NULL,
    "date_birth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modulos" (
    "id" VARCHAR(36) NOT NULL,
    "id_alunos" VARCHAR(36) NOT NULL,
    "nota1" DOUBLE PRECISION NOT NULL,
    "nota2" DOUBLE PRECISION NOT NULL,
    "nota3" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "modulos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_Cpf_key" ON "alunos"("Cpf");

-- AddForeignKey
ALTER TABLE "modulos" ADD CONSTRAINT "modulos_id_alunos_fkey" FOREIGN KEY ("id_alunos") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
