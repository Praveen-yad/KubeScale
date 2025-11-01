import { exec } from 'child_process';
import util from "util";
const execPromice = util.promisify(exec);

export const buildDockerImage = async ( projectRoot, imageName, res ) => {
    console.log(`Building Docker image: ${imageName}`);
    
    try{
        await execPromice(`cd ${projectRoot} && docker build -t ${imageName} .`);
        console.log(`Build Successful : ${imageName}`);
        res.write(JSON.stringify({progress: 60, message:"Built Docker Image"}) + '\n')
    }catch(err){
        console.error("❌ Build Failed:", err.stderr || err.message);
        throw new Error("Docker Build Failed");
    }
};