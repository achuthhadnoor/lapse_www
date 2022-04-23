import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import Header from './../components/header'

const Timer = ({ type }: any) => {
  const [timer, setTimer] = useState({ days: 0, hr: 0, min: 0, sec: 0 });
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {

    const countDownDate = new Date("July 5, 2022 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer({ days: days, hr: hours, min: minutes, sec: seconds })
      setIsLoading(false)

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  switch (type) {
    case 'vertical':
      return (
        <div id="timer" className='mt-5'>
          {!isLoading && <div className='inline-block rounded-xl bg-skin-secondary align-middle justify-center p-2'>
            <div className='flex'>
              <span className='flex flex-col p-2 mr-4'>
                <span>{timer.days}</span>
                <span className='text-xs text-indigo-500'>Days</span>
              </span>
              <span className='flex flex-col p-2 mr-4'>
                <span>{timer.hr}</span>
                <span className='text-xs text-indigo-500'>Hrs</span>
              </span>
              <span className='flex flex-col p-2 mr-4'>
                <span>{timer.min}</span>
                <span className='text-xs text-indigo-500'>mins</span>
              </span>
              <span className='flex flex-col p-2 mr-4'>
                <span>{timer.sec}</span>
                <span className='text-xs text-indigo-500'>Sec</span>
              </span>
            </div>
            <a href="https://achuthhadnoor.gumroad.com/l/learnvim">
              <button className='px-4 py-2 mt-2 bg-orange-500 w-full rounded-lg hover:ring-2 ring-purple-900 text-xs sm:text-sm'>
                Get It for <span className='line-through stroke-orange-600 text-purple-300'>$35</span> <span className='text-gray-900'>$25</span>
              </button>
            </a>
          </div>}
        </div>
      )
    case 'horizontal':
      return (
        <div id="timer" className='mt-4'>
          {!isLoading && <div className='inline-block rounded-xl bg-skin-secondary align-middle justify-center'>

            <div className="mt-5 inline-block rounded-xl bg-skin-secondary align-middle justify-center ring ring-indigo-500 px-2">
              <div className="flex">
                <span className="flex flex-col p-2 mr-4">
                  <span>{timer.days}</span>
                  <span className="text-xs text-indigo-300">Days</span>
                </span>
                <span className="flex flex-col p-2 mr-4">
                  <span>{timer.hr}</span>
                  <span className="text-xs text-indigo-300">Hrs</span>
                </span>
                <span className="flex flex-col p-2 mr-4">
                  <span>{timer.min}</span><span className="text-xs text-indigo-300">mins</span>
                </span>
                <span className="flex flex-col p-2 mr-4">
                  <span>{timer.sec}</span>
                  <span className="text-xs text-indigo-300">Sec</span>
                </span>
                <a href="https://gum.co/lapse_app" target="_blank">
                  <button className="outline-none px-4 py-2 bg-indigo-800 hover:bg-indigo-600 m-2 rounded-lg hover:ring-2 ring-indigo-900 text-xs sm:text-sm">
                    Get It for
                    <span className="line-through stroke-indigo-300 text-indigo-300 font-bold px-1">$25</span>
                    <span className="text-indigo-100">$15</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="p-2 flex align-middle items-center gap-4">
              <span className='text-indigo-300'>
                Avalilable on
              </span>
              <span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z" fill="currentColor" fill-opacity="0.9" />
                </svg>
              </span>
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>}
        </div>
      )
    default:
      return null
  }
}
const Home: NextPage = () => {
  return (
    <Container>
      <section className='pt-10 flex flex-col text-center items-center'>
        <span className='px-2 py-5'>
          <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6959 2.5H44C48.1421 2.5 51.5 5.85786 51.5 10V42.3628C51.5 47.4304 46.5784 51.0393 41.7452 49.5158L14.1428 40.8151C11.6337 40.0242 9.72252 37.9765 9.10624 35.4189L3.40455 11.7569C2.26771 7.03904 5.84293 2.5 10.6959 2.5Z" stroke="white" stroke-width="5" />
          </svg>
        </span>
        <h1 className='py-5 text-2xl lg:text-5xl max-w-3xl leading-loose font-bold'>Save instant time-lapse screen recording ✨.</h1>
        <p className='text-gray-400 text-2xl font-thin max-w-xl'>
          A simple app to record screen in timelapse on MacOs and windows
        </p>
        <button className='flex align-middle items-center gap-2 mt-5 text-xl'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99948 16.4999C13.1416 16.4999 16.4995 13.142 16.4995 8.99985C16.4995 4.85774 13.1416 1.49988 8.99948 1.49988C4.85737 1.49988 1.49951 4.85774 1.49951 8.99985C1.49951 13.142 4.85737 16.4999 8.99948 16.4999Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.50049 5.99988L12.0005 8.99985L7.50049 11.9999V5.99988Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Watch now
        </button>
        <Timer type={'horizontal'} />
        {/* <div className='videoPop'>
          <video controls={true}>
            <source src="lapse.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div> */}
      </section>
      <section className='mt-20'>
        {/* <h2 className='text-4xl text-center p-4 font-bold'>Features</h2> */}
        <div className='flex gap-2 px-4'>
          <div className='flex flex-col gap-4 text-center items-center flex-1 my-10 p-4 rounded'>
            <span>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4702_369)">
                  <path d="M38.2041 0.979584H9.79594C4.92682 0.979584 0.979614 4.92679 0.979614 9.79591V38.2041C0.979614 43.0732 4.92682 47.0204 9.79594 47.0204H38.2041C43.0732 47.0204 47.0204 43.0732 47.0204 38.2041V9.79591C47.0204 4.92679 43.0732 0.979584 38.2041 0.979584Z" stroke="#323232" stroke-width="2" />
                  <path d="M30.3674 20.5714H31.347C32.3862 20.5714 33.3828 20.9842 34.1176 21.7191C34.8525 22.4539 35.2653 23.4506 35.2653 24.4898C35.2653 25.5291 34.8525 26.5257 34.1176 27.2605C33.3828 27.9954 32.3862 28.4082 31.347 28.4082H30.3674" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.6938 20.5714H30.3673V29.3878C30.3673 30.427 29.9545 31.4237 29.2196 32.1584C28.4848 32.8933 27.4882 33.3061 26.4489 33.3061H18.6122C17.573 33.3061 16.5763 32.8933 15.8415 32.1584C15.1066 31.4237 14.6938 30.427 14.6938 29.3878V20.5714Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.6122 13.7143V16.6531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22.5306 13.7143V16.6531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26.449 13.7143V16.6531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4702_369">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </span>
            <span className='text-xl'>
              Save time
            </span>
            <p className='font-thin leading-loose'>
              Recorded hours of video and waited for sometime to render again as time-lapse? Record directly in time-lapse.
            </p>
          </div>
          <div className='flex flex-col gap-4 text-center items-center flex-1 my-10 p-4 rounded'>
            <span>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.865 16.5H18.135C17.232 16.5 16.5 17.232 16.5 18.135V29.865C16.5 30.768 17.232 31.5 18.135 31.5H29.865C30.768 31.5 31.5 30.768 31.5 29.865V18.135C31.5 17.232 30.768 16.5 29.865 16.5Z" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.25 16.5V31.5" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.75 16.5V31.5" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5 24H31.5" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5 20.25H20.25" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5 27.75H20.25" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.75 27.75H31.5" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.75 20.25H31.5" stroke="#FDFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="1" y="1" width="45.0204" height="46" rx="9" stroke="#323232" stroke-width="2" />
              </svg>

            </span>
            <span className='text-xl'>
              Control output
            </span>
            <p className='font-thin leading-loose'>
              Speed up or slow down video by adjusting the framerate from high to low and further more by customizing the video output.
            </p>
          </div>
          <div className='flex flex-col gap-4 text-center items-center flex-1 my-10 p-4 rounded'>
            <span>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 31.5C28.1421 31.5 31.5 28.1421 31.5 24C31.5 19.8579 28.1421 16.5 24 16.5C19.8579 16.5 16.5 19.8579 16.5 24C16.5 28.1421 19.8579 31.5 24 31.5Z" stroke="#FDFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.5 26.25V21.75" stroke="#FDFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.5 26.25V21.75" stroke="#FDFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="1" y="1" width="46" height="46" rx="9" stroke="#323232" stroke-width="2" />
              </svg>

            </span>
            <span className='text-xl'>
              Autopausing
            </span>
            <p className='font-thin leading-loose'>
              Recording is paused smartly based on inactivity, unexpected shutdown and screen lock
            </p>
          </div>
          <div className='flex flex-col gap-4 text-center items-center flex-1 my-10 p-4 rounded'>
            <span>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4702_365)">
                  <path d="M38.2041 0.979584H9.79594C4.92682 0.979584 0.979614 4.92679 0.979614 9.79591V38.2041C0.979614 43.0732 4.92682 47.0204 9.79594 47.0204H38.2041C43.0732 47.0204 47.0204 43.0732 47.0204 38.2041V9.79591C47.0204 4.92679 43.0732 0.979584 38.2041 0.979584Z" stroke="#323232" stroke-width="2" />
                  <path d="M29.3877 18.6122H15.6734C14.5914 18.6122 13.7142 19.4894 13.7142 20.5714V28.4082C13.7142 29.4902 14.5914 30.3673 15.6734 30.3673H29.3877C30.4698 30.3673 31.3469 29.4902 31.3469 28.4082V20.5714C31.3469 19.4894 30.4698 18.6122 29.3877 18.6122Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.2653 25.4694V23.5102" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4702_365">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>


            </span>
            <span className='text-xl'>
              Perfomance
            </span>
            <p className='font-thin leading-loose'>
              Recording is paused smartly based on inactivity, unexpected shutdown and screen lock.
              Saves battery and removes load on the processor as there is no re-rendering 
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Home
