import Link from "next/link";
import Icon from "react-icons-kit";
import {twitter} from 'react-icons-kit/feather'
// import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  const _date = new Date();
  return ( 
    <footer className='sm:px-20 px-4'>
      <div className="py-10 px-2 flex flex-col sm:flex-row">
        <div className="grid sm:grid-rows-3 sm:grid-flow-col grid-flow-row text-gray-400 flex-1 gap-2 sm:gap-0">
          <Link href="#feedback">Feedback</Link>
          {/* <ExternalLink href="https://gum.co/lapse_app">Buy</ExternalLink> */}
          <ExternalLink href="https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15">Changelog</ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Press-Kit-1a3b994e395d43efbaf6727fed4429f1">Press kit</ExternalLink >
          <ExternalLink href="https://achuth.notion.site/Privacy-Policy-ec65b78f07c443e2a3bcd46d834a263d">Privacy policy</ExternalLink >
          <ExternalLink href="https://achuth.notion.site/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94">{'Terms & conditions'}</ExternalLink >
          <ExternalLink href="https://achuth.notion.site/Refund-Policy-dd800e71934c4b9c85ce12bf504544f4">Refund Policy</ExternalLink >
        </div>
        <span className="flex-1"/>
        <div className='px-2 sm:px-10 py-4 bg-skin-secondary rounded-lg mt-10 sm:mt-0  max-w-lg'>
          <h3 className='text-2xl mb-5'>Be the first to know</h3>
          <p className='text-sm mb-5 text-gray-300'>We’ll inform you about new tips, apps and deals.
            No spam, we promise.</p>
          <form className='flex sm:flex-row flex-col p-2 bg-gray-900 rounded-lg'>
            <input type="email" placeholder='join@email.addess' className='px-4 py-2 bg-transparent outline-none  flex-1' />
            <button type='submit' className='px-4 py-2 bg-indigo-500 rounded-md mt-5 sm:mt-0 w-full sm:w-fit '>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex justify-between text-xs py-5">
      <span>Copyright © {_date.getFullYear()} <i className="font-mono">Lapse</i></span>
      <span><a href="https://twitter.com/achuth_hadnoor"><Icon icon={twitter}/></a></span>
      </div>
      </footer>
  );
}