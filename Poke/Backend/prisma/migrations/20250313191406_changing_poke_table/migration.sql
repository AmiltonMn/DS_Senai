/*
  Warnings:

  - Added the required column `Captured` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemon` ADD COLUMN `Captured` BOOLEAN NOT NULL;
