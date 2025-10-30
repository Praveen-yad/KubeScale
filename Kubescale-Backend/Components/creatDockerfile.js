import fs from "fs"
import path from "path"

export const createDockerFile = (rootFolder, res) => {
    const dockerfilePath = path.join(rootFolder,"Dockerfile");

    if(fs.existsSync(dockerfilePath)){
        console.log("DockerFile alreadt exists in this folder")
        return;
    }

    const content = `
# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
    `;

    fs.writeFileSync(dockerfilePath, content.trim());
    console.log("DockerFile created");
    res.write(JSON.stringify({progress: 40, message: "DockerFile Created"}) + '\n')
}