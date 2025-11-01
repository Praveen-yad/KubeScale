import { useState } from "react";
import GetUrl from "../components/GetUrl";
import UploadZip from "../components/UploadZip";
import { MdFolder } from "react-icons/md";
import { GrCloudUpload } from "react-icons/gr";
import { GoFileZip } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineDocker } from "react-icons/ai";
import { LuContainer } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";


const Deploy = () => {
    const [deploying, setDeploying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [checkpoint, setCheckpoint] = useState([
        { percent: 0, label: "Initializing Deployment Environment", icon: MdFolder },
        { percent: 15, label: "Uploading Application Files", icon: GrCloudUpload },
        { percent: 30, label: "Extracting and Preparing Files", icon: GoFileZip },
        { percent: 40, label: "Generating Custom Dockerfile", icon: IoCreateOutline },
        { percent: 60, label: "Building Docker Image", icon: AiOutlineDocker },
        { percent: 90, label: "Launching Docker Container", icon: LuContainer },
        { percent: 100, label: "Finalizing Deployment", icon: MdOutlineRocketLaunch, url: "" },
    ]);
    return (
        <>
            <section className="min-h-[90vh] flex justify-center relative z-10">
                {!deploying ?
                     <UploadZip setCheckPoint={setCheckpoint} setProgress={setProgress} setDeploying={setDeploying} />
                    :
                    <GetUrl checkpoint={checkpoint} progress={progress} />
                }
            </section>
        </>
    );
};

export default Deploy
