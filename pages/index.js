import Container from '../components/Container'
import Video from '../components/video'
import { getAllFilesFrontMatter } from '@/lib/mdx'

function Home({ posts }) {
  const features = [
    {
      title: "Export Format",
      desc: "Export the video in mp4, mkv, webem or avi. Saving the video onto the device depends on the time of recording",
      id: "xtr4xpecax",
      align: 'left'
    },
    {
      title: "Quality of the video",
      desc: "Depending you your screen lapse suppots from 8k to 144p resolution",
      id: "xtr4xpecax",
      align: "right"
    }, {
      title: "Export Format",
      desc: "Export the video in mp4, mkv, webem or avi. Saving the video onto the device depends on the time of recording",
      id: "11cz43suow",
      align: 'left'
    },

  ]
  return (
    <Container>
      <span className="absolute right-0 z-50">
        <svg width="219" height="84" viewBox="0 0 219 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.0378 43.0804C51.9368 42.2203 46.8357 41.3603 41.7347 40.5003C37.1436 39.7262 33.6722 37.118 29.6062 34.7146C25.843 32.4901 21.1389 29.4535 18.5724 24.8089C17.1205 22.1813 14.7758 21.6027 13.4805 18.6209C11.4459 13.9374 9.67727 9.09209 7.7538 4.33172C6.20107 0.488902 8.75471 2.65565 10.6824 2.98066C11.2662 3.07909 15.8579 4.77564 13.7409 4.41873" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6.82206 2C6.10744 5.66242 6 8.99639 6 12.6868" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M62.4011 32.1261C60.96 39.6922 63.5227 44.0094 68.1555 49.8004C73.3168 56.252 75.6082 41.317 73.0879 41.1688C71.8856 41.0981 70.4597 40.9847 69.3886 41.5798C68.6134 42.0105 67.3335 44.1565 67.3335 43.2696C67.3335 41.7646 73.1879 38.263 74.3667 37.9262C76.4636 37.3271 76.2879 46.0361 76.7872 47.3342C77.539 49.2889 78.0202 51.4072 78.0202 53.4997C78.0202 55.8054 78.0861 53.5655 77.1982 52.6776" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M81.4434 32.4967C81.4434 35.6065 83.5009 38.0944 84.5368 40.9196C84.9424 42.0257 86.057 45.2884 86.057 44.1103" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M84.7844 29.9512C86.7438 31.3646 88.5675 32.9366 90.494 34.3881C91.2214 34.9361 91.7049 35.1806 92.5092 35.4487C93.5823 35.8064 94.3903 36.1179 95.523 36.3149C95.9773 36.3939 97.0102 37.0427 97.4233 36.9247C97.7799 36.8228 97.5111 32.6024 97.5117 32.479C97.5264 29.2431 98.148 19.5562 98.148 22.7922" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M106.58 22.9512C108.297 22.9188 109.603 22.6326 109.921 20.8035C110.023 20.2161 110.296 19.3174 109.992 18.753C109.709 18.2291 108.958 17.9799 108.48 17.7012C106.967 16.8187 106.046 17.2229 105.024 18.426C103.641 20.0549 103.402 21.6817 102.921 23.7467C102.642 24.9439 102.48 26.7702 103.319 27.7858C104.166 28.8114 105.458 28.8376 106.748 28.8376C108.445 28.8376 109.738 28.8442 111.194 27.883C112.518 27.0087 114.216 26.0618 114.216 24.2239" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M117.681 37.2859C117.748 38.7541 118.456 40.4271 119.113 41.7404C119.943 43.4008 121.004 45.2406 122.259 46.6104C122.773 47.1709 122.597 45.0098 123.09 44.7631" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M115.772 33.6268C115.069 35.4278 116.148 34.6962 115.772 33.945" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M79.0573 25.974C79.1423 25.7561 79.4873 24.3813 78.7391 25.0901C78.3917 25.4192 78.312 26.2128 78.4562 26.6457C78.5977 27.0701 79.724 26.3553 79.0573 26.133" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M119.75 29.0132C119.96 30.8698 121.1 32.5987 121.924 34.2455C122.81 36.0173 123.567 37.851 124.452 39.6192C124.891 40.4982 126.12 40.1202 126.962 40.2732C127.712 40.4097 128.253 39.7663 128.694 39.1949C128.936 38.8818 130.587 37.216 130.09 36.9677" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M120.545 37.1268C121.629 35.5155 123.023 33.9211 123.886 32.195" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M136.982 17.9868C136.028 18.7323 133.424 20.4405 133.606 21.4853C133.759 22.3575 135.694 26.3602 136.188 27.0781C136.453 27.4637 140.8 26.1408 140.8 24.1913C140.8 22.7052 139.843 21.3341 139.527 19.834C139.449 19.4633 139.159 18.0119 138.732 17.9868C137.957 17.9411 137.212 17.8277 136.425 17.8277C135.723 17.8277 137.386 17.915 137.777 18.1105C139.048 18.7459 140.512 18.9546 141.896 19.339C143.487 19.7811 145.056 19.1137 146.527 18.6231" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M140.466 37.9058C140.842 39.9179 141.947 41.6673 142.959 43.4209C144.653 46.3579 146.444 49.2499 148.253 52.1179C149.709 54.4274 151.316 57.6193 153.724 59.1178C154.486 59.592 156.595 57.8382 157.127 57.4916C158.444 56.6324 159.575 55.4935 160.353 54.133" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M142.216 51.2694C142.216 48.604 142.695 46.4957 144.567 44.6229C145.093 44.0977 148.634 40.8238 148.739 40.9285" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M156.057 37.4285C159.314 37.4285 162.675 37.1916 165.921 37.4992C168.842 37.7761 171.42 39.4292 173.044 41.8653C173.327 42.2895 174.525 44.0293 173.787 44.4992C173.217 44.862 172.323 44.971 171.683 45.2239C170.854 45.5518 170.382 45.0184 169.704 44.5169C167.621 42.9764 165.915 40.9056 165.196 38.3742C164.244 35.0219 163.982 31.6439 164.268 28.1747C164.377 26.8501 164.807 24.224 164.807 24.224" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M168.307 21.5194C169.535 23.4434 171.118 25.3873 172.832 26.902C174.134 28.0525 175.635 28.5794 177.393 28.2631C179.583 27.8689 181.369 25.6051 182.271 23.7113C184.195 19.6762 184.469 14.3014 183.58 9.97651C183.186 8.06171 182.734 5.79482 181.122 4.50557C181.036 4.43625 180.442 3.83093 180.407 4.04597C180.337 4.46263 180.531 4.88206 180.734 5.23031C183.228 9.52589 186.369 13.4829 189.466 17.3477C193.774 22.7256 197.882 28.2209 201.557 34.0522C203.955 37.8571 206.377 41.7534 207.425 46.1873C208.047 48.8169 208.728 51.811 206.948 54.1241C205.162 56.4463 202.07 57.448 199.365 58.1986C194.854 59.4504 189.844 59.7951 185.206 60.2668C180.087 60.7873 174.941 60.7495 169.854 61.6191C164.964 62.455 160.666 65.1001 156.746 68.018C154.173 69.9335 152.835 71.9987 152.628 75.292C152.438 78.3012 152.401 80.602 154.943 82.4511" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M192.848 6.79568C192.248 4.95976 192.067 4.74216 193.931 4.74216C195.121 4.74216 196.31 4.65239 197.468 4.94181C200.481 5.69496 202.544 7.65021 203.5 10.5177C204.506 13.5348 204.649 17.0503 206.067 19.8869C206.722 21.1969 208.781 23.7185 210.303 22.1971" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M215.693 30.4111C215.84 29.9072 217.953 23.5946 217.604 23.4948C216.418 23.156 215.779 25.2619 215.707 26.0474C215.594 27.2901 215.753 28.7756 216.463 29.8407C217.121 30.8268 217.566 28.7989 217.69 28.4147C217.992 27.4742 216.997 27.99 216.734 28.4717C216.449 28.9941 216.614 29.8151 216.977 28.9993C217.337 28.1887 217.398 26.9113 217.176 26.0474C216.859 24.8146 216.471 26.1719 216.206 26.3041" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <section className="h-full bg-green-200">
        <div className="mx-auto max-w-2xl">
          <header className="p-5 flex items-center pt-20">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg"><path d="M7.0765 6.24507C6.9168 5.61329 7.39435 5 8.046 5H17.4775C18.0298 5 18.4775 5.44772 18.4775 6V16.2801C18.4775 16.9547 17.8233 17.4357 17.1794 17.2346L9.76078 14.9176L9.48859 15.7891L9.76078 14.9176C9.42885 14.814 9.17461 14.5453 9.08939 14.2082L7.0765 6.24507Z" stroke="currentColor" stroke-width="2"></path></svg>
            <span className="text-3xl font-semibold">Lapse</span>
          </header>
          <h1 className="text-7xl font-bold p-4 pt-15">Record your screen in time-lapse</h1>
          <p className="p-4 text-lg">Are you tired of using multiple softwares to record long hour screen recording and then converting it to time-lapse?</p>
          <p className="p-4 text-lg">Lapse will help you to instantly record in timelapse in three simple clicks</p>
          <div className="p-2 flex items-center space-x-4">
            <button className="p-2 bg-white rounded-md">Get it now</button>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z" fill="black" fill-opacity="0.9" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="p-10 rounded-b-full bg-green-200 "></div>
          </div>
          {/* <Video embedId="e4kv1lyq0n" /> */}
        </div>
      </section> <div className="p-10 rounded-b-full bg-green-200 "></div>
      <section className="mx-auto max-w-screen-lg" id="features">
        <div className=" flex flex-col md:flex-row text-gray-400 p-4  items-center">
          <video className="" width="480" height="320" src="videos/lapse.webm" autoplay controls />
          <div className="px-4">
            <h3 className="text-2xl font-semibold py-4 text-green-300">Timelapse recording on fingertips..</h3>
            <p>We almost made zero UI to make it simple and easy to use. This helps you record more and learn less.</p>
          </div>
        </div>
        <h2 className="p-4 text-green-200 text-4xl my-10">Features</h2>
        <div className="p-4 text-white grid gap-10 lg:grid-cols-3 md:grid-cols-2 ">
          <div className="grid ">
            <video width="320" height="240" src="/videos/vid-1.webm" type="video/webm" autoplay controls />
            <div>
              <h3 className="text-2xl font-semibold py-4 text-green-300">
                Export options
            </h3>
              <p className="text-gray-400">
                We provide diffrent export options like .mp4 .mkv .avi  so you can use on different platforms
            </p>
            </div>
          </div>
          <div>
            <video width="320" height="240" src="/videos/vid-2.webm" type="video/webm" autoplay controls />
            <div>
              <h3 className="text-2xl font-semibold py-4 text-green-300">
                Video Quality
            </h3>
              <p className="text-gray-400">
                Based on your screen resolution the video quality can be changed from 8k to 144p
            </p>
            </div>
          </div>
          <div>
            <video width="320" height="240" autoplay controls src="/videos/vid-3.webm" type="video/webm" />
            <div>
              <h3 className="text-2xl font-semibold py-4 text-green-300">
                Speed (Framerate)
            </h3>
              <p className="text-gray-400">
                Recording short / long videos ? Lapse supports slow / fast recording by changing the framerate
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg text-gray-400">
        <h2 className="p-4 text-green-200 text-4xl my-10">Keyboard Shortcuts</h2>
        <div className="grid sm:grid-cols-2">
          <div className="p-4 mb-10">
            <h3 className="text-xl font-semibold py-4 text-gray-400">
              Start/pause Recording
            </h3>
            <div>
              <svg width="234" height="41" viewBox="0 0 234 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="188" width="46" height="41" rx="5" fill="#363636" />
                <path d="M209.535 26.1758H217V29H206.02V11.9375H209.535V26.1758Z" fill="#9D9D9D" />
                <rect x="94" width="46" height="41" rx="5" fill="#363636" />
                <path d="M123 12C122.204 12 121.441 12.3161 120.879 12.8787C120.316 13.4413 120 14.2044 120 15V27C120 27.7956 120.316 28.5587 120.879 29.1213C121.441 29.6839 122.204 30 123 30C123.796 30 124.559 29.6839 125.121 29.1213C125.684 28.5587 126 27.7956 126 27C126 26.2044 125.684 25.4413 125.121 24.8787C124.559 24.3161 123.796 24 123 24H111C110.204 24 109.441 24.3161 108.879 24.8787C108.316 25.4413 108 26.2044 108 27C108 27.7956 108.316 28.5587 108.879 29.1213C109.441 29.6839 110.204 30 111 30C111.796 30 112.559 29.6839 113.121 29.1213C113.684 28.5587 114 27.7956 114 27V15C114 14.2044 113.684 13.4413 113.121 12.8787C112.559 12.3161 111.796 12 111 12C110.204 12 109.441 12.3161 108.879 12.8787C108.316 13.4413 108 14.2044 108 15C108 15.7956 108.316 16.5587 108.879 17.1213C109.441 17.6839 110.204 18 111 18H123C123.796 18 124.559 17.6839 125.121 17.1213C125.684 16.5587 126 15.7956 126 15C126 14.2044 125.684 13.4413 125.121 12.8787C124.559 12.3161 123.796 12 123 12Z" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M70 15.75V26.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M64.75 21H75.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M164 15.75V26.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M158.75 21H169.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <rect width="46" height="41" rx="5" fill="#363636" />
                <path d="M12 12H19L25 29.5H33.5" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25 12H32.5" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div className="p-4 mb-10">
            <h3 className="text-xl font-semibold py-4 text-gray-400">
              Quit application
            </h3>
            <div>
              <svg width="234" height="41" viewBox="0 0 234 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="94" width="46" height="41" rx="5" fill="#363636" />
                <path d="M109 20.5H113.5V30.5H121V20.5H125.5L117 12L109 20.5Z" stroke="#9D9D9D" />
                <rect x="188" width="46" height="41" rx="5" fill="#363636" />
                <path d="M209.535 26.1758H217V29H206.02V11.9375H209.535V26.1758Z" fill="#9D9D9D" />
                <path d="M70 14.75V25.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M64.75 20H75.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M164 14.75V25.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M158.75 20H169.25" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <rect width="46" height="41" rx="5" fill="#363636" />
                <path d="M12 12H19L25 29.5H33.5" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25 12H32.5" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>
        </div>
      </section>
    </Container >)
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}

export default Home;