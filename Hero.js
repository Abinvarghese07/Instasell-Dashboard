import React, { useEffect, useRef } from 'react';
import {CiCalendarDate} from 'react-icons/ci';
import { Chart } from 'chart.js/auto';
import {LuInbox} from 'react-icons/lu';
import {IoEyeOutline} from 'react-icons/io5';



const Hero = () => {

    const chartRef = useRef(null);
    const chartInstance =  useRef(null);
    useEffect(() => {
        if (chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(myChartRef, {
            type:'doughnut',
            data:{
                
                
                datasets : [
                   { 
                        
                       
                        data:[40,50,30,60,20],
                    backgroundColor:[
                        'rgba(255, 200, 121, 1)',
                        'rgba(229, 165, 0, 1)',
                        'rgba(149, 111, 0, 1)',
                        'rgba(94, 66, 0, 1)',
                        'rgba(255, 221, 182, 1)'


                    ],
                   }
                ]
            }
        })
        return () => {
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }

    },[])
    return (
        <div className='font-inter h-full w-full bg-hero md:h-[607px]'>
            <div className='flex justify-center  md:justify-start p-6  md:px-16 md:py-8'>
                <h1 className='text-[18px] md:text-[24px] font-bold leading-6 text-text'>Instant Dive into Your Performance Metrics</h1>
            </div>
            <div className='flex items-center md:flex-row flex-col px-16 gap-3 pb-8 '>
                <button className='bg-button p-2 px-3  rounded-lg text-[13px] font-bold hover:border hover:border-purple-800 '>Lifetime</button>
                <button className='bg-button p-2 px-3 rounded-lg text-[13px] font-bold hover:border hover:border-purple-800'>Last Week</button>
                <button className='bg-button p-2 px-3 rounded-lg text-[13px] font-bold hover:border hover:border-purple-800'>Last Month</button>
                <button className='bg-button p-2 px-3 rounded-lg text-[13px] font-bold hover:border hover:border-purple-800'>Last Year</button>
                <div className='flex items-center gap-1 bg-button p-3 rounded-md hover:border hover:border-purple-800'>
                <button className=' text-[13px] font-bold'>Customize Time Line</button>
                <CiCalendarDate/>

                </div>

            </div>

        <div className='flex flex-col items-center gap-10 md:flex-row'>
               <div className='px-16'>
                 <div className='flex flex-col items-center w-[330px] md:w-[448px]  h-[368px] bg-white p-4 rounded-2xl border-2 border-slate-400'>
                     <div className='flex gap-[140px] '>
                         <h1 className='text-[16px]  font-semibold leading-5 '>Shipment Updates</h1>
                         <p className='text-[14px] leading-5 font-medium text-text '>Total Orders : 394</p>
                     </div>
                     <div className='flex  gap-5 p-3 '>
                        <button className='bg-orangebutton text-[13px] font-semibold leading-5 px-1 md:p-2 text-text rounded-lg'>Delivered</button>
                        <button className='text-[13px] font-semibold leading-5 px-1 md:p-2 text-text bg-secondB rounded-lg'>Intransit</button>
                        <button className='text-[13px] font-semibold leading-5 px-1 md:p-2 text-text bg-secondB rounded-lg'>Pending</button>
                        <button className='text-[13px] font-semibold leading-5 px-1 md:p-2 text-text bg-secondB rounded-lg'>Out for delivery</button>
                     </div>
                      <div className='flex   w-[160px] h-[160px] '>
                        <canvas ref={chartRef} ></canvas>
                    </div>
                    <div className='flex gap-1 md:gap-7 py-2 md:p-5'>
                          <div className='flex gap-2 items-center '>
                            <div className="w-7 h-3 bg-dot1  rounded-t-full rounded-b-full"></div>
                            <p className='text-[14px] font-medium text-text'>Exception</p>
                          </div>
                          <div className='flex gap-2 items-center '>
                            <div className="w-7 h-3 bg-dot2  rounded-t-full rounded-b-full"></div>
                            <p className='text-[14px] font-medium text-text'>Intransit</p>
                          </div>
                          <div className='flex gap-2 items-center '>
                            <div className="w-7 h-3 bg-dot3  rounded-t-full rounded-b-full"></div>
                            <p className='text-[14px] font-medium text-text'>Pending</p>
                          </div>
                          
                          
                         

                    </div>
                    <div className='flex gap-7'>
                        <div className='flex gap-2 items-center '>
                            <div className="w-7 h-3 bg-dot4  rounded-t-full rounded-b-full"></div>
                            <p className='text-[14px] font-medium text-text'>Delivered</p>
                          </div>
                          <div className='flex gap-2 items-center '>
                            <div className="w-7 h-3 bg-dot5  rounded-t-full rounded-b-full"></div>
                            <p className='text-[14px] font-medium text-text'>Out for delivery</p>
                          </div>
                    </div>
             
                 </div>

            </div>


            <div className='w-[216px] md:h-[368px] bg-secondbox p-4 rounded-2xl border border-slate-700'>
                <div>
                    <h2 className='text-white text-[14px] font-semibold leading-5 text-start px-3'>Star Facts about your orders!!!</h2>
                    <p className='text-[13px] font-normal leading-5 text-white p-3 text-start'>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
                    <p className='text-[13px] font-normal leading-5 text-white p-3 text-start'>There are 5 shipments in exception right now</p>
                    <p className='text-[13px] font-normal leading-5 text-white text-start p-3'>The maximum chargebacks are from Miami.</p>
                    <div className='flex p-2'>
                        <button className='text-text text-[12px] leading-4 font-bold bg-white p-1 rounded-xl px-3'>Check Orders Page</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col border-2 border-slate-400 w-[330px] md:w-[447px] md:h-[368px] rounded-2xl bg-white md:ml-10 p-2 mb-9 md:mb-0'>
                <div>
                     <div>
                        <h1 className='text-[14px] font-semibold leading-5 text-start p-2 text-text'>Tracking Page Views Vs Orders</h1>
                        <p className='text-[13px] font-medium leading-5 text-start p-2 text-text'>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>

                        </div>
                </div>
                <div className='py-4 flex flex-col gap-7'>
                    <div className=' flex justify-between items-center  bg-innerBox p-3 rounded-xl'>
                       <div className='flex flex-col items-start align-middle'>
                         <p className='text-[12px] font-medium leading-4 text-text'>Orders</p>
                        <h1 className='text-[36px] font-bold leading-[48px] text-text'>80</h1>
                       </div>
                         <div className='mr-6'>
                           <LuInbox className='h-[36px] w-[36px] text-text'/>

                         </div>
                          
                    </div>

                    <div className=' flex justify-between items-center  bg-outerBox p-3 rounded-xl'>
                       <div className='flex flex-col items-start align-middle'>
                         <p className='text-[12px] font-medium leading-4 text-text'>Tracking Page Views</p>
                        <h1 className='text-[36px] font-bold leading-[48px] text-text'>44</h1>
                       </div>
                         <div className='mr-6'>
                           <IoEyeOutline className='h-[36px] w-[36px] text-text'/>

                         </div>
                          
                    </div>
                </div>
            </div>

        
        </div>
           
            
        </div>
    );
};

export default Hero;