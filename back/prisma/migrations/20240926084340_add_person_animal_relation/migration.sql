-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Person`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
