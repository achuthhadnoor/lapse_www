import { useState, useEffect } from "react";

const Timer = ({ type }: any) => {
  const [timer, setTimer] = useState({ days: 0, hr: 0, min: 0, sec: 0 });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const countDownDate = new Date("May 31, 2023 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer({ days: days, hr: hours, min: minutes, sec: seconds });
      setIsLoading(false);
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  switch (type) {
    case "vertical":
      return (
        <div id="timer" className="mt-5">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl p-2 align-middle ">
              <div className="flex text-xs">
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.days}</span>
                  <span className=" text-green-500">Days</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.hr}</span>
                  <span className=" text-green-500">Hrs</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.min}</span>
                  <span className=" text-green-500">mins</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.sec}</span>
                  <span className=" text-green-500">Sec</span>
                </span>
              </div>
              <a href="https://achuthhadnoor.gumroad.com/l/learnvim">
                <button className="mt-2 w-full rounded-lg bg-orange-500 px-4 py-2  ring-purple-900 hover:ring-2 sm:text-sm">
                  Get It for{" "}
                  <span className="stroke-orange-600 text-purple-300 line-through">
                    $35
                  </span>{" "}
                  <span className="ring-1 ring-gray-900">$25</span>
                </button>
              </a>
            </div>
          )}
        </div>
      );
    case "horizontal":
      return (
        <div id="timer" className="mt-4">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl align-middle">
              <div className="bg-skin-secondary mt-5 inline-block justify-center rounded-xl px-2 align-middle ring ring-green-500">
                <div className="flex text-xs">
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.days}</span>
                    <span className=" text-green-300">Days</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.hr}</span>
                    <span className=" text-green-300">Hrs</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.min}</span>
                    <span className=" text-green-300">mins</span>
                  </span>
                  <span className="mr-4 flex flex-col p-2">
                    <span>{timer.sec}</span>
                    <span className=" text-green-300">Sec</span>
                  </span>
                  <a href="https://gum.co/lapse_app" target="_blank">
                    <button className="m-2 rounded-lg bg-green-800 px-4 py-2  outline-none ring-green-900 hover:bg-green-600 hover:ring-2 sm:text-sm">
                      Get It for
                      <span className="stroke-green-300 px-1 font-bold text-green-300 line-through">
                        $35
                      </span>
                      <span className="text-green-100">$25</span>
                    </button>
                  </a>
                </div>
              </div>
              <p className="text-xs py-4">
                Featured on <b>Producthunt newsletter</b> . 7 days money back
                guarantee.
              </p>
              <div className=" flex items-center justify-center gap-4 p-2 align-middle">
                <span className="text-green-300">Avalilable on</span>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  </svg>
                </span>
              </div>
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default Timer;
