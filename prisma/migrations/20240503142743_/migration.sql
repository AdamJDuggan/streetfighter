/*
  Warnings:

  - The primary key for the `fighters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `fighters` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "fighters" DROP CONSTRAINT "fighters_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "fighters_id_key" ON "fighters"("id");
