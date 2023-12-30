"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cl from "classnames";
import { currentVersion } from "@/lib/constants";
import Try from "@/components/Try";
const LapseLogo = () => (
  <div className="absolute mt-5 flex items-end">
    <span className="absolute -left-8 pt-4">Lapse</span>
    <svg
      width="53"
      height="27"
      viewBox="0 0 53 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 21.9857C11.9449 22.1525 14.7231 23 17.6051 23C20.0457 23 22.4261 22.9317 24.8248 22.6431C29.0261 22.1376 33.2978 18.5066 36.2007 15.7122C37.5048 14.4569 38.794 12.4475 39.635 10.8286C39.9714 10.1809 40.8764 9.12016 40.9618 8.46189C41.0207 8.00878 41.4255 6.55164 41.7423 6.17035C41.9597 5.90882 43.1119 4.91536 42.9912 5.0058C42.6289 5.27703 41.0931 5.41903 40.6106 5.41903C38.8037 5.41903 37.0526 6.89879 35.3422 7.4476"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M42 5C42.5393 6.06967 43.875 7.45032 43.875 8.675C43.875 9.62814 44.3913 11.1479 45 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default function Home() {
  const [activeFQA, setActiveFQA] = useState(0);
  const faqs = [
    {
      title: "Is there an option to select monitors?",
      des: "Yes you can select one of the external monitors to start recording. However, the support for single app recording is in the roadmap.",
    },
    {
      title: "Is there a Windows app?",
      des: "Yes we support for MacOs and windows.",
    },
    {
      title: "Do you offer a trial?",
      des: "We didn’t implement a trial yet, but no worries—feel free to purchase the app. If you’re not happy send a short message. We’ll refund your order.",
    },
    {
      title: "Something’s wrong. How do I get in touch?",
      des: "Drop us a line, we’ll be happy to help!",
    },
    {
      title: "The menubar app doesn’t work. What can I do?",
      des: "Lapse requires the screen Record permission in “System Preferences › Security & Privacy › Privacy › Screen Recording. For macOS 10.15 (Catalina) the screen recording permission in “System Preferences › Security & Privacy › Privacy › Screen Recording” is required too.",
    },
    {
      title: "How much memory does Lapse use?",
      des: "Lapse uses ~150MB ",
    },
    {
      title: "Will you update Lapse?",
      des: "One year of updates with the licence purchaced.",
    },
  ];
  return (
    <main className="mx-4 pt-20 text-sm md:mx-12">
      <section className=" mb-24 flex flex-col items-center justify-center gap-5">
        <span className=" flex hidden w-auto items-center gap-2 rounded-md border border-green-300 bg-green-50 p-1 text-green-800 dark:bg-green-950 dark:text-green-300">
          <em className="rounded-md bg-green-400 px-2 py-1 text-green-800">
            New
          </em>
          Announcing Lapse 3.0! ✨
        </span>
        <div className="flex flex-col items-center p-2">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1775_15)">
              <rect
                x="0.5"
                y="0.5"
                width="79"
                height="79"
                rx="15.5"
                fill="url(#paint0_linear_1775_15)"
                stroke="url(#paint1_linear_1775_15)"
              />
              <path
                d="M24.2231 21H58C59.1046 21 60 21.8954 60 23V56.3227C60 57.6573 58.7177 58.6175 57.4371 58.2418L29.1825 49.9538C28.4824 49.7484 27.9496 49.178 27.7925 48.4655L22.2701 23.4308C21.9948 22.1826 22.9449 21 24.2231 21Z"
                stroke="url(#paint2_linear_1775_15)"
                strokeWidth="6"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1775_15"
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#272727" />
                <stop offset="1" stopColor="#141414" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1775_15"
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#373737" />
                <stop offset="1" stopColor="#373737" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1775_15"
                x1="40.5"
                y1="18"
                x2="40.5"
                y2="63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#73F75E" />
                <stop offset="1" stopColor="#52EF9A" stopOpacity="0.57" />
              </linearGradient>
              <clipPath id="clip0_1775_15">
                <rect width="80" height="80" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
          <div className="my-12 mt-2 text-center text-xl font-bold">
            Lapse.app
          </div>
        </div>
        <div className="mb-10 flex w-full max-w-3xl flex-col items-center gap-5 md:flex-row md:gap-2">
          <div className="  macOs flex w-full max-w-3xl flex-1  items-center justify-between rounded-md border border-neutral-700 px-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2111 5.87418C14.7888 5.20111 15.1895 4.28247 15.1895 3.35472C15.1895 3.22738 15.1801 3.10005 15.1521 3C14.2298 3.03638 13.1118 3.6003 12.441 4.36432C11.9193 4.94644 11.4347 5.87418 11.4347 6.80191C11.4347 6.94744 11.4534 7.08389 11.4721 7.12936C11.5279 7.13846 11.6211 7.15665 11.7143 7.15665C12.5527 7.15665 13.5962 6.61091 14.2111 5.87418ZM14.8727 7.34765C13.4751 7.34765 12.3479 8.17534 11.6211 8.17534C10.8478 8.17534 9.84161 7.40223 8.63042 7.40223C6.32918 7.40223 4 9.25771 4 12.7504C4 14.9333 4.85714 17.2345 5.92856 18.717C6.84161 19.9722 7.64285 21 8.78881 21C9.93478 21 10.4379 20.2632 11.8447 20.2632C13.2888 20.2632 13.6055 20.9818 14.8727 20.9818C16.121 20.9818 16.9503 19.8631 17.7329 18.7625C18.618 17.4982 18.9813 16.2704 19 16.2067C18.9254 16.1885 16.5311 15.2335 16.5311 12.5685C16.5311 10.2582 18.413 9.22133 18.5155 9.13946C17.2857 7.40223 15.3944 7.34765 14.8727 7.34765Z"
                fill="currentColor"
                fillOpacity="0.9"
              />
            </svg>
            <div className="flex items-center gap-2 p-2 align-middle">
              <span className="flex flex-col items-end">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 1H12C12.5523 1 13 1.44772 13 2V11.2601C13 11.9376 12.3405 12.419 11.6952 12.2125L4.38 9.87165C4.0634 9.77034 3.81785 9.51833 3.72477 9.19922L1.70667 2.28C1.52 1.64 2 1 2.66667 1Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <LapseLogo />
              </span>
              <svg
                width="19"
                height="10"
                viewBox="0 0 19 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.30059 9.50389H13.1902C13.7186 9.50389 14.2017 9.459 14.6392 9.36923C15.0768 9.27945 15.4525 9.07216 15.7663 8.74736C16.0842 8.41821 16.2844 8.02931 16.3669 7.58051C16.4495 7.13171 16.4908 6.6317 16.4908 6.08033V3.91338C16.4908 3.36627 16.4495 2.86832 16.3669 2.4196C16.2844 1.9708 16.0842 1.58182 15.7663 1.25273C15.4484 0.927897 15.0706 0.720607 14.633 0.630847C14.1995 0.541096 13.7186 0.496216 13.1902 0.496216H3.28823C2.76809 0.496216 2.28917 0.541096 1.85155 0.630847C1.41805 0.720607 1.04241 0.93004 0.724483 1.25914C0.410752 1.58396 0.210528 1.9708 0.123812 2.4196C0.0412974 2.86832 0 3.362 0 3.9005V6.08033C0 6.6317 0.0412974 7.13171 0.123812 7.58051C0.206406 8.02931 0.40663 8.41821 0.724483 8.74736C1.04241 9.07216 1.41805 9.27945 1.85155 9.36923C2.28917 9.459 2.77221 9.50389 3.30059 9.50389ZM3.13342 8.47171C2.81557 8.47171 2.50176 8.43962 2.19215 8.37553C1.88667 8.31136 1.63896 8.18318 1.44904 7.99082C1.26325 7.79847 1.1415 7.54416 1.08371 7.22789C1.02593 6.91162 0.996995 6.58895 0.996995 6.2598V3.75951C0.996995 3.42183 1.02593 3.09489 1.08371 2.77854C1.1415 2.458 1.26325 2.19942 1.44904 2.0028C1.63484 1.81053 1.88254 1.6844 2.19215 1.62458C2.50588 1.56048 2.82588 1.5284 3.15197 1.5284H13.3574C13.6753 1.5284 13.9869 1.56048 14.2924 1.62458C14.6021 1.6844 14.8519 1.81266 15.0418 2.00928C15.2275 2.20156 15.3493 2.45587 15.4071 2.77214C15.4649 3.08849 15.4938 3.41116 15.4938 3.74023V6.2598C15.4938 6.58895 15.4649 6.91162 15.4071 7.22789C15.3493 7.54416 15.2275 7.79847 15.0418 7.99082C14.8519 8.18744 14.6021 8.31776 14.2924 8.38193C13.9869 8.44176 13.6753 8.47171 13.3574 8.47171H3.13342ZM17.333 6.65731C17.4981 6.6445 17.6695 6.56966 17.847 6.43295C18.0245 6.29188 18.1752 6.09953 18.299 5.85588C18.4229 5.61232 18.4848 5.32592 18.4848 4.99685C18.4848 4.67197 18.4229 4.38779 18.299 4.14414C18.1752 3.9005 18.0245 3.70823 17.847 3.56716C17.6695 3.42609 17.4981 3.35134 17.333 3.3428V6.65731ZM2.88572 7.65749H13.6113C13.8259 7.65749 13.9993 7.64033 14.1314 7.6062C14.2636 7.57198 14.3771 7.50789 14.472 7.41384C14.5629 7.3198 14.6248 7.20442 14.6578 7.06762C14.6949 6.92655 14.7136 6.74495 14.7136 6.52272V3.47738C14.7136 3.25516 14.6949 3.07561 14.6578 2.93889C14.6248 2.79782 14.5629 2.68031 14.472 2.58627C14.3771 2.48796 14.2636 2.42386 14.1314 2.39391C13.9993 2.35969 13.8259 2.34262 13.6113 2.34262H2.88572C2.66695 2.34262 2.49146 2.35969 2.35932 2.39391C2.22727 2.42386 2.11582 2.48796 2.02498 2.58627C1.93415 2.68031 1.87018 2.79782 1.833 2.93889C1.79995 3.07561 1.78346 3.25516 1.78346 3.47738V6.52272C1.78346 6.74495 1.79995 6.92655 1.833 7.06762C1.87018 7.20442 1.93415 7.3198 2.02498 7.41384C2.11994 7.50789 2.23139 7.57198 2.35932 7.6062C2.49146 7.64033 2.66695 7.65749 2.88572 7.65749Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1053_107)">
                  <path
                    d="M7.15439 15.0958H11.6827C12.1775 15.0958 12.6266 14.9838 13.03 14.76C13.4333 14.5405 13.7535 14.2305 13.9905 13.8301C14.2317 13.4341 14.3523 12.9713 14.3523 12.4418C14.3523 11.9123 14.2317 11.4495 13.9905 11.0534C13.7535 10.6531 13.4333 10.3432 13.03 10.1235C12.6266 9.89971 12.1775 9.7878 11.6827 9.7878H7.15439C6.65956 9.7878 6.21047 9.89971 5.80713 10.1235C5.40379 10.3432 5.08157 10.6531 4.84038 11.0534C4.60334 11.4495 4.48486 11.9123 4.48486 12.4418C4.48486 12.9713 4.60334 13.4341 4.84038 13.8301C5.08157 14.2305 5.40379 14.5405 5.80713 14.76C6.21047 14.9838 6.65956 15.0958 7.15439 15.0958ZM11.8448 14.1208C11.5455 14.1165 11.2731 14.0389 11.0278 13.8882C10.7824 13.7376 10.587 13.5352 10.4415 13.2812C10.3001 13.0273 10.2294 12.7453 10.2294 12.4353C10.2294 12.1297 10.3001 11.8499 10.4415 11.5959C10.587 11.3419 10.7824 11.1395 11.0278 10.9889C11.2731 10.8382 11.5455 10.7629 11.8448 10.7629C12.1442 10.7629 12.4166 10.8382 12.662 10.9889C12.9115 11.1395 13.109 11.3419 13.2545 11.5959C13.4001 11.8456 13.4707 12.1232 13.4666 12.4289C13.4666 12.7388 13.3917 13.023 13.242 13.2812C13.0965 13.5396 12.9011 13.744 12.6558 13.8947C12.4146 14.0454 12.1442 14.1208 11.8448 14.1208ZM7.41011 8.79337H11.4332C11.9655 8.79337 12.452 8.67063 12.8927 8.42522C13.3376 8.1799 13.6911 7.83548 13.9531 7.39211C14.2192 6.94867 14.3523 6.43422 14.3523 5.84877C14.3523 5.26332 14.2192 4.74888 13.9531 4.30545C13.6911 3.86203 13.3376 3.51763 12.8927 3.27226C12.452 3.02687 11.9655 2.90417 11.4332 2.90417H7.41011C6.87376 2.90417 6.38308 3.02687 5.93814 3.27226C5.49736 3.51763 5.14392 3.86203 4.87782 4.30545C4.61579 4.74888 4.48486 5.26332 4.48486 5.84877C4.48486 6.43422 4.61579 6.94867 4.87782 7.39211C5.14392 7.83548 5.49736 8.1799 5.93814 8.42522C6.38308 8.67063 6.87376 8.79337 7.41011 8.79337ZM7.41011 7.81828C7.0609 7.81828 6.73445 7.73654 6.4309 7.57288C6.13151 7.40501 5.88825 7.17473 5.70111 6.88196C5.5182 6.5849 5.4267 6.24056 5.4267 5.84877C5.4267 5.45699 5.5182 5.11479 5.70111 4.82203C5.88825 4.525 6.13151 4.29468 6.4309 4.13109C6.73445 3.9632 7.0609 3.87925 7.41011 3.87925H11.4332C11.7783 3.87925 12.1006 3.9632 12.4 4.13109C12.7036 4.29468 12.9468 4.525 13.1297 4.82203C13.3169 5.11479 13.4105 5.45699 13.4105 5.84877C13.4105 6.24056 13.3169 6.5849 13.1297 6.88196C12.9468 7.17473 12.7036 7.40501 12.4 7.57288C12.1006 7.73654 11.7783 7.81828 11.4332 7.81828H7.41011ZM7.41011 7.37922C7.68459 7.38352 7.93201 7.31673 8.15236 7.17903C8.37694 7.03694 8.5557 6.84965 8.68878 6.61722C8.82603 6.38041 8.89461 6.11996 8.89461 5.83588C8.89876 5.55171 8.83433 5.29556 8.70124 5.06743C8.56823 4.83492 8.38732 4.652 8.15867 4.51854C7.93409 4.38078 7.68459 4.3119 7.41011 4.3119C7.1357 4.3119 6.88622 4.38078 6.66171 4.51854C6.43713 4.6563 6.25829 4.84145 6.12528 5.07388C5.99634 5.3063 5.93192 5.56245 5.93192 5.84232C5.93192 6.12641 5.99634 6.38471 6.12528 6.61722C6.25829 6.84965 6.43713 7.03479 6.66171 7.17258C6.88622 7.31028 7.1357 7.37922 7.41011 7.37922Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1053_109)">
                  <path
                    d="M8.7007 10.4675C9.16755 10.4675 9.6069 10.3758 10.018 10.1924C10.4292 10.009 10.7911 9.75527 11.1037 9.43133C11.4164 9.10349 11.6618 8.72686 11.8391 8.30145C12.0201 7.87604 12.1106 7.42133 12.1106 6.9374C12.1106 6.45347 12.0201 5.99876 11.8391 5.57335C11.6618 5.14794 11.4164 4.77326 11.1037 4.44932C10.7911 4.12538 10.4292 3.87168 10.018 3.68825C9.6069 3.50091 9.16755 3.40724 8.7007 3.40724C8.23312 3.40724 7.79376 3.50091 7.38264 3.68825C6.97224 3.87168 6.60816 4.12538 6.29186 4.44932C5.97845 4.77326 5.7338 5.14794 5.55647 5.57335C5.37914 5.99876 5.29083 6.45347 5.29083 6.9374C5.29083 7.42133 5.37914 7.87604 5.55647 8.30145C5.7338 8.72686 5.97845 9.10349 6.29186 9.43133C6.60816 9.75527 6.97224 10.009 7.38264 10.1924C7.79376 10.3758 8.23312 10.4675 8.7007 10.4675ZM8.7007 11.4394C8.10138 11.4394 7.53898 11.3223 7.01567 11.0882C6.49163 10.854 6.02984 10.53 5.62957 10.1163C5.23003 9.70259 4.91735 9.22451 4.69152 8.68197C4.46497 8.13952 4.35205 7.55794 4.35205 6.9374C4.35205 6.31686 4.46497 5.73528 4.69152 5.19283C4.91735 4.64641 5.23003 4.16831 5.62957 3.7585C6.02984 3.3448 6.49163 3.02086 7.01567 2.78668C7.54332 2.55251 8.105 2.43542 8.7007 2.43542C9.30001 2.43542 9.86168 2.55251 10.3857 2.78668C10.9098 3.02086 11.3715 3.3448 11.7711 3.7585C12.1706 4.17221 12.4833 4.65032 12.7099 5.19283C12.9357 5.73528 13.0486 6.31686 13.0486 6.9374C13.0486 7.55794 12.9357 8.13952 12.7099 8.68197C12.4833 9.22451 12.1706 9.70259 11.7711 10.1163C11.3715 10.53 10.9098 10.854 10.3857 11.0882C9.86168 11.3223 9.30001 11.4394 8.7007 11.4394ZM14.3725 13.5645C14.2856 13.5645 14.2024 13.5489 14.1235 13.5177C14.0438 13.4865 13.9722 13.4377 13.9085 13.3713L10.9061 10.2627L11.8333 9.33181L14.819 12.4287C14.8827 12.4912 14.9284 12.5634 14.9544 12.6454C14.9848 12.7274 15 12.8112 15 12.8971C15 13.022 14.9718 13.1332 14.9153 13.2308C14.8625 13.3323 14.7886 13.4123 14.6946 13.4708C14.6005 13.5333 14.4926 13.5645 14.3725 13.5645Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1053_111)">
                  <path
                    d="M13.9936 16.9454C14.0906 16.9454 14.1866 16.9142 14.2825 16.852C14.3853 16.7897 14.5205 16.6743 14.6892 16.5061L16.8017 14.4031C16.8745 14.3346 16.9126 14.2567 16.9195 14.1695C16.9311 14.076 16.9068 13.9887 16.8468 13.9077C16.5636 13.5276 16.1696 13.1974 15.6646 12.917C15.1642 12.6365 14.6084 12.4963 13.9936 12.4963C13.3684 12.4963 12.7998 12.6428 12.2879 12.9356C11.7818 13.2285 11.3877 13.5713 11.1046 13.9638C11.063 14.0324 11.048 14.1071 11.0595 14.1881C11.078 14.2629 11.1231 14.3346 11.1959 14.4031L13.3083 16.5061C13.4701 16.6743 13.603 16.7897 13.7047 16.852C13.8075 16.9142 13.9034 16.9454 13.9936 16.9454ZM8.92052 12.0383C9.01065 12.1319 9.11005 12.1755 9.21867 12.1692C9.32614 12.163 9.42551 12.11 9.51565 12.0104C10.0334 11.4059 10.6932 10.9105 11.4929 10.5242C12.2937 10.1379 13.1269 9.94779 13.9936 9.95401C14.873 9.94779 15.712 10.1441 16.5128 10.5429C17.3136 10.9355 17.9781 11.4339 18.5085 12.0383C18.5928 12.1319 18.6853 12.1786 18.7881 12.1786C18.8898 12.1723 18.9834 12.1225 19.0678 12.029L20.4129 10.6551C20.4857 10.5803 20.5238 10.4993 20.5308 10.412C20.5366 10.3186 20.5088 10.2313 20.4487 10.1503C20.0096 9.59582 19.4595 9.1004 18.7974 8.6642C18.1352 8.22178 17.3945 7.87602 16.5763 7.6267C15.757 7.37127 14.8973 7.2435 13.9936 7.2435C13.0911 7.2435 12.2301 7.37127 11.412 7.6267C10.5996 7.87602 9.86233 8.22178 9.20018 8.6642C8.53802 9.1004 7.98797 9.59582 7.54768 10.1503C7.48181 10.2313 7.45177 10.3154 7.45754 10.4027C7.46332 10.49 7.5026 10.5741 7.5754 10.6551L8.92052 12.0383ZM5.30928 8.29033C5.39364 8.38377 5.48956 8.43054 5.59818 8.43054C5.71259 8.42432 5.8085 8.37443 5.88708 8.281C6.95832 7.1095 8.18325 6.22167 9.56072 5.61714C10.9393 5.0065 12.4173 4.70119 13.9936 4.70119C15.5767 4.70119 17.0571 5.0065 18.4357 5.61714C19.8201 6.22789 21.045 7.11883 22.1105 8.29033C22.1891 8.37132 22.2815 8.41188 22.3901 8.41188C22.4988 8.41188 22.5924 8.3651 22.6698 8.27166L23.8624 7.02851C23.9398 6.95373 23.9791 6.86963 23.9791 6.77619C23.9849 6.67653 23.9583 6.5892 23.8982 6.51442C23.2175 5.64836 22.3601 4.87562 21.3247 4.19643C20.2893 3.51103 19.1429 2.97517 17.8856 2.58885C16.633 2.19628 15.3364 2 13.9936 2C12.6519 2 11.3519 2.19628 10.0934 2.58885C8.83616 2.97517 7.68981 3.51103 6.6544 4.19643C5.62476 4.87562 4.77078 5.64836 4.09014 6.51442C4.03005 6.5892 4 6.67653 4 6.77619C4.00578 6.86963 4.04507 6.95373 4.11788 7.02851L5.30928 8.29033Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
          </div>
          OR
          <div className="  windows flex w-full max-w-3xl flex-1  items-center justify-between rounded-md border border-neutral-700 px-4">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.16058 8.4821V14.2946L0.0712891 13.4554V8.4821H6.16058ZM6.16058 1.84817V7.7321H0.0712891V2.68746L6.16058 1.84817ZM14.9285 8.4821V15.5L6.83022 14.3839V8.4821H14.9285ZM14.9285 0.642822V7.7321H6.83022V1.75889L14.9285 0.642822Z"
                fill="currentColor"
              />
            </svg>
            <div className="flex items-center justify-center gap-4 p-2 ">
              {/* <span className="text-2xl">^</span> */}
              <span className="flex flex-col items-end">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 1H12C12.5523 1 13 1.44772 13 2V11.2601C13 11.9376 12.3405 12.419 11.6952 12.2125L4.38 9.87165C4.0634 9.77034 3.81785 9.51833 3.72477 9.19922L1.70667 2.28C1.52 1.64 2 1 2.66667 1Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <LapseLogo />
              </span>
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1053_111)">
                  <path
                    d="M13.9936 16.9454C14.0906 16.9454 14.1866 16.9142 14.2825 16.852C14.3853 16.7897 14.5205 16.6743 14.6892 16.5061L16.8017 14.4031C16.8745 14.3346 16.9126 14.2567 16.9195 14.1695C16.9311 14.076 16.9068 13.9887 16.8468 13.9077C16.5636 13.5276 16.1696 13.1974 15.6646 12.917C15.1642 12.6365 14.6084 12.4963 13.9936 12.4963C13.3684 12.4963 12.7998 12.6428 12.2879 12.9356C11.7818 13.2285 11.3877 13.5713 11.1046 13.9638C11.063 14.0324 11.048 14.1071 11.0595 14.1881C11.078 14.2629 11.1231 14.3346 11.1959 14.4031L13.3083 16.5061C13.4701 16.6743 13.603 16.7897 13.7047 16.852C13.8075 16.9142 13.9034 16.9454 13.9936 16.9454ZM8.92052 12.0383C9.01065 12.1319 9.11005 12.1755 9.21867 12.1692C9.32614 12.163 9.42551 12.11 9.51565 12.0104C10.0334 11.4059 10.6932 10.9105 11.4929 10.5242C12.2937 10.1379 13.1269 9.94779 13.9936 9.95401C14.873 9.94779 15.712 10.1441 16.5128 10.5429C17.3136 10.9355 17.9781 11.4339 18.5085 12.0383C18.5928 12.1319 18.6853 12.1786 18.7881 12.1786C18.8898 12.1723 18.9834 12.1225 19.0678 12.029L20.4129 10.6551C20.4857 10.5803 20.5238 10.4993 20.5308 10.412C20.5366 10.3186 20.5088 10.2313 20.4487 10.1503C20.0096 9.59582 19.4595 9.1004 18.7974 8.6642C18.1352 8.22178 17.3945 7.87602 16.5763 7.6267C15.757 7.37127 14.8973 7.2435 13.9936 7.2435C13.0911 7.2435 12.2301 7.37127 11.412 7.6267C10.5996 7.87602 9.86233 8.22178 9.20018 8.6642C8.53802 9.1004 7.98797 9.59582 7.54768 10.1503C7.48181 10.2313 7.45177 10.3154 7.45754 10.4027C7.46332 10.49 7.5026 10.5741 7.5754 10.6551L8.92052 12.0383ZM5.30928 8.29033C5.39364 8.38377 5.48956 8.43054 5.59818 8.43054C5.71259 8.42432 5.8085 8.37443 5.88708 8.281C6.95832 7.1095 8.18325 6.22167 9.56072 5.61714C10.9393 5.0065 12.4173 4.70119 13.9936 4.70119C15.5767 4.70119 17.0571 5.0065 18.4357 5.61714C19.8201 6.22789 21.045 7.11883 22.1105 8.29033C22.1891 8.37132 22.2815 8.41188 22.3901 8.41188C22.4988 8.41188 22.5924 8.3651 22.6698 8.27166L23.8624 7.02851C23.9398 6.95373 23.9791 6.86963 23.9791 6.77619C23.9849 6.67653 23.9583 6.5892 23.8982 6.51442C23.2175 5.64836 22.3601 4.87562 21.3247 4.19643C20.2893 3.51103 19.1429 2.97517 17.8856 2.58885C16.633 2.19628 15.3364 2 13.9936 2C12.6519 2 11.3519 2.19628 10.0934 2.58885C8.83616 2.97517 7.68981 3.51103 6.6544 4.19643C5.62476 4.87562 4.77078 5.64836 4.09014 6.51442C4.03005 6.5892 4 6.67653 4 6.77619C4.00578 6.86963 4.04507 6.95373 4.11788 7.02851L5.30928 8.29033Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <h1 className="max-w-3xl text-center text-5xl font-bold md:text-6xl">
          Save instant time-lapse screen recording ✨
        </h1>
        <p className="text-center text-lg font-light text-neutral-400 md:text-xl">
          A menubar app to record screen in time-lapse on macOs and windows
        </p>
        <div className="mt-5  flex gap-2 text-center md:gap-5">
          <Link
            href={"/"}
            className="rounded-full bg-gradient-to-r from-green-500 to-green-800 px-4 py-2 font-bold text-green-900 ring-green-300 transition ease-linear hover:ring-2"
          >
            Buy 25$ <del className="font-normal text-green-200">35$</del>
          </Link>
          <Link
            href={"#download"}
            className="hidden rounded-full bg-neutral-800 px-4 py-2 text-neutral-300  ring-neutral-500 transition ease-linear hover:ring-2 md:block"
          >
            Download
          </Link>
          {/* <Link
            href={"/"}
            className="px-4 py-2 hidden md:block  text-neutral-800 dark:text-neutral-400  rounded-full ring-2 ring-neutral-500 transition ease-linear"
          >
            Try now in browser
          </Link> */}
          <Try />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span>⭐ ⭐ ⭐ ⭐ ⭐ 4.8</span>
          <div className="my-2 flex flex-col items-center gap-2 text-sm sm:flex-row">
            <span>Used by </span>
            <span className="[&>*]:border-primary my-1 ml-1 flex -space-x-2  [&>*]:inline-block [&>*]:h-6 [&>*]:w-6 [&>*]:rounded-full [&>*]:border-2 [&>*]:sm:h-8 [&>*]:sm:w-8">
              <Image
                src="/avatars/catz.jpg"
                alt="Catz"
                height={25}
                width={25}
                className="rounded-full ring-1 ring-green-400"
              />
              <Image
                src="/avatars/epitomi.png"
                alt="epitomi"
                height={25}
                width={25}
                className="rounded-full ring-1 ring-green-400"
              />
              <Image
                src="/avatars/mikkel.jpg"
                alt="mikkel"
                height={25}
                width={25}
                className="rounded-full ring-1 ring-green-400"
              />
              <Image
                src="/avatars/afvallenzondergedoe.png"
                alt="afvallenzondergedoe"
                height={25}
                width={25}
                className="rounded-full ring-1 ring-green-400"
              />
              <Image
                src="/avatars/Aileenooi.jpeg"
                alt="Aileenooi"
                height={25}
                width={25}
                className="rounded-full ring-1 ring-green-400"
              />
              <Image
                src="/avatars/crystal.png"
                alt="crystal"
                height={25}
                width={25}
                className="rounded-full ring-1 ring-green-400"
              />
            </span>
            <span className="text-center md:text-left">
              + thousands of designers, educators, gamers and more!
            </span>
          </div>
        </div>
        <video
          width="640"
          height="360"
          controls
          poster=""
          className="rounded-md"
        >
          <source src="/lapse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className=" mx-auto mb-24 mt-24 flex max-w-3xl flex-col items-center ">
        <h2 className="mb-10 mt-5 text-4xl font-bold">How it works</h2>
        <div className="flex flex-col-reverse gap-4 leading-loose md:flex-row">
          <p className=" flex flex-col text-center text-lg leading-loose md:block md:flex-row">
            <i className="rounded-md bg-neutral-200 p-2 dark:bg-neutral-800 ">
              Start Recording
            </i>
            <i className="rotate-90 md:rotate-0">→</i>{" "}
            <i className="rounded-md bg-neutral-200 p-2 dark:bg-neutral-800 ">
              Pause / Resume
            </i>{" "}
            <i className="rotate-90 md:rotate-0">→</i>
            <i className="rounded-md bg-neutral-200 p-2 dark:bg-neutral-800 ">
              Stop Recording
            </i>{" "}
            <i className="rotate-90 md:rotate-0">→</i>
            <i className="rounded-md bg-neutral-200 p-2 dark:bg-neutral-800 ">
              Save video
            </i>{" "}
            <br />
            <span className="mt-4 text-sm text-neutral-400">
              * You do not have to re-render the entire video again!
            </span>
          </p>
        </div>
      </section>
      <section className=" mx-auto mb-24 mt-24 flex max-w-5xl flex-col items-center justify-center md:flex-row ">
        <div className="w-full flex-1 text-left">
          <h2 className="mb-10 mt-5 text-4xl font-bold">
            Capture a screen or an app
          </h2>
          <p className="text-neutral-400">
            Capture the essence of a single app with Lapse, your dedicated
            time-lapse companion. Choose your focus, whether it's seamlessly
            switching between tabs or navigating between applications like
            Photoshop and your browser.
          </p>
        </div>
        <Image
          className="rounded-md"
          src={"/app_sel.png"}
          alt={"Screen recording"}
          width={500}
          height={500}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </section>
      <section className=" mx-auto mb-24 mt-24 flex max-w-6xl  flex-col items-center gap-10 text-center md:flex-row-reverse">
        <div className="text-left">
          <h2 className="mb-10 mt-5 text-4xl font-bold">
            Ultra high-definition. 4K & 8K support. Sharp details.
          </h2>
          <p className="text-neutral-400">
            Sharp, expansive, and cutting-edge, Lapse introduces compatibility
            with the latest ultra-high-definition video. With export
            capabilities up to 8K resolution, experience unparalleled clarity,
            ensuring each pixel is captured with precision for remarkably sharp
            and clear time-lapses.
          </p>
        </div>
        <Image
          className="rounded-md"
          src={"/quality.png"}
          alt={"Screen recording"}
          // height={400}
          // width={200}
          width={500}
          height={500}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </section>
      <section className=" mx-auto mb-24 mt-24 flex max-w-6xl flex-col items-center md:flex-row  ">
        <div className="">
          <h2 className="mb-10 mt-5 text-4xl font-bold">
            Pause and resume your time-lapse anytime
          </h2>
          <p>
            You might work for long hours and your system might go into sleep
            and there is a possibility of recording empty frames, Lapse auto
            pauses and resumes for you.
          </p>
        </div>
        <Image
          className="rounded-md"
          src={"/pause.png"}
          alt={"Screen recording"}
          width={500}
          height={500}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </section>
      <section className=" mx-auto mb-24 mt-24 flex max-w-6xl  flex-col items-center gap-10 md:flex-row-reverse ">
        <div>
          <h2 className="mb-10 mt-5 text-4xl font-bold">
            Control speed of the recording.
          </h2>
          <p>
            Tailor the time-lapse duration by customizing the output video
            format and selecting the export time. Adjust the frames per second
            (FPS) to determine the length of your time-lapse—whether you prefer
            a 4-minute video at 12fps, a 1.5-minute clip at 30fps, or a swift
            48-second sequence at 60fps. The flexibility is yours to condense it
            as much as you desire!
          </p>
        </div>
        <Image
          className="rounded-md"
          src={"/frameRate.png"}
          alt={"Screen recording"}
          width={500}
          height={500}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </section>
      <section className=" mx-auto mb-24 mt-24 flex max-w-6xl  flex-col items-center justify-center gap-10 md:flex-row-reverse">
        <div className="max-w-3xl">
          <h2 className="mb-10 mt-5 text-4xl font-bold">
            Auto pausing - helps to remove unwanted shots
          </h2>
          <p>
            You don't want to record screen when you are inactive to prevent
            further edits lapse auto pauses and resumes when depending on your
            idle activity.
          </p>
        </div>
        {/* <div>
          <h2 className="text-4xl font-bold mt-5 mb-10">
            Auto pausing - helps to remove unwanted shots
          </h2>
          <p>
            You don't want to record screen when you are inactive to prevent
            further edits lapse auto pauses and resumes when depending on your
            idle activity.
          </p>
        </div> */}
      </section>
      <section className=" mx-auto mb-24 mt-24 flex  max-w-6xl flex-col items-center justify-center gap-10">
        <h2 className="mb-10 mt-5 text-6xl font-bold">Feedback</h2>
        <p className="text-neutral-500">
          Take our word for it or see what others are saying:
        </p>
        <div className="grid-col-1 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-neural-400 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent  bg-clip-border p-4 shadow-none dark:bg-neutral-800">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-md"
                src={"/avatars/default.png"}
                alt={"Medias"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Medias
                  </h5>
                  <div className="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Great timesaver!
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                "So far, I've been using different software for my timelapse
                recordings, but I've always had to do a framerate conversion
                afterwards. I just wanted to give a shoutout to Achuth for being
                incredibly helpful in the embedded chat on his website. He
                responded super quickly. Best wishes! "
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border  p-4 shadow-none dark:bg-neutral-800">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/mikkel.jpg"}
                alt={"Mikkel"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Mikkel
                  </h5>
                  <div className="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Appsumo user
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                "I found solution to all my design needs from Creative Tim. I
                use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!"
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border  p-4 shadow-none dark:bg-neutral-800">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/saasMaster.png"}
                alt={"Screen recording"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    SaasMaster
                  </h5>
                  <div className="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Exactly as advertised
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {`Lapse can record your screen in high speed mode. Not really a work tool but more of a cool gadget. You can record your workflow or your day work and display it in a quick video.

                PROS:
                Works just like advertised
                Records up to 8K
                Available for Windows and Mac
                Unlimited recordings
                Frame rate selection

                CONS:
                No regular recording
                Not direct install from App Store (mac) permission is required to install

                Video example here: https://youtu.be/EJJOjh8pZFM
`}
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border  p-4 shadow-none dark:bg-neutral-800">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/epitomi.png"}
                alt={"epitomi"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Epitomi
                  </h5>
                  <div className="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Good but needs more basic features
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {` Pros [+] It exports easily [+] It does what it supposed to do
                Cons [-] No custom region yet [-] No focus on specific app yet
                [-] No basic effects editor (i.e. put a rectangle or an arrow)
                [-] No web dashboard app for knowing we own it besides receipt`}
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border  p-4 shadow-none dark:bg-neutral-800">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/default.png"}
                alt={"Screen recording"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Xeferus
                  </h5>
                  <div className="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Works great!
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                I love Lapse, It's a pretty cool piece of software. It works as
                advertised and the quality of footage is great. My only request
                would be to add a GIF convertor and dual screen recording
                (currently you can record on the active screen).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" mx-auto mb-24 mt-24 flex  max-w-6xl flex-col items-center justify-center gap-10">
        <h2 className="mb-10 mt-5 text-6xl font-bold">FAQ</h2>
        <ul className="max-w-auto w-full max-w-3xl rounded-lg bg-neutral-200 dark:bg-neutral-800">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="mb-2 border-b-[1px] border-b-neutral-900"
              onClick={() => {
                setActiveFQA(index);
              }}
            >
              <div className=" flex justify-between px-4 py-2">
                <h3 className="text-lg">{faq.title}</h3>
                <span className="flex items-center p-2">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6l-4 4-4-4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
              <p
                className={cl(
                  activeFQA !== index && "hidden",
                  "px-4 py-2 text-neutral-600 transition ease-linear dark:text-neutral-400"
                )}
              >
                {faq.des}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section
        className=" mx-auto mt-24 flex max-w-6xl  flex-col items-center justify-center gap-10 py-5"
        id="download"
      >
        <div className="flex flex-col items-center p-2">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1775_15)">
              <rect
                x="0.5"
                y="0.5"
                width="79"
                height="79"
                rx="15.5"
                fill="url(#paint0_linear_1775_15)"
                stroke="url(#paint1_linear_1775_15)"
              />
              <path
                d="M24.2231 21H58C59.1046 21 60 21.8954 60 23V56.3227C60 57.6573 58.7177 58.6175 57.4371 58.2418L29.1825 49.9538C28.4824 49.7484 27.9496 49.178 27.7925 48.4655L22.2701 23.4308C21.9948 22.1826 22.9449 21 24.2231 21Z"
                stroke="url(#paint2_linear_1775_15)"
                strokeWidth="6"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1775_15"
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#272727" />
                <stop offset="1" stopColor="#141414" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1775_15"
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#373737" />
                <stop offset="1" stopColor="#373737" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1775_15"
                x1="40.5"
                y1="18"
                x2="40.5"
                y2="63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#73F75E" />
                <stop offset="1" stopColor="#52EF9A" stopOpacity="0.57" />
              </linearGradient>
              <clipPath id="clip0_1775_15">
                <rect width="80" height="80" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
          <div className="my-12 mt-2 text-center text-xl font-bold">
            Lapse.app
          </div>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
            {/* <Timer type="horizontal" /> */}
            <a
              href={`https://github.com/achuthhadnoor/lapse_www/releases/download/${currentVersion}/Lapse-${currentVersion}-x64.dmg`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                  <span className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4656 13.3437C18.4375 10.4637 20.8134 9.08218 20.9219 9.01331C19.5853 7.05996 17.5036 6.79179 16.7627 6.76048C14.9919 6.58101 13.3078 7.8029 12.4083 7.8029C11.513 7.8029 10.1242 6.78657 8.65709 6.81266C6.72565 6.84292 4.94551 7.93542 3.95109 9.66443C1.9466 13.1433 3.43979 18.2991 5.39419 21.1237C6.34792 22.5042 7.48842 24.0558 8.98266 23.9985C10.4237 23.9421 10.9673 23.0677 12.7078 23.0677C14.4493 23.0677 14.9377 23.9985 16.4622 23.9703C18.0107 23.9432 18.9936 22.5637 19.9411 21.178C21.0388 19.5742 21.4896 18.0236 21.5167 17.9433C21.4812 17.9266 18.4959 16.7829 18.4656 13.3437Z"
                        fill="black"
                      ></path>
                      <path
                        d="M15.7876 3.83263C16.6255 2.8163 17.191 1.40658 17.0376 0C15.8303 0.0490426 14.3674 0.802421 13.5013 1.81666C12.725 2.71613 12.0457 4.15089 12.2273 5.53138C13.5744 5.63573 14.9486 4.84583 15.7876 3.83263Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Download for </span>
                    <span className="font-semibold">macOS</span>
                  </div>
                </div>
                <div className="mt-2 p-1 text-sm text-gray-500">
                  macOS 10.13 or higher
                </div>
              </div>
            </a>
            <a
              href={`https://github.com/achuthhadnoor/lapse_www/releases/download/${currentVersion}/Lapse-${currentVersion}-arm64.dmg`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                  <span className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4656 13.3437C18.4375 10.4637 20.8134 9.08218 20.9219 9.01331C19.5853 7.05996 17.5036 6.79179 16.7627 6.76048C14.9919 6.58101 13.3078 7.8029 12.4083 7.8029C11.513 7.8029 10.1242 6.78657 8.65709 6.81266C6.72565 6.84292 4.94551 7.93542 3.95109 9.66443C1.9466 13.1433 3.43979 18.2991 5.39419 21.1237C6.34792 22.5042 7.48842 24.0558 8.98266 23.9985C10.4237 23.9421 10.9673 23.0677 12.7078 23.0677C14.4493 23.0677 14.9377 23.9985 16.4622 23.9703C18.0107 23.9432 18.9936 22.5637 19.9411 21.178C21.0388 19.5742 21.4896 18.0236 21.5167 17.9433C21.4812 17.9266 18.4959 16.7829 18.4656 13.3437Z"
                        fill="black"
                      ></path>
                      <path
                        d="M15.7876 3.83263C16.6255 2.8163 17.191 1.40658 17.0376 0C15.8303 0.0490426 14.3674 0.802421 13.5013 1.81666C12.725 2.71613 12.0457 4.15089 12.2273 5.53138C13.5744 5.63573 14.9486 4.84583 15.7876 3.83263Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Download for </span>
                    <span className="font-semibold">macOS M1</span>
                  </div>
                </div>
                <div className="mt-2 p-1 text-sm text-gray-500">
                  macOS 10.13 or higher
                </div>
              </div>
            </a>
            <a href="https://github.com/achuthhadnoor/lapse_www/releases/download/1.0.4/Lapse.Setup.1.0.3.exe">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                  <span className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4.13676L9.99656 2.90616V11.5705H1V4.13676ZM11.0802 2.73539L23 1V11.4977H11.0802V2.73539ZM1 12.4872H9.99656V21.1767L1 19.921V12.4872ZM11.0802 12.6027H23V23L11.0802 21.3174"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">Download for </span>
                    <span className="text-2xl font-semibold">windows</span>
                  </div>
                </div>
                <div className="mt-2 p-1 text-center text-sm text-gray-500 ">
                  Windows 10 or 11
                </div>
              </div>
            </a>
          </div>
          <div className="mt-5  flex gap-2 text-center md:gap-5">
            <Link href="https://twitter.com/achuth_hadnoor" target="_blank">
              <svg
                width="24"
                height="25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#prefix__clip0_1418_676)">
                  <path
                    d="M14.286 10.276L23.222.112h-2.117l-7.763 8.823L7.147.112H0l9.37 13.344L0 24.111h2.117l8.192-9.32 6.544 9.32H24M2.88 1.674h3.253l14.97 20.953H17.85"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="prefix__clip0_1418_676">
                    <path
                      fill="currentColor"
                      transform="translate(0 .112)"
                      d="M0 0h24v24H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="mt-5  flex gap-2 text-center text-neutral-400 dark:text-neutral-600 md:gap-5">
            Made by{" "}
            <Image
              className="rounded-full"
              src={"/achuth.jpg"}
              alt={"Screen recording"}
              width={24}
              height={24}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />{" "}
            Achuth Hadnoor. All right reserved.
          </div>
          <div>
            <Link
              href={
                "https://www.notion.so/achuth/Refund-Policy-dd800e71934c4b9c85ce12bf504544f4?pvs=4"
              }
              className="p-2 text-neutral-400 transition hover:text-neutral-100"
            >
              Refund
            </Link>
            <Link
              href={
                "https://www.notion.so/achuth/Press-Kit-1a3b994e395d43efbaf6727fed4429f1?pvs=4"
              }
              className="p-2 text-neutral-400 transition hover:text-neutral-100"
            >
              Press kit
            </Link>
            <Link
              href={
                "https://www.notion.so/achuth/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94?pvs=4"
              }
              className="p-2 text-neutral-400 transition hover:text-neutral-100"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
