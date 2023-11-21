import React,{useState} from 'react';
import calen from "../image/calen.svg"
import thumbs from "../image/thumb.svg"

export default function Details({ title, patients, image ,percentage,clinicName,hospital,consultingFee ,type,available}) {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const isAvailableToday = available === "Available Today";
  const bgClass = isAvailableToday ? "bg-green-300" : "bg-red-300";
  const handleBookAppointment = () => {
    setBookingOpen(true);
  };

  const BookingForm = ({ onClose }) => {
    // Your booking form JSX and logic here
    return (
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
        <div className='w-[300px] h-[200px] items-center flex justify-center flex-col gap-2 bg-white rounded-lg p-4'>
          <h2 className='text-lg font-medium'> Booking Form</h2>
          
          <button className='bg-red-400 p-2  text-white rounded-lg' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (

    
    <div className=' h-[600px] lg:h-[340px] lg:w-[600px] w-[320px] items-center justify-between flex lg:flex-row flex-col m-2 gap-5 bg-gradient-to-br from-blue-300 via-pink-100 to-purple-200  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <img className=' p-8  w-full h-1/2 lg:h-full lg:w-1/2 rounded-full' src={image} alt='' />
      <div className='flex flex-col items-start justify-center w-full lg:w-1/2 h-1/2 lg:h-full py-2'>
        
        <div className='flex  flex-col  gap-3 lg:p-0 p-4 flex-wrap leading-normal'>
          <h5 className='text-2xl mr-3 font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
          <div className='flex flex-row items-center justify-center gap-10'>
          <h4>{type}</h4>
          <div className={`flex items-center justify-center gap-3 ${bgClass} px-3 rounded-sm`}>
          <img src={calen} alt="" className='w-4 h-4' />
          {available}
          </div>
          </div>
        
<div className='flex flex-row gap-8 items-center justify-center'>
  <div className='w-24 p-2 items-center justify-center gap-3 rounded-lg  bg-green-500 flex flex-row'>
    <img src={thumbs} alt="" className='w-6 h-6'/>
    <div className='-my-2'>{percentage}%</div>
  </div>
  <div className='text-sm hover:underline-offset-1 hover:underline underline-offset-2 underline'>
    <p href="doctor">{patients} Patient Stories</p>
  </div>
</div>

<div className='flex flex-row items-center justify-center gap-2'>
  <div className='bg-black h-2 w-2 rounded-full'></div> 
  <div className='text-gray-600'>{clinicName}</div>
 
</div>

<div><span className=''>Location :</span>{hospital}</div>

<div className='flex-col bg-orange-300 rounded-full items-center justify-center flex'>
  <div className='bg-opacity-90'>Rs. {consultingFee} Consulting fee</div>
</div>

   
    
        </div>
       <div className=' text-lg px-5 py-1 w-full flex items-center text-white my-2 justify-center flex-col bg-blue-500  '>

       <div className=' flex   flex-col'>
          Book Appointment </div>
          <div className='' onClick={handleBookAppointment}>No Booking fee</div>
          
   
       </div>
       

      </div>
      {isBookingOpen && <BookingForm onClose={() => setBookingOpen(false)} />}
    </div>
  );
}

