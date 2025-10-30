import express from 'express';
import multer from 'multer';
import path from 'path';
import { unzipFile } from '../Components/unzipService.js';
import { createDockerFile } from '../Components/creatDockerfile.js';
import { buildDockerImage } from '../Components/buildDockerImage.js';
import { runDockerContainer } from '../Components/runDockerContainer.js';
import { exposeApp } from '../Components/exposeApp.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: "uploads/temp/zips",
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
})

const upload = multer({
    storage,
    limits : {fileSize : 50 * 1024 * 1024},
})

router.post("/deploy", upload.single("projectZip"), async(req,res) => {
    try{
        res.write(JSON.stringify({progress: 15, message:"File Uploded"}) + "\n");
        const extractedFolder = await unzipFile(req.file.path, res);
        const rootFolder = extractedFolder+`/${path.basename(req.file.originalname, ".zip")}`;
        createDockerFile(rootFolder, res);

        const imageName = `${path.basename(req.file.originalname, ".zip").toLowerCase()}_${Date.now()}`;
        await buildDockerImage(rootFolder, imageName, res);

        const { url } = await runDockerContainer(imageName, res);
        const port = url.split(":")[2];
        const publicUrl = await exposeApp(port);
        console.log(publicUrl);
        res.write(JSON.stringify({progress: 100, message: publicUrl.url}) + '\n');
    }catch(err){
        console.log(err);
        res.status(400).write(JSON.stringify({progress : 0, message: "Error Occored, Try Again"}))
    }
    res.end();
})

export default router;