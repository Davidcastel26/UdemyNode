/*
  Warnings:

  - You are about to alter the column `chefId` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.
  - You are about to alter the column `id` on the `Chef` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Menu] DROP CONSTRAINT [Menu_chefId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Menu] ALTER COLUMN [chefId] INT NOT NULL;

-- RedefineTables
BEGIN TRANSACTION;
ALTER TABLE [dbo].[Chef] DROP CONSTRAINT [Chef_id_key];
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'Chef'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_Chef] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [isActive] BIT NOT NULL CONSTRAINT [Chef_isActive_df] DEFAULT 1,
    [creatAt] DATETIME2 NOT NULL CONSTRAINT [Chef_creatAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Chef_id_key] UNIQUE NONCLUSTERED ([id])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_Chef] ON;
IF EXISTS(SELECT * FROM [dbo].[Chef])
    EXEC('INSERT INTO [dbo].[_prisma_new_Chef] ([creatAt],[id],[isActive],[name]) SELECT [creatAt],[id],[isActive],[name] FROM [dbo].[Chef] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_Chef] OFF;
DROP TABLE [dbo].[Chef];
EXEC SP_RENAME N'dbo._prisma_new_Chef', N'Chef';
COMMIT;

-- AddForeignKey
ALTER TABLE [dbo].[Menu] ADD CONSTRAINT [Menu_chefId_fkey] FOREIGN KEY ([chefId]) REFERENCES [dbo].[Chef]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
