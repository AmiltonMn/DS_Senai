-- AlterTable
ALTER TABLE `task` MODIFY `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `UpdateAt` DATETIME(3) NULL;
