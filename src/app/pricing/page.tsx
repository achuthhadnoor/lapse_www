'use client'
import React from 'react'
import cl from 'classnames'
import { motion } from 'motion/react'
import Link from 'next/link';
export default function Pricing() {
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
        <div className='container flex flex-col gap-5  px-4'>
            <motion.div className='sm:text-center flex flex-col gap-4 py-20'
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }}>
                <h1 className='text-3xl'>Pricing plans for individuals and teams.</h1>
                <p className='text-md text-neutral-500'>All prices displayed in USD and VAT may apply.</p>
            </motion.div>
            <motion.div className='flex flex-col sm:flex-row w-full gap-10 justify-center'>
                <motion.div initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }} className='max-w-sm w-full border border-neutral-700 px-4 py-5 rounded-xl'>
                    <div className='flex flex-col gap-2 pb-10 border-b border-b-neutral-700'>
                        <span className='text-xl font-semibold'>Pro</span>
                        <div>
                            <span className='text-4xl font-bold'>$15</span>
                            <span className='text-neutral-500'>
                                / license
                            </span>
                        </div>
                    </div>
                    <ul className='px-2 py-5'>
                        <li className='py-1'><strong>✅ 2 macOS devices</strong></li>
                        <li className='py-1'><strong>✅ Buy once, use forever</strong></li>
                        <li className='py-1'>✅ Unlock all premium Features</li>
                        <li className='py-1 relative group cursor-help underline'>
                            <span className='invisible group-hover:visible absolute -top-8 left-0  bg-blue-700 text-xs p-2 rounded-md w-auto'>
                                After 1 year, you can continue using the app without any limitations, or you can renew for more updates
                            </span>
                            ✅  Bonus, one year of updates/support
                        </li>
                        <li className='py-1'>✅  Best for individual</li>
                    </ul>
                    <div className='flex justify-center'>
                        <Link href={"https://achuthhadnoor.gumroad.com/l/lapse_app"}>
                            <button className='px-4 py-2 bg-green-700 rounded-full text-green-200'>Buy Pro License</button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }}
                    className='max-w-sm w-full border border-neutral-700 px-4 py-5 rounded-xl'>
                    <div className='flex flex-col gap-2 pb-10 border-b border-b-neutral-700'>
                        <span className='text-xl font-semibold'>Custom License</span>
                        <div>
                            <span className='text-4xl font-bold'>$9</span>
                            <span className='text-neutral-500'>
                                / seat, starts with 3 seats
                            </span>
                        </div>
                    </div>
                    <ul className='px-2 py-5'>
                        <li className='py-1'><strong>✅ 1 macOS devices</strong></li>
                        <li className='py-1'><strong>✅ Buy once, use forever</strong></li>
                        <li className='py-1'>✅ Unlock all premium Features</li>
                        <li className='py-1 relative group cursor-help underline'>
                            <span className='invisible group-hover:visible absolute -top-8 left-0  bg-blue-700 text-xs p-2 rounded-md'>
                                After 1 year, you can continue using the app without any limitations, or you can renew for more updates
                            </span>
                            ✅  Bonus, one year of updates/support
                        </li>
                        <li className='py-1'>✅  Best for Team/Company</li>
                    </ul>
                    <div className='flex justify-center'>
                        <Link href={"https://achuthhadnoor.gumroad.com/l/lapse_app"}>
                            <button className='px-4 py-2 bg-green-700 rounded-full text-green-200'>Custom License</button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className='sm:text-center text-sm space-y-3' initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }}>
                <p className='text-neutral-600'>Supports Apple Silicon Chip, macOS 11+</p>
                <p className='text-blue-500 underline'>Already have a license, special offers?</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }}>
                <h3 className="mb-10 mt-5 sm:text-center text-7xl font-bold bg-gradient-to-b from-[#FAF7FF] to-[#C3C3C7] bg-clip-text text-transparent sm:text-4xl">
                    FAQ
                </h3>
                <ul className="flex flex-col gap-2 max-w-auto mx-auto max-w-3xl rounded-lg ">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="border-b-[1px] border-b-neutral-900 transition ease-linear"
                        >
                            <summary className=" flex justify-between px-4 py-2  transition ease-linear">
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
                            </summary>
                            <p
                                className={cl(
                                    // activeFQA !== index && "hidden",
                                    "px-4 py-2 transition ease-linear text-neutral-400"
                                )}
                            >
                                {faq.des}
                            </p>
                        </details>
                    ))}
                </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }}>
                <h3 className=" my-5 sm:text-center text-3xl font-bold bg-gradient-to-b from-[#FAF7FF] to-[#C3C3C7] bg-clip-text text-transparent sm:text-4xl">
                    Special offers for existing customers
                </h3>
                <p className='sm:text-center text-neutral-500'>You can renew or extend license for less</p>
                <div className='sm:space-x-4 py-4 space-y-4 max-w-sm sm:max-w-3xl mx-auto'>
                    <button className='max-w-sm px-4 py-2 bg-green-700 rounded-full text-green-200'>Buy Extra device for $4/device</button>
                    <button className='max-w-sm px-4 py-2 bg-green-700 rounded-full text-green-200'>Renew License for $3/device</button>
                    <button className='max-w-sm px-4 py-2 bg-green-700 rounded-full text-green-200'>License Manager</button>
                </div>
            </motion.div>
        </div>
    )
}
