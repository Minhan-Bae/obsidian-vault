module.exports = async (params) => {
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
      new Notice("No active file");
      return;
    }
  
    const targetFolder = "Overview/5_Archive/53_Calendar";
    const targetPath = `${targetFolder}/${activeFile.name}`;
  
    try {
      await app.fileManager.renameFile(activeFile, targetPath);
      new Notice(`Moved to ${targetFolder}`);
    } catch (error) {
      new Notice(`Failed to move file: ${error}`);
    }
  }
  