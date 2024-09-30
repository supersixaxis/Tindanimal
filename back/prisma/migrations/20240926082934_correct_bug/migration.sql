/*
  Warnings:

  - The primary key for the `animal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ownerId` on the `animal` table. All the data in the column will be lost.
  - Added the required column `personId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `animal` DROP FOREIGN KEY `Animal_ownerId_fkey`;

-- AlterTable
ALTER TABLE `animal` DROP PRIMARY KEY,
    DROP COLUMN `ownerId`,
    ADD COLUMN `personId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`personId`, `name`);

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Person`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
