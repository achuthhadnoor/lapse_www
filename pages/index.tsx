import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2">
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
        </div>
      </div>
    </Layout>
  );
};

export default Home;
