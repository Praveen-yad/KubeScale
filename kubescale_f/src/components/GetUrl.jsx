import React, { useState, useMemo } from 'react';
import { FaCheck } from "react-icons/fa6";

const DeploymentProgress = ({progress, CHECKPOINTS}) => {
    const safeProgress = progress;

    const currentCheckpointIndex = useMemo(() => {
        let index = 0;
        for (let i = 0; i < CHECKPOINTS?.length; i++) {
            if (safeProgress >= CHECKPOINTS[i].percent) {
                index = i;
            } else {
                break;
            }
        }
        return index;
    }, [safeProgress]);

    const isComplete = safeProgress >= 100;
    const finalMessage = CHECKPOINTS?.[CHECKPOINTS?.length - 1];

    return (
        <div className=" w-[70%] md:w-[40%] mx-auto px-7 pt-7 pb-5 rounded-2xl border border-neutral-400 backdrop-blur-[2px] relative z-10">
            <h2 className="text-3xl text-neutral-700 font-semibold  mb-2 text-center">
                {!isComplete ? "Deployment Status" : finalMessage.label}
                
            </h2>
            <p onClick={() => isComplete && window.open(finalMessage.url, "_blank")
            } className="text-gray-400 tracking-tight text-sm mb-8 text-center">
                {!isComplete ? "KubeScale is automating your containerization and deployment." : <span className='text-green-600 cursor-pointer hover:underline'>{finalMessage.url}egrtgrtrgtg</span>}
            </p>

            <div className="space-y-">
                {CHECKPOINTS?.map((checkpoint, index) => {
                    const isPassed = safeProgress >= checkpoint.percent;
                    const isActive = index === currentCheckpointIndex && !isComplete;
                    const Icon = checkpoint.icon; // Icon is now a component reference

                    return (
                        <div key={index} className="flex items-start scale-[0.95]">
                            <div className="flex flex-col items-center mr-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border-2 
                                    ${isPassed 
                                        ? 'bg-neutral-50 border-neutral-700' 
                                        : 'bg-neutral-400 border-neutral-400'
                                    }`
                                }>
                                    {isPassed ? (
                                        <FaCheck className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <Icon className={`w-4 h-4 transition-colors ${isPassed || isActive ? 'text-white' : 'text-neutral-300'}`} />
                                    )}
                                </div>
                                {index < CHECKPOINTS.length - 1 && (
                                    <div className={`w-0.5 -z-10 h-full transform -translate-y-1 
                                        ${isPassed ? 'bg-neutral-700' : 'bg-neutral-400'}`
                                    } style={{ height: '40px' }} />
                                )}
                            </div>

                            <div className="flex-grow pt-1 pb-4">
                                <p className={`font-semibold transition-colors duration-500 
                                    ${isPassed ? 'text-neutral-700' : 'text-neutral-500'}`
                                }>
                                    {checkpoint.label}
                                </p>
                                <p className={`text-xs mt-1 transition-opacity duration-500 
                                    ${isActive ? 'text-green-600' : 'text-gray-600'}`
                                }>
                                    {isActive ? `Progress: ${safeProgress}%` : `Required: ${checkpoint.percent}%`}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* {isComplete && (
                <div className="mt-8 p-4 border border-neutral-600 bg-neutral-200 rounded-lg text-center">
                    <p className="text-lg font-bold text-neutral-700">
                        {finalMessage.label}
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                        Your app is deployed at: <div onClick={() => window.open("finalMessage.url", "_blank")} className="text-green-300 hover:underline">{finalMessage.url}</div>
                    </p>
                </div>
            )} */}
        </div>
    );
};

const GetUrl = ({checkpoint, progress}) => {
    return (
        <div className="p-8 min-h-screen w-full">
            <DeploymentProgress progress={progress} CHECKPOINTS={checkpoint} />
        </div>
    );
}

export default GetUrl;
