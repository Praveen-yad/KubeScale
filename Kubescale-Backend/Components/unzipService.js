import fs from 'fs';
import path from 'path';
import unzipper from 'unzipper';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const unzipFile = async (zipFilePath, res) => {
    const baseName = path.basename(zipFilePath, ".zip");
    
    // const extractDir = path.join("uploads", "temp", `project_${baseName}_${Date.now()}`);
    // fs.mkdirSync(extractDir, { recursive: true });
    
    const absZipFilePath = path.resolve(__dirname, "../", zipFilePath);
    
    const extractDir = path.join(__dirname, "../uploads/temp", `project_${Date.now()}`);
    fs.mkdirSync(extractDir, { recursive: true });
    
    await fs.createReadStream(absZipFilePath)
    .pipe(unzipper.Parse())
    .on("entry", (entry) => {
      const entryPath = entry.path;
      
      if (entryPath.includes("node_modules")|| entryPath.startsWith("__MACOSX") || entryPath.includes(".git") || entryPath.includes("dist") || entryPath.includes("build")) {
        entry.autodrain();
        return;
      }
      
      const outputPath = path.join(extractDir, entryPath);
      
      if (entry.type === "Directory") {
        fs.mkdirSync(outputPath, { recursive: true });
        entry.autodrain();
      } else {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        entry.pipe(fs.createWriteStream(outputPath));
      }
    })
    .on("error", (err) => console.log(err))
    .promise();
    res.write(JSON.stringify({progress: 30, message: "Extracted and Prepared Resources"}) + '\n')
    fs.unlinkSync(absZipFilePath);

  return extractDir;
};
