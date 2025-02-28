/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `createadAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `IdUser` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_Email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `Id`,
    DROP COLUMN `createadAt`,
    DROP COLUMN `name`,
    ADD COLUMN `IdUser` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `Name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`IdUser`);

-- CreateTable
CREATE TABLE `Task` (
    `IdCliente` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Completed` BOOLEAN NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`IdCliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
