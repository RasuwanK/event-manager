-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "participant_limit" INTEGER NOT NULL,
    "venue" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "added_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contact_email" TEXT NOT NULL,
    "label" TEXT,
    "organizors" TEXT NOT NULL
);
