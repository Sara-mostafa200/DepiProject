import React from 'react'
import RedBtn from '../RedBtn/RedBtn'
// import WelcomBack2 from '../../assets/WelcomeBack1.jpg'

const WelcomBack = () => {

  return (
    <div className="bg-WelcomBack min-h-screen bg-cover bg-center flex justify-center items-center">
      <div className='bg-balckback  text-white mx-5 px-8 py-5 md:py-12  flex flex-col gap-16 '>
        {/* headline */}
        <h2 className=' text-[50px] font-bold text-center'>Welcome Back</h2>

        {/* sign btn */}
        <div className="Redbtn flex flex-col gap-5">
             <RedBtn title={"Sign In"}/>
        <RedBtn title={"Sign Up"}/>
        </div>
     
        {/* social Media icons  */}
        <div className="welcomFooter flex flex-col gap-3 items-center">
          {/* title */}
        <span className='text-center font-[500]'>Login with social Media</span>

        {/* icons */}
        <div className='flex gap-3 items-center text-center '>
        <i class="fa-brands fa-instagram text-[30px]"></i>
        <i class="fa-brands fa-facebook text-[25px]"></i>
        <i class="fa-brands fa-x-twitter text-[25px]"></i>
        </div>
      
        </div>


      </div>
    </div>
  )
}

export default WelcomBack
