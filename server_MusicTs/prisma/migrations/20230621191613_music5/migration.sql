/*
  Warnings:

  - Added the required column `password` to the `Artists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artists" ADD COLUMN     "password" TEXT NOT NULL;
