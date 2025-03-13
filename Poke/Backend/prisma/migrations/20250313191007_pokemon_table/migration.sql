-- CreateTable
CREATE TABLE `Pokemon` (
    `Id` INTEGER NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Capture_rate` INTEGER NOT NULL,
    `Base_Happiness` INTEGER NOT NULL,
    `IsBaby` BOOLEAN NOT NULL,
    `IsLegendary` BOOLEAN NOT NULL,
    `IsMythic` BOOLEAN NOT NULL,
    `Image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
