/*
  Warnings:

  - The primary key for the `animal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `animalId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animal` DROP PRIMARY KEY,
    ADD COLUMN `animalId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`animalId`);
