/*
  Warnings:

  - Made the column `storeName` on table `Seller` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Seller" ALTER COLUMN "storeName" SET NOT NULL;
