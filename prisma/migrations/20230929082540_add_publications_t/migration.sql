-- CreateTable
CREATE TABLE "Pubs" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacherId" INTEGER,

    CONSTRAINT "Pubs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pubs" ADD CONSTRAINT "Pubs_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
