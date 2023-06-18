-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "songId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Songs" (
    "id" TEXT NOT NULL,
    "song" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Artists" (
    "id" TEXT NOT NULL,
    "artistUser" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "songId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Songs_id_key" ON "Songs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Songs_song_key" ON "Songs"("song");

-- CreateIndex
CREATE UNIQUE INDEX "Artists_id_key" ON "Artists"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Artists_artistUser_key" ON "Artists"("artistUser");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artists" ADD CONSTRAINT "Artists_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
