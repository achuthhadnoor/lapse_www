import { useState, useEffect } from 'react'
import axios from 'axios'
import cn from 'classnames'
import Container from '../components/Container'

const Download = (props: any) => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [os, setOs] = useState('macos')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCode(props.code)
  }, [])
  const submitApi = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (code !== 'null' && code.length === 19) {
      setLoading(true)

      axios.post('api/verify', { email: email, phrase: code }).then((res) => {
        if (res.data.status === 503) {
          alert(res.data.message)
          return
        } else if (res.data.status === 403) {
          alert(res.data.message)
          return
        }
        console.log(res.data)
        if (os === 'macos') {
          window.open(
            'https://github.com/achuthhadnoor/lapse_www/releases/download/1.0.1/Lapse-1.0.1-x64.dmg',
            '_blank'
          )
          setLoading(false)
          return
        } else if (os === 'macosM1') {
          window.open(
            'https://github.com/achuthhadnoor/lapse_www/releases/download/1.0.1/Lapse-1.0.1-arm64.dmg',
            '_blank'
          )
          setLoading(false)
          return
        }
        window.open(
          'https://github.com/achuthhadnoor/www/releases/download/1.0.1/Lapse.Setup.1.0.10.exe'
        )
        setLoading(false)
      })
    }
  }
  let selectOs = (os: any) => {
    setOs(os)
  }
  return (
    <Container
      title={'Lapse | Download '}
      description="Download lapse for macOs"
    >
      <section className=" mx-auto mt-24 max-w-4xl">
        <h1 className="flex justify-center align-middle text-3xl">
          Download Lapse
        </h1>
        <div className="my-5 mx-auto mt-2">
          <h2 className="text-lg font-semibold">👋 Hello</h2>
          <p className="my-5 max-w-xl leading-loose">
            Please enter your name, email and license code below to download
            lapse and enjoy creating amazing time-lapse videos .
          </p>
          <p className="my-5 max-w-xl leading-loose">
            After submission, you will recieve the
            <span className="mx-1 rounded bg-indigo-800 p-1 text-indigo-200">
              {' '}
              .dmg / .exe
            </span>
            file where you will have to enter both email and the code
          </p>
          <a className="">
            Thank you,
            <br />
            Achuth
          </a>
        </div>
        <div className="my-5 mx-auto rounded-md bg-gray-900 px-4 py-5 shadow-md">
          <h3 className="mt-2 text-lg">
            Start recoding your amazing digital work in time-lapse
          </h3>
          <form
            className="flex max-w-md flex-col gap-4 py-4"
            onSubmit={submitApi}
          >
            <input
              className={cn(
                loading && 'cursor-not-allowed',
                'rounded bg-gray-800 px-2 py-1 text-sm shadow outline-none focus:ring-2 focus:ring-indigo-400'
              )}
              type="email"
              placeholder="join@email.address"
              required
              value={email}
              onChange={({ target }) => {
                setEmail(target.value)
              }}
              disabled={loading}
            />
            <input
              className="rounded bg-gray-800 px-2 py-1 text-sm shadow outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="License code"
              required
              value={code === 'null' ? '' : code}
              onChange={({ target }) => {
                setCode(target.value)
              }}
              disabled={loading || code.length === 19}
            />
            <p className="text-xs text-gray-400">Paste the code</p>
            <div className="flex flex-col">
              <span className="my-5 text-sm">Select operating system</span>
              {/* <label htmlFor="windows">
                <input
                  id="windows"
                  name="windows"
                  type="radio"
                  className="mx-2"
                  checked={os === 'windows' ? true : false}
                  onClick={() => {
                    selectOs('windows')
                  }}
                />
                Windows
              </label> */}
              <label htmlFor="macos">
                <input
                  id="macos"
                  name="macos"
                  className="mx-2"
                  type="radio"
                  onClick={() => {
                    selectOs('macos')
                  }}
                  checked={os === 'macos' ? true : false}
                />
                Mac
              </label>
              <label htmlFor="macosM1">
                <input
                  id="macosM1"
                  name="macOsm1"
                  className="mx-2"
                  type="radio"
                  onClick={() => {
                    selectOs('macosM1')
                  }}
                  checked={os === 'macosM1' ? true : false}
                />
                Mac os M1( apple Silicon)
              </label>
            </div>
            <span>
              <button
                type="submit"
                className={cn(
                  loading || code.length !== 19
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer',
                  'inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-indigo-400 disabled:bg-gray-500'
                )}
                disabled={code.length !== 19 ? true : false}
              >
                {loading && (
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {loading ? 'Processing..' : 'submit'}
              </button>
            </span>
          </form>
        </div>
      </section>
    </Container>
  )
}

Download.getInitialProps = async (ctx: {
  query: { email: any; code: any }
}) => {
  if (ctx.query.email && ctx.query.code) {
    return { email: ctx.query.email, code: ctx.query.code }
  }
  return { code: 'null', email: 'null' }
}

export default Download
