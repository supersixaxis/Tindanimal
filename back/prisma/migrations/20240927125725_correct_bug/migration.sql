-- DropIndex
DROP INDEX `Animal_ownerId_fkey` ON `animal`;

-- AlterTable
ALTER TABLE `animal` MODIFY `dateOfBirth` VARCHAR(191) NOT NULL;
