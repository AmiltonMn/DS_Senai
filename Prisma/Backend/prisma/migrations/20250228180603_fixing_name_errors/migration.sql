/*
  Warnings:

  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IdCliente` on the `task` table. All the data in the column will be lost.
  - Added the required column `IdTask` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP PRIMARY KEY,
    DROP COLUMN `IdCliente`,
    ADD COLUMN `IdTask` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`IdTask`);
