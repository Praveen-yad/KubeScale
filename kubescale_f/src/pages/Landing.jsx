import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { VscGithub } from "react-icons/vsc";
import { SiDocker, SiKubernetes } from "react-icons/si";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const FeatureCard = ({ icon: Icon, title, description, points }) => (
        <div className="cursor-pointer bg-transparent p-8 rounded-xl transition duration-500 ease-in-out hover:shadow-neon-glow hover:scale-[1.02] border border-neutral-200 backdrop-blur-[3px] hover:border-neutral-500 flex flex-col h-full">
            <Icon className="h-10 w-10 text-neutral-600 mb-4" />
            <h3 className="text-2xl font-semibold text-neutral-600 mb-3">{title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{description}</p>
            <ul className="space-y-2 text-sm">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start text-neutral-400">
                        <IoMdCheckmark className="w-4 h-4 text-neutral-700 mr-2 mt-0.5 flex-shrink-0" strokeWidth={3} />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );

    const customStyles = `
        .hover\\:shadow-neon-glow:hover {
          box-shadow: 0 0 15px rgba(163, 163, 163, 0.4);
        }
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 15px 0 rgba(200, 200, 200, 0.6), 
                        0 0 5px rgba(200, 200, 200, 0.4); 
          }
          50% { 
            box-shadow: 0 0 25px 0 rgba(220, 220, 220, 0.9), 
                        0 0 10px rgba(220, 220, 220, 0.5); 
          }
        }
        .btn-primary-glow {
            animation: glow 3s infinite ease-in-out;
        }
    
      `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            <div className='flex flex-col  items-centers'>
                {/* Content */}
                <section className='mt-[6rem] flex flex-col justify-center items-center cursor-pointer select-none'>
                    <a className='text-xs text-neutral-600 flex space-x-3 border border-neutral-500 px-3 py-1 rounded-full hover:px-5 transition-all cursor-pointer duration-300 ' href='#features'>
                        <div>Features⚡️</div>
                        <div className='flex items-center'>Read More<GoArrowUpRight className='text-sm' /></div>
                    </a>

                    <div className='flex flex-col items-center text-[5rem] capitalize font-medium -space-y-8 text-neutral-800'>
                        <div className=''>Your <span className='text-neutral-500'>mern</span> App,</div>
                        <div className='bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-500 text-transparent bg-clip-text'>Our Cloud Pipeline</div>
                    </div>
                    <div className='w-[53%] text-center text-[17px] text-neutral-700'>Containerize, orchestrate, and launch your MERN applications in minutes powered by Docker, Kubernetes, and seamless CI/CD automation.</div>
                    <div className='flex space-x-4 mt-8'>
                        <div className='flex justify-center px-5 py-2 rounded-xl items-center bg-neutral-800 text-neutral-100 cursor-pointer'>Login using GitHub<GoArrowUpRight className='text-sm' /></div>
                        <div onClick={() => navigate('/deploy')} className='flex justify-center px-5 py-2 rounded-xl items-center bg-neutral-200 text-neutral-800 cursor-pointer'>Deploy Your App</div>
                    </div>
                </section>


                {/* Code */}
                <section className="mt-[6rem] code-snippet-bg p-4 sm:p-8 rounded-xl max-w-5xl mx-auto animate-fade-in-up hero-code z-10 border">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <span className="text-sm font-mono text-gray-500">kubescale/manifest.yml</span>
                    </div>
                    <pre className="text-left font-mono text-sm sm:text-base whitespace-pre-wrap pt-4">
                        <code className="language-yaml">
                            <span className="text-neutral-300">service</span>: my-mern-app
                            <span className="text-neutral-300">stack</span>: mern
                            <span className="text-neutral-400">ai_mode</span>: enabled <span className="text-neutral-500"># AI is analyzing your code structure</span>
                            <span className="text-neutral-300">deployment</span>:
                            <span className="text-neutral-400">repo_path</span>: github.com/user/mern-project
                            <span className="text-neutral-400">container_config</span>: auto <span className="text-neutral-500"># AI generated optimized Dockerfile</span>
                            <span className="text-neutral-300">scaling</span>:
                            <span className="text-neutral-400">engine</span>: kubernetes
                            <span className="text-neutral-400">hpa_min_replicas</span>: 2
                            <span className="text-neutral-400">hpa_max_replicas</span>: 10
                            <span className="text-neutral-400">metrics_target</span>: cpu:75% <span className="text-neutral-500"># Auto-scales based on CPU usage</span>

                            <span className="text-neutral-500">SUCCESS</span>: Kubernetes manifest generated and applied.
                            <span className="text-neutral-500">SUCCESS</span>: Application scaled and running at <span className="text-neutral-400">https://my-mern-app.kubescale.dev</span>
                        </code>
                    </pre>
                </section>

                {/* Features */}
                <section id="features" className="py-[6rem] relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-neutral-800 mb-4">Code Smarter, Scale Faster</h2>
                        <p className="text-xl text-center text-neutral-500 mb-16">
                            Intelligent features built on Kubernetes for the demands of the MERN stack.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
                            <FeatureCard
                                icon={SiDocker}
                                title="AI Auto-Containerization"
                                description="Stop wasting time on configuration. KubeScale analyzes your project and generates optimized Dockerfiles and Kubernetes specs instantly."
                                points={[
                                    "Automatic MERN Stack detection",
                                    "Optimized image sizes for faster deployment",
                                    "Instant generation of K8s manifests",
                                ]}
                            />
                            <FeatureCard
                                icon={SiKubernetes}
                                title="Kubernetes-Native Scaling"
                                description="Achieve true elasticity without managing infrastructure. We use Horizontal Pod Autoscaling (HPA) to guarantee peak performance."
                                points={[
                                    "Automatic resource management",
                                    "Scale-to-zero for cost savings",
                                    "Managed MongoDB instances (optional)",
                                ]}
                            />
                            <FeatureCard
                                icon={VscGithub}
                                title="Predictive CI/CD Automation"
                                description="From commit to production, our pipeline is flawless. AI monitors your deployments to predict failures and ensure reliable rollouts."
                                points={[
                                    "Zero-config CI/CD pipeline",
                                    "Automatic dependency updates (optional)",
                                    "Instant rollback support",
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative z-10">
                    <div className="group flex flex-col items-center max-w-4xl mx-auto bg-transparent bg-opacity-90 backdrop-blur-[3px] px-4 sm:px-6 lg:px-8 text-center border border-neutral-300 p-10 rounded-xl">
                        <h2 className="text-4xl font-bold text-neutral-700 mb-4">Start Elastic Deployment Today.</h2>
                        <p className="text-md text-gray-400 mb-8 mx-40">
                            Connect your GitHub repository to <span className='text-neutral-500 group-hover:text-neutral-700 transi duration-200'>*KubeScale*</span> and let AI handle the containerization and scaling.
                        </p>
                        <div onClick={() => navigate('/deploy')} className='flex justify-center px-5 py-2 rounded-lg items-center bg-neutral-600 text-neutral-200 cursor-pointer btn-primary-glow hover:text-neutral-50 transition-colors duration-200'>Deploy Your Application</div>
                        <p className="text-xs text-gray-500 mt-4">Takes less than 5 minutes to connect.</p>
                    </div>
                </section>

                <footer className="border-t border-neutral-300 py-6 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <div className="mb-4 md:mb-0">
                            &copy; 2025 KubeScale, Inc. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-neutral-600 transition duration-200">Terms</a>
                            <a href="#" className="hover:text-neutral-600 transition duration-200">Privacy</a>
                            <a href="#" className="hover:text-neutral-600 transition duration-200">Support</a>
                            <a href="#" className="hover:text-neutral-600 transition duration-200">GitHub</a>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Landing
