import React from 'react'

//Icons Frond-end
import shadcnui from '../assets/icons/139895814.png';
import tailwind from '../assets/icons/tailwind.png';
import react from '../assets/icons/react.png';
import javascript from '../assets/icons/javascript.png';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';

//Icons  DevOps
import amazon from '../assets/icons/amazon.png';
import azure from '../assets/icons/azure.png';
import googlec from '../assets/icons/google-cloud.png';
import docker from '../assets/icons/docker.png';
import kubernetes from '../assets/icons/kubernetes.png';
import jenkins from '../assets/icons/jenkins.png';

//Icons  Artificial Intelligence
import chatgpt from '../assets/icons/chatgpt.png';
import chatbot from '../assets/icons/chatbot.png';
import langchain from '../assets/icons/langchain.png';

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="">
                {/*Tabs Panel Container*/}
                <ul
                    className="flex flex-col justify-center max-w-xl 
              mx-auto mb-6 border-b md:space-x-10 md:flex-row p-5"
                    role="tablist"
                >
                    <li className="">
                        <a
                            className={
                                "flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600 py-5 border-b-4 btn-xs btn-danger duration-500 " +
                                (openTab === 1
                                    ? "text-white bg-" + color + "-600"
                                    : "text-" + color + "-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            フロントエンド
                        </a>
                    </li>
                    <li className="">
                        <a
                            className={
                                "flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600 py-5 border-b-4 btn-xs btn-danger duration-500 " +
                                (openTab === 2
                                    ? "text-white bg-" + color + "-600"
                                    : "text-" + color + "-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            クラウド/DevOps
                        </a>
                    </li>
                    <li className="">
                        <a
                            className={
                                "flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600 py-5 border-b-4 btn-xs btn-danger duration-500 " +
                                (openTab === 3
                                    ? "text-white bg-" + color + "-600"
                                    : "text-" + color + "-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            人工知能
                        </a>
                    </li>
                </ul>
                {/* Tab Panel*/}
                <section id='panels' className='container mx-auto'>
                    {/* Panel 1 */}
                    <div className='flex flex-col md:flex-row md:space-x-7'>
                        {/* Panel Content */}
                        <div className={openTab === 1 ? "block mx-auto" : "hidden"} id="link1">
                            <div className='relative flex flex-col items-center max-w-5xl mx-auto 
                          space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
                                {/* Cards 1  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={html} alt="1" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> HTML </h5>
                                </div>
                                {/* Cards 2  */}
                                <div className='flex flex-col w-full py-6 space-y-4 '>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={css} alt="2" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> CSS </h5>
                                </div>
                                {/* Cards 3  */}
                                <div className='flex flex-col w-full py-6 space-y-4 '>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={javascript} alt="3" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> Javascript </h5>
                                </div>
                                {/* Cards 4  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={react} alt="4" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> React </h5>
                                </div>
                                {/* Cards 5  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={tailwind} alt="6" className='h-12' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-2 text-xl font-sans text-center'> Tailwind </h5>
                                </div>
                                {/* Cards 6  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={shadcnui} alt="6" className='h-12' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-2 text-xl font-sans text-center'> Shadcn/UI </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Panel 2 */}
                    <div className='flex flex-col md:flex-row md:space-x-7'>
                        {/* Panel Content */}
                        <div className={openTab === 2 ? "block mx-auto" : "hidden"} id="link2">
                            <div className='relative flex flex-col items-center max-w-5xl mx-auto 
                          space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
                                {/* Cards 1  */}
                                <div className='flex flex-col w-full py-0 space-y-0'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={amazon} alt="1" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> アマゾン ウェブ サービス </h5>
                                </div>
                                {/* Cards 2  */}
                                <div className='flex flex-col w-full py-6 space-y-4 '>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={azure} alt="2" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> マイクロソフトアジュール </h5>
                                </div>
                                {/* Cards 3  */}
                                <div className='flex flex-col w-full py-6 space-y-4 '>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={googlec} alt="3" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> グーグルクラウド </h5>
                                </div>
                                {/* Cards 4  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={docker} alt="4" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> Docker </h5>
                                </div>
                                {/* Cards 5  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={kubernetes} alt="6" className='h-16' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> Kubernetes </h5>
                                </div>
                                {/* Cards 6  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={jenkins} alt="6" className='h-16' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> Jenkins </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Panel 3 */}
                    <div className='flex flex-col md:flex-row md:space-x-7'>
                        {/* Panel Content */}
                        <div className={openTab === 3 ? "block mx-auto" : "hidden"} id="link3">
                            <div className='relative flex flex-col items-center max-w-5xl mx-auto 
                          space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
                                {/* Cards 1  */}
                                <div className='flex flex-col w-full py-6 space-y-4'>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={chatgpt} alt="1" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> ChatGPT と API </h5>
                                </div>
                                {/* Cards 2  */}
                                <div className='flex flex-col w-full py-6 space-y-4 '>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={chatbot} alt="2" className='h-14' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-1 text-xl font-sans text-center'> チャットボット </h5>
                                </div>
                                {/* Cards 3  */}
                                <div className='flex flex-col w-full py-6 space-y-4 '>
                                    {/* image  */}
                                    <div className='flex justify-center'>
                                        <img src={langchain} alt="3" className='h-20' />
                                    </div>
                                    {/* Text  */}
                                    <h5 className='pt-0 text-xl font-sans text-center'> Langchain </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Tabs
