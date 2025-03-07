/*
  Warnings:

  - Added the required column `country` to the `fighters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fighters" ADD COLUMN     "country" TEXT NOT NULL;
