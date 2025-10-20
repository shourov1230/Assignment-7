import { useState } from 'react'
import viteLogo from '/vite.svg'



import './App.css'
function App() {

  return (
    <>

    <header className='bg-[#F5F5F5] h-full '>
    <div className="flex text-align: center justify-between p-5  max-w-[1200px] mx-auto ">
      <div>
        <h2>CS — Ticket System</h2>
      </div>
      <div className="flex items-center gap-5 ">
        <button className='flex items-center gap-5   '>
        <a href="">Home</a>
        <a href="">FAQ</a>
        <a href="">Changelog</a>        
        <a href="">Blog</a>
        <a href="">Contact</a>
        
        
         </button>
         <div className="flex">
        <img src="https://i.ibb.co.com/39WLWsGz/ic-outline-plus.png" alt="" />
        <button className="btn btn-primary">New Ticket</button>
        </div>
      </div>
        </div>

    <div className='flex gap-5 justify-center max-w-[1200px] mx-auto '>
    <div className='box-1 w-[600px]  h-[200px] grid justify-items-center text-white p-5 rounded-lg'>  
      <h1> In-Progress</h1>
      <h1 className="play">0</h1>
       </div>
   <div className='box-2'>
      <h1>Resolved</h1>
      <h1 className='play'>0</h1>
    </div> 
    </div>
      



   <div className='flex text-align: center justify-between p-10  max-w-[1200px] mx-auto'>
   <div>
    <h1 >Customer Tickets</h1>
   </div>
   </div>
   <header className="body-1  ">
   <div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Login Issues - Can't Access Account</h2>
    <div className='card-1 bg-[#0B5E06] text-white flex gap-2 p-2 rounded-lg'>
    <img src="https://i.ibb.co.com/yF0MdcTB/Ellipse-22.png" alt="" srcset="" />
      <a href="">Open</a>
    </div>
    </div>
    <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1001</h3>
       <span className='high-priority'>HIGH PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>John Smith</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/15/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>

<div className="card w-96 bg-base-100 card-xs shadow-[5px] ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Payment Failed - Card Declined</h2>
    <button className="btn">Open</button>
    </div>
     <p>Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.</p>    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1002</h3>
       <span className='high-priority'>HIGH PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>Sarah Johnson</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/16/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
  <div className="card w-96 bg-base-100 card-xs shadow-[5px] ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Unable to Download Invoice</h2>
    <button className="btn">In- Progress</button>
    </div>
    <p>Customer cannot download their January invoice from the billing section. The download button is...</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1003</h3>
       <span className='high-priority-1'>MEDIUM PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>John Smith</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/17/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>

  <div className="card w-96 bg-base-100 card-xs shadow-[5px] ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Incorrect Billing Address</h2>
    <button className="btn">Open</button>
    </div>
    <p>Customer’s billing address shows a different city. They updated it but it still displays the old one.</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1004</h3>
       <span className='high-priority-2'>LOW PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>John Smith</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/18/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
<div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">App Crash on Launch</h2>
    <button className="btn">Open</button>
    </div>
    <p>Customer reports that the mobile app crashes immediately upon opening on Android 13.</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1005</h3>
       <span className='high-priority'>HIGH PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>John Smith</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/19/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
   <div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Refund Not Processed</h2>
    <button className="btn">Open</button>
    </div>
    <p>Customer requested a refund two weeks ago but has not received the amount yet.</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1006</h3>
       <span className='high-priority-1'>HIGH PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>Sophia Taylor</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/20/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
   <div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Two-Factor Authentication Issue</h2>
    <button className="btn">Open</button>
    </div>
    <p>Customer is not receiving 2FA codes on their registered phone number.</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1007</h3>
       <span className='high-priority-2'>MEDIUM PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>James Anderson</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/22/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
   <div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Unable to Update Profile Picture</h2>
    <button className="btn">Open</button>
    </div>
    <p>Customer tries to upload a new profile picture but gets 'Upload failed' error..</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1008</h3>
       <span className='high-priority-2'>LOW PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>Olivia Martinez</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/23/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
   <div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Subscription Auto-Renewal</h2>
    <button className="btn">In- Progress</button>
    </div>
    <p>Customer wants to enable auto-renewal for their subscription but the toggle is disabled.</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1001</h3>
       <span className='high-priority-1'>MEDIUM PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>Liam Thomas</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/24/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
   <div className="card w-96  card-xs ">
  <div className="card-body">
    <div className='justify-between flex'>
    <h2 className="card-title">Missing Order Confirmation Email</h2>
    <button className="btn">Open</button>
    </div>
    <p>Customer placed an order but didn't receive a confirmation email even though payment succeeded.</p>
    
    <div className="flex justify-between">
     <div className='flex gap-5'>
      <h3>#1001</h3>
       <span className='high-priority'>MEDIUM PRIORITY</span>
        </div>
        <div className='flex gap-5'>
          <h3>Isabella Garcia</h3>
          <div className='flex gap-1'>
            <img src="https://i.ibb.co.com/n8KZBQgx/ri-calendar-line.png" alt="" srcset="" />
          <span>1/25/2024</span>
          </div>
        </div>
     </div>
    </div>  
   </div>
 
  </header>
  

  </header>
  


   



  <header className="body-2 bg-[#000000] text-white  mt-10 p-10 grid grid-cols-5 gap-5 max-w-[1600px] h-[400px] mx-auto ">



 

  <div>
    <h1 className='play-2'>CS — Ticket System</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    
  </div>

  <div>
    <h1 className='play-2'>Company</h1>
    <p><a href="">About Us</a></p>
    <p><a href="">Our Mission</a></p>
    <p><a href="">Contact Saled</a></p>
    
  </div>
  <div>
    <h1 className='play-2'>Services</h1>
    <p>
      <a href="">Products & Services</a></p>
    <p><a href="">Customer Stories</a></p>
    <p><a href="">Download Apps</a></p>
  </div>
  <div>
    <h1 className='play-2'>Information</h1>
    <p>
    <a href="">Privacy Policy</a>
    </p>
    <p>
    <a href="">Terms & Conditions</a>
    </p>
    <p>
    <a href="">Join Us</a>
    </p>

    
  </div>
  <div>
    <h1 className='play-2'>Social Links</h1>
    <br />
    <p className='flex gap-5 '>
     <img src="https://i.ibb.co.com/qMXbxF2t/fi-5969020.png" alt="" />
      
      <a href="">@CS — Ticket System</a>
    </p>
    <br />
    <p className='flex gap-5'>
      <img src="https://i.ibb.co.com/XZJmy2R8/fi-145807.png" alt="" />
      
      <a href="">@CS — Ticket System</a>
    </p>
    <br />
    <p className='flex gap-5 '>
      <img src="https://i.ibb.co.com/mVQ9JdqK/fi-5968764.png" alt="" />
      
      <a href="">@CS — Ticket System</a>
    </p>

    <br />
    <p className='flex gap-5'>
      <img src="https://i.ibb.co.com/3YsBwKyw/fi-6244710.png" alt="" />
      
     
      <a href="">support@cst.com</a>
    </p>
  </div>

  <div className='col-span-5 text-center mt-10  p-5 rounded-lg border-t-1 border-white '>
    <h1>© 2025 CS — Ticket System. All rights reserved.</h1>
  </div>

   </header >





      
    </>
  )
}
export default App
