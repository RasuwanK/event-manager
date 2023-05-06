/*
  Warnings:

  - You are about to drop the column `organizors` on the `Event` table. All the data in the column will be lost.
  - Added the required column `bookings` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizer` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "participant_limit" INTEGER NOT NULL,
    "bookings" INTEGER NOT NULL,
    "venue" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "added_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contact_email" TEXT NOT NULL,
    "label" TEXT,
    "organizer" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Event" ("added_date", "contact_email", "date", "id", "label", "name", "participant_limit", "venue") SELECT "added_date", "contact_email", "date", "id", "label", "name", "participant_limit", "venue" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
