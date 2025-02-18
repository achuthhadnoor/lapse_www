'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from "motion/react";

const Footer = () => {
    return (
        <motion.footer className="py-8"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0, transitionDuration: "0.15s" }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h6 className="font-bold mb-4">LAPSE</h6>
                        <ul className="text-neutral-600">
                            <li><Link href="/">Getting started</Link></li>
                            <li><Link href="/changelog">Version History</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/pricing">Education</Link></li>
                            <li className='underline'><Link href="https://achuth.dev" target="_blank">Made by uiuxdx</Link></li>
                        </ul>
                    </div>
                    {/* Support Section */}
                    <div>
                        <h6 className="font-bold mb-4">SUPPORT</h6>
                        <ul className="text-neutral-600">
                            <li><Link href="/pricing">Licensing and Sales</Link></li>
                            <li><Link href="/pricing">License Manager</Link></li>
                            <li className='text-lg text-neutral-300 py-1'>LEGAL</li>
                            <li><Link href="/privacy">Privacy Statement</Link></li>
                            <li><Link href="/license">License Agreement</Link></li>
                            <li><Link href="/legal">Terms and Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Company & Community Section */}
                    <div>
                        <h6 className="font-bold mb-4">COMPANY</h6>
                        <ul className="text-neutral-600">
                            <li><Link href="/about-us">About Us</Link></li>
                            <li className='text-lg text-neutral-300 hidden'>COMMUNITY</li>
                            <li><Link href="/" className='hidden'>Feedback</Link></li>
                            <li><Link href="#" className='hidden'>Facebook</Link></li>
                            <li><Link href="#" className='hidden'>Twitter</Link></li>
                            <li><Link href="#" className='hidden'>Github</Link></li>
                        </ul>
                    </div>

                    {/* Subscribe to News Section */}
                    <div className='hidden'>
                        <h6 className="font-bold mb-4">SUBSCRIBE TO NEWS</h6>
                        <p className="text-neutral-600 mb-4">The latest news, tips, articles and resources. You will never be outdated.</p>
                        <div className="flex">
                            <input type="email" className="border border-neutral-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email address" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="mt-8 pt-8 border-t border-neutral-600 text-center text-neutral-600"> {/* Added top border */}
                    <p>&copy; Achuth Hadnoor. All rights reserved</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;