import React from 'react';
import Details from './Details';
// import bone from "../image/bone.jpg"
import d1 from "../image/d1.jpg"
import d2 from "../image/d2.jpg"
import d3 from "../image/d3.jpg"
// import d4 from "../image/d4.jpg"

  const doctorData = [
    {
      title: 'Dr.Ramya',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      image: d1, // Update with the correct path to your image
      percentage: 96,
      clinicName: 'Facemile Dentamila Clinic',
      hospital: 'Chandad Hospital',
      patients: 54,
      consultingFee: 300,
      available:"Available Today"
    },
    {
      title: 'DR.Swethaa',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      image: d2, // Update with the correct path to your image
      percentage: 90,
      clinicName: 'SmileCare Dental',
      hospital: 'City Hospital',
      patients: 42,
      consultingFee: 250,
      available:"Available Today"
    },
    {
      title: 'Dr.RamaKrishna',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      image: d3, // Update with the correct path to your image
      percentage: 85,
      clinicName: 'Perfect Teeth Clinic',
      hospital: 'Metro Hospital',
      patients: 63,
      consultingFee: 350,
      available:"Not Available Today"
    },
  ];


export default function Doctor() {
  return (
    <div className='flex flex-wrap gap-6  justify-center '>
      {doctorData.map((data, index) => (
        <Details key={index} {...data} />
      ))}
    </div>
  );
}
