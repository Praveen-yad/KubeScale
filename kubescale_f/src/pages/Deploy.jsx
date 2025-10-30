import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdFolder } from "react-icons/md";
import { GrCloudUpload } from "react-icons/gr";


const Deploy = () => {
    const [fileName, setFileName] = useState('');
    const [isDragOver, setIsDragOver] = useState(false);
    const [upFile, setUpFile ] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setUpFile(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.name.endsWith('.zip')) {
            setFileName(file.name);
            setUpFile(file);
        } else {
            console.error("Please upload a .zip file.");
        }
    };


    const HandleDockerization = async() => {
        if(upFile){
            const formData = new FormData();
            formData.append("projectZip", upFile);

            const response = await fetch("http://localhost:3000/api/file/deploy", {
                method: "POST",
                body: formData,
                headers: {
                  Authorization: "Bearer xyz", // optional header
                },
              });
            
              const reader = response.body.getReader();
              const decoder = new TextDecoder("utf-8");
            
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
            
                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.trim().split("\n");
            
                for (const line of lines) {
                  try {
                    const data = JSON.parse(line);
                    console.log(`Progress: ${data.progress}% | Message: ${data.message}`);
                  } catch (err) {
                    console.warn("Non-JSON chunk:", line);
                  }
                }
              }
        }
    }

    return (
        <>
            <section className="min-h-[90vh] flex justify-center relative z-10">
                <div className="max-w-3xl h-fit mt-12 w-full p-10 rounded-2xl border border-neutral-400 backdrop-blur-[3px]">
                    <h2 className="text-4xl font-semibold text-neutral-700 mb-3 text-center">Deploy Your MERN App</h2>
                    <p className="text-md text-neutral-400 mb-10 text-center">
                        AI needs your code. Upload a <span className='text-neutral-500'>*.zip*</span> file or connect your repository.
                    </p>

                    {/* File Upload Area */}
                    <div
                        className={`border-2 border-dashed rounded-xl p-12 text-center transition duration-300 cursor-pointer ${isDragOver
                                ? 'border-neutral-500 bg-neutral-100'
                                : 'border-neutral-400 hover:border-neutral-500'
                            }`}
                        onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                        onDragLeave={() => setIsDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('file-upload-input').click()}
                    >
                        <GrCloudUpload className="h-12 w-12 text-neutral-500 mx-auto mb-4" />
                        <p className="text-lg font-medium text-neutral-400 mb-2">
                            {fileName ? `File Ready: ${fileName}` : "Drag and drop your project ZIP here"}
                        </p>
                        <p className="text-sm text-neutral-400">
                            Maximum file size 50MB (.zip only)
                        </p>
                        <input
                            type="file"
                            id="file-upload-input"
                            className="hidden"
                            accept=".zip"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-neutral-600"></div>
                    </div>

                    {/* Git Connection Option */}
                    <div className="text-center">
                        <button onClick={HandleDockerization} className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium tracking-tight transition duration-300 rounded-lg  bg-neutral-200 text-neutral-700 hover:scale-[1.02]">
                            <MdFolder className="w-5 h-5 mr-2" /> Containerize You Application
                        </button>
                        {/* Button to go back to the landing page */}
                        <button
                            onClick={() => navigate('/')}
                            className="mt-4 text-neutral-500 hover:text-neutral-700 transition duration-200 text-sm"
                        >
                            Go back to KubeScale overview
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Deploy
