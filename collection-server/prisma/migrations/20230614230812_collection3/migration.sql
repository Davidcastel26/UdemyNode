/*
  Warnings:

  - You are about to drop the column `rol` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rolesId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rol",
ALTER COLUMN "rolesId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Roles_role_key" ON "Roles"("role");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("role") ON DELETE RESTRICT ON UPDATE CASCADE;
