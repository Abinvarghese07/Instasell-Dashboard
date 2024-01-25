import React from 'react';
import {FaCcPaypal} from 'react-icons/fa6';
import {FaStarHalfAlt} from 'react-icons/fa';
import {PiLightningDuotone} from 'react-icons/pi';
import {AiFillSignal} from 'react-icons/ai';
import {IoGitNetworkSharp} from 'react-icons/io5';


const Footer = () => {
    return (
        <div className='font-inter mb-16'>
            <div className='flex justify-center md:justify-start py-16 px-16 text-start'>
                <h1 className='text-[18px] md:text-[24px] font-bold  leading-8 text-text'>Discover the Heart of Our Functionality</h1>
            </div>
           <div className='flex flex-col md:flex-row items-center gap-10'>
             <div className='md:px-16'>
                <div className=' w-[332px] h-[404px] border border-gray-700 rounded-xl p-3'>
                <h2 className='text-[14px] font-semibold leading-5 text-start text-text'>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h2>
                <p className='text-[13px] leading-5 font-normal py-3 text-start '>Immerse your customers in a branded experience by personalizing the colors on your tracking page. </p>
                <div className=''>
                    <h2 className=' text-start text-[13px]  leading-5 font-normal'>Accent Color</h2>
                   <div className='flex gap-4'>
                     <input placeholder='FF9898' className='border-2 border-slate-300 rounded-lg h-[32px] w-[220px] p-4 text-start text-[13px] text-text leading-5 font-normal'></input>
                    <div className="w-[64px] h-[32px] bg-boxPink   rounded-t-full rounded-b-full" />

                   </div>
                </div>
                <div className='py-2'>
                    <h2 className=' text-start text-[13px]  leading-5 font-normal'>Text Color</h2>
                   <div className='flex gap-4'>
                     <input placeholder='571010' className='border-2 border-slate-300 rounded-lg h-[32px] w-[220px] p-4 text-start text-[13px] text-text leading-5 font-normal'></input>
                    <div className="w-[64px] h-[32px] bg-boxMaroon   rounded-t-full rounded-b-full" />

                   </div>
                </div>
                 <div className='py-2'>
                    <h2 className='text-start text-[13px]  leading-5 font-normal'>Text Color</h2>
                   <div className='flex gap-4'>
                     <input placeholder='FFEAEA' className='Background border-2 border-slate-300 rounded-lg h-[32px] w-[220px] p-4 text-start text-[13px] text-text leading-5 font-normal'></input>
                    <div className="w-[64px] h-[32px] bg-boxPeach   rounded-t-full rounded-b-full" />

                   </div>
                </div>


                <div className='flex gap-2 py-4'>
                    <button className='text-[12px] leading-4 font-medium p-1 px-2 border-2 border-slate-500 rounded-lg'>Preview</button>
                    <button className='text-[12px] leading-4 font-medium p-1 px-2 bg-lastButton text-white rounded-lg'>Apply Colors</button>
                </div>
               </div>
                
            <div>
               

            </div>
            </div>


            <div className='flex  items-center flex-col gap-6'>
                <div className='h-full md:h-[152px] w-[330px] md:w-[448px] border border-slate-700 rounded-2xl p-3'>
                    <h2 className='text-[14px] leading-5 font-semibold text-start text-text'>Exclusive Onboarding Support for High-Volume Brands</h2>
                    <p className='text-[13px] leading-5 font-semibold text-start text-text py-2'>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
                    <div className='flex py-5'>
                        <button className='text-[12px] font-semibold leading-4 bg-lastButton p-1 px-2 text-white rounded-lg'>Schedule A Call</button>
                    </div>
                </div>

                <div className='h-[222px] w-[330px] md:w-[448px] border border-slate-700 rounded-2xl p-3'>
                    <h2 className='text-[14px] leading-5 font-semibold text-start text-text' >Explore Our Integrated Ecosystem</h2>
                    <p className='text-[13px] leading-5 font-semibold text-start text-text py-2' >Discover a variety of popular integrations tailored for your convenience. </p>
                    <div className='flex justify-evenly text-text text-4xl py-5'>
                        <FaCcPaypal/>
                        <FaStarHalfAlt/>
                        <PiLightningDuotone/>
                        <AiFillSignal/>
                        <IoGitNetworkSharp/>
                    </div>
                    <div className='flex py-5'>
                        <button className='text-[12px] font-semibold leading-4 bg-lastButton p-1 px-2 text-white rounded-lg'>Explore Integrations</button>
                    </div>

                </div>
            </div>

                <div className='w-[332px] h-[404px] border border-slate-700 rounded-2xl md:ml-9 p-3'>
                <h2 className='text-text text-[14px] leading-5 font-semibold text-start'>Seamlessly Integrate Custom HTML Elements</h2>
                <p className='text-text text-[13px] leading-4 font-medium text-start py-2'>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
                <div className=' text-start'>
                <h1 className='text-[13px] leading-5 font-medium mt-7 py-2'>HTML Link</h1>
                <input placeholder='Value' className='w-[300px] h-[128px] border border-slate-700 rounded-lg text-start text-[13px] leading-5 font-medium p-4 '></input>


                </div>
                <div className='flex gap-3 py-6'>
                    <button className='text-[12px] font-semibold leading-4 bg-white p-1 px-2 text-black border border-slate-700 rounded-lg'>Preview</button>
                    <button className='text-[12px] font-semibold leading-4 bg-lastButton p-1 px-2 text-white rounded-lg'>Apply changes</button>
                </div>
            </div>

           </div>
            
        </div>
    );
};

export default Footer;