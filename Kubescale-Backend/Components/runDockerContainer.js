import { exec } from "child_process";
import util from "util";
import getPort from "get-port";

const execPromise = util.promisify(exec);

export const runDockerContainer = async (imageName, res) => {
  const port = await getPort({ port: 3000 });
  console.log(`Starting container for ${imageName} on port ${port}`);
  
  try {
    const { stdout } = await execPromise(
      `docker run -d --rm -p ${port}:80 ${imageName}`
    );
    const containerId = stdout.trim();
    const url = `http://localhost:${port}`;
    console.log(`Container running at ${url}`);
    res.write(JSON.stringify({progress: 90, message: "Deployed Docker Container"}) + '\n');
    return { containerId, url };
  } catch (err) {
    console.error(" Failed to run container:", err.stderr);
    throw new Error("Docker run failed");
  }
};
