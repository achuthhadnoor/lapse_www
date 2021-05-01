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
      <header className="flex items-center mx-auto px-5">
        <span className="text-3xl">Lapse</span>
        <nav className="flex space-x-5 mx-10 text-sm sm:text-md">
          <a>Home</a>
          <a>Features</a>
          <a>Install</a>
        </nav>
      </header>
      <div className=" block h-30 max-w-md mt-10 px-5">
        <h1 className="text-4xl">Record your screen in time-lapse</h1>
        <p className="my-10">
          Recording a video for hours, and using diffrent tools to convert into time-lapse? This app records your screen in time-lpase directly
    </p>
        <div className="flex items-center space-x-4 p-4">
          <a className="gumroad-button" href="https://gum.co/lapse_app" target="_blank"><span className="gumroad-button-logo"></span>Get it now</a>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/Svg" className="Header__Svg-hmc9t3-0 hbrpxO"><path d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z" fill="white" fill-opacity="0.9"></path></svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="Header__Svg-hmc9t3-0 hbrpxO"><g clip-path="url(#clip0)"><path d="M6.6607 8.98215V14.7946L0.571411 13.9554V8.98215H6.6607ZM6.6607 2.34822V8.23215H0.571411V3.1875L6.6607 2.34822ZM15.4286 8.98215V16L7.33034 14.8839V8.98215H15.4286ZM15.4286 1.14286V8.23215H7.33034V2.25893L15.4286 1.14286Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
          <div className="">
          </div>
        </div>
      </div>
      <Video embedId="e4kv1lyq0n" />
      <section id="features">
        <h1 className="text-2xl font-bold my-10">Features</h1>
        <div className="grid grid-cols-1">
          {
            features.map((f, i) => (
              <div className="grid grid-cols-2">
                <div className="px-2">
                  <h2>{f.title}</h2>
                  <p>
                    {f.desc}
                  </p>
                </div>
                <Video id={f.id} />
              </div>
            ))
          }
        </div>
      </section>
    </Container>)
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}

export default Home;