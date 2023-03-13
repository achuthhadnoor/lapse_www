import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import Timer from "../components/Timer";
import Icon from "react-icons-kit";
import {
  activity,
  pauseCircle,
  film,
  battery,
  crop,
  music,
  moreVertical,
} from "react-icons-kit/feather";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center py-2">
        <div className="bg-neutral-200 dark:bg-neutral-700 w-full rounded p-2 mt-10">
          <video
            src="/demo.mp4"
            className="rounded-md"
            autoPlay
            muted
            loop={true}
          />
        </div>
        <div className="relative z-10 -top-10 space-y-4 text-center items-center align-middle flex flex-col">
          <span>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_6047_645)">
                <rect
                  width="100"
                  height="100"
                  rx="16"
                  fill="white"
                  fill-opacity="0.65"
                />
              </g>
              <rect
                x="20"
                y="19"
                width="60"
                height="60"
                rx="10"
                fill="#48AB2A"
              />
              <path
                d="M42.6959 31.5H60C64.1421 31.5 67.5 34.8579 67.5 39V55.3628C67.5 60.4304 62.5784 64.0393 57.7452 62.5158L43.2856 57.9579C40.7766 57.167 38.8654 55.1193 38.2491 52.5618L35.4046 40.757C34.2677 36.0391 37.8429 31.5 42.6959 31.5Z"
                stroke="currentColor"
                stroke-width="5"
              />
              <defs>
                <filter
                  id="filter0_b_6047_645"
                  x="-30"
                  y="-30"
                  width="160"
                  height="160"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_6047_645"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_6047_645"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </span>
          <h1 className="text-4xl font-bold ">Lapse</h1>
          <h2 className="text-2xl font-bold">
            Save instant time-lapse screen recording ✨.
          </h2>
          <p className="max-w-xl font-thin">
            This app sits on your macOs menubar and can be invoked my a global
            shortcut to record screen. You can also select an external display
            or a particular app to record.
          </p>
          <button className="flex items-center align-middle gap-2 outline-none hover:focus:ring hover:focus:ring-green-600 rounded px-2 ">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 16.5C13.1421 16.5 16.5 13.1421 16.5 8.99998C16.5 4.85787 13.1421 1.5 8.99996 1.5C4.85786 1.5 1.5 4.85787 1.5 8.99998C1.5 13.1421 4.85786 16.5 8.99996 16.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 6L12 8.99998L7.5 12V6Z"
                  fill="white"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Watch video</span>
          </button>
          <Timer type="horizontal" />
          <div className="flex space-x-4">
            <div className=" -space-x-4">
              <Image
                src={"/default.png"}
                height={50}
                width={50}
                className="rounded-full h-50 w-50 inline-block"
                alt="cats"
              />
              <Image
                src={"/catz.jpg"}
                height={50}
                width={50}
                className="rounded-full h-50 w-50 inline-block"
                alt="cats"
              />
              <Image
                src={"/saasMaster.png"}
                height={50}
                width={50}
                className="rounded-full h-50 w-50 inline-block"
                alt="cats"
              />
              <Image
                src={"/mikkel.jpg"}
                height={50}
                width={50}
                className="rounded-full h-50 w-50 inline-block"
                alt="cats"
              />
            </div>
            <div className="flex flex-col text-left">
              <span>4.5 🌟 🌟 🌟 🌟⭐️</span>
              <span>Loved by 800+ users</span>
            </div>
          </div>
        </div>
      </section>
      <section id="features mt-10">
        <h2 className="text-center text-3xl">Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={activity} />
            </span>
            <h3 className="text-md font-bold mt-5">Save time</h3>
            <p className="font-thin">
              Recorded long hours of video and waited for hours to render again
              as time-lapse? Record directly in time-lapse as you record a
              normal screen recording.
            </p>
          </div>
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={film} />
              {/* <i className="text-3xl inline">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6046_447)">
                    <path
                      d="M11.561 1.16602H2.43768C1.73536 1.16602 1.16602 1.73536 1.16602 2.43768V11.561C1.16602 12.2633 1.73536 12.8327 2.43768 12.8327H11.561C12.2633 12.8327 12.8327 12.2633 12.8327 11.561V2.43768C12.8327 1.73536 12.2633 1.16602 11.561 1.16602Z"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.08398 1.16602V12.8327"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.91602 1.16602V12.8327"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.16602 6.99951H12.8327"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.16602 4.08301H4.08268"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.16602 9.91602H4.08268"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.91602 9.91602H12.8327"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.91602 4.08301H12.8327"
                      stroke="#FDFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6046_447">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0 -0.000488281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </i> */}
            </span>
            <h3 className="text-md font-bold mt-5">Control output </h3>
            <p className="font-thin">
              Speed up or slow down video by adjusting the framerate from high
              to low and further more by customizing the video output.
            </p>
          </div>
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={pauseCircle} className="text-3xl" />
            </span>
            <h3 className="text-md font-bold mt-5">Autopausing</h3>
            <p className="font-thin">
              Recording is paused smartly based on inactivity, unexpected
              shutdown and screen lock
            </p>
          </div>
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={pauseCircle} className="text-3xl" />
            </span>
            <h3 className="text-md font-bold mt-5">
              Select screen or app window
            </h3>
            <p className="font-thin">
              Lapse lets you record an external display or a particular app
            </p>
          </div>
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={battery} className="text-3xl" />
            </span>
            <h3 className="text-md font-bold mt-5">Perfomance</h3>
            <p className="font-thin">
              Removes load on the processor as there is no re-rendering of the
              recorded video and is 5X faster.
            </p>
          </div>
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={music} className="text-3xl" />
            </span>
            <h3 className="text-md font-bold mt-5">Background sounds</h3>
            <p className="font-thin">
              Pick from the available songs or you can upload your own before
              the render
            </p>
          </div>
          <div className=" bg-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={crop} className="text-3xl" />
            </span>
            <h3 className="text-md font-bold mt-5">Crop video</h3>
            <p className="font-thin">
              Crop the video to your aspect ration or dimensions
            </p>
          </div>
          <div className="border-2 border-dashed border-neutral-800 rounded-md px-4 py-5 space-y-4 ">
            <span className="h-50 w-50  inline-block  p-4 rounded-full ring-2 ring-neutral-700">
              <Icon icon={moreVertical} className="text-3xl" />
            </span>
            <h3 className="text-md font-bold mt-5">More Soon</h3>
            <p className="font-thin">Click to follow the roadmap</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
