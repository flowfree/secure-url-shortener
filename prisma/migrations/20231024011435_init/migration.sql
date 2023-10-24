-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "original" TEXT NOT NULL,
    "shortened" TEXT NOT NULL,
    "totalHits" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_original_key" ON "Url"("original");

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortened_key" ON "Url"("shortened");
