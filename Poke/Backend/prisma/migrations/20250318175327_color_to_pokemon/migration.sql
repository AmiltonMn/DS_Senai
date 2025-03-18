/*
  Warnings:

  - Added the required column `Color` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemon` ADD COLUMN `Color` VARCHAR(191) NOT NULL;
