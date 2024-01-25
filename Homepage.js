import React from 'react';

const Homepage = () => {
    return (
        <div className=' font-inter h-full mb-14 md:mb-7 md:h-[300px] '>
            <div className='flex justify-center md:justify-start p-4 mt-6 md:p-4  md:px-16'>
                <h1 className='font-bold text-[24px] text-text'>Welcome, John Mathew!!</h1>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start md:flex-row mt-4  gap-6  '>
                <div className='text-start bg-white w-[332px] h-[168px] border border-gray-700 rounded-xl md:ml-[68px]  p-4'>
                <h1 className='text-[14px] font-semibold'>Order Sync Successful!</h1>
                <p className='text-[13px] py-2 font-normal'>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
                <div>
                    <button className='text-[12px] p-2 bg-gray-600 rounded-[12px] px-4 text-white mt-6 font-medium'>Explore Your Orders</button>
                </div>
                </div>

                <div className='text-start w-[332px] bg-second border border-gray-700 rounded-xl  p-4'>
                    <h1 className='text-[14px] font-semibold'>Customize Customer Notification</h1>
                    <p className='text-[13px] py-2 font-normal'>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                    <div>
                        <button className='text-[12px] p-2 bg-gray-600 rounded-[12px] px-4 text-white mt-6 font-medium'>Configure Notifications</button>
                    </div>
                </div>
                
                <div className='text-start w-[332px] bg-third border border-gray-700 rounded-xl  p-4 '>
                    <h1 className='text-[14px] font-semibold'>Your Tracking Link has been generated</h1>
                    <p className='text-[13px] py-2 font-normal'>Include the Link to Your Store's Navigation Menu.</p>
                    <div className='flex gap-2'>
                        <button className='text-[12px] p-2 bg-white rounded-[12px] px-4 text-black  mt-6 font-medium' >Copy Link</button>
                        <button className='text-[12px] p-2 bg-gray-600 rounded-[12px] px-4 text-white mt-6 font-medium'>Go To Navigation Menu</button>
                </div>
            </div>
            </div> 
            
        </div>
    );
};

export default Homepage;