/*
  Warnings:

  - You are about to alter the column `priority` on the `task` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `task` MODIFY `priority` ENUM('HIGH', 'MEDIUM', 'LOW') NOT NULL DEFAULT 'LOW';
