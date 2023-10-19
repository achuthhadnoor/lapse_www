import { useState, useEffect } from "react";
import axios from "axios";
import cn from "classnames";
import Container from "../components/Container";
import { currentVersion, versions } from "../utils/constants";

const Download = (props: any) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [os, setOs] = useState("macos");
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(currentVersion);

  useEffect(() => {
    setCode(props.code);
  }, []);
  const submitApi = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    if (os === "macos") {
      window.open(
        `https://github.com/achuthhadnoor/lapse_www/releases/download/${version}/Lapse-${version}-x64.dmg`,
        "_blank"
      );
      setLoading(false);
      return;
    } else if (os === "macosM1") {
      window.open(
        `https://github.com/achuthhadnoor/lapse_www/releases/download/${version}/Lapse-${version}-arm64.dmg`,
        "_blank"
      );
      setLoading(false);
      return;
    }
    window.open(
      "https://github.com/achuthhadnoor/lapse_www/releases/download/1.0.4/Lapse.Setup.1.0.3.exe"
    );
    setLoading(false);
  };
  let selectOs = (os: any) => {
    setOs(os);
  };
  return (
    <Container
      title={"Lapse | Download "}
      description="Download lapse for macOs"
    >
      <section className=" mx-auto mt-24 max-w-4xl p-4 md:p-0">
        <h1 className="flex justify-center align-middle text-3xl">
          Download Lapse
        </h1>
        <div className="mx-auto my-5 mt-2">
          <h2 className="text-lg font-semibold">👋 Hello</h2>
          <p className="my-5 max-w-xl leading-loose">
            Please enter your name, email and license code below to download
            lapse and enjoy creating amazing time-lapse videos .
          </p>
          <p className="my-5 max-w-xl leading-loose">
            After submission, you will recieve the
            <span className="mx-1 rounded bg-green-800 p-1 text-green-200">
              {" "}
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
        <div className="mx-auto my-5 rounded-md bg-neutral-900 px-4 py-5 shadow-md">
          <h3 className="mt-2 text-lg">
            Start recoding your amazing digital work in time-lapse
          </h3>
          <form
            className="flex max-w-md flex-col gap-4 py-4"
            onSubmit={submitApi}
          >
            {/* <input
              className={cn(
                loading && 'cursor-not-allowed',
                'rounded bg-neutral-800 px-2 py-1 text-sm shadow outline-none focus:ring-2 focus:ring-green-400'
              )}
              type="email"
              placeholder="join@email.address"
              required
              value={email}
              onChange={({ target }) => {
                setEmail(target.value)
              }}
              disabled={loading}
            /> */}
            {/* <input
              className="rounded bg-neutral-800 px-2 py-1 text-sm shadow outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              placeholder="License code"
              required
              value={code === 'null' ? '' : code}
              onChange={({ target }) => {
                setCode(target.value)
              }}
              disabled={loading || code.length === 19}
            /> */}
            {/* <p className="text-xs text-neutral-400">Paste the code</p> */}
            <div className="flex flex-col">
              <span className="my-5 text-sm">Select operating system</span>
              <label htmlFor="windows">
                <input
                  id="windows"
                  name="windows"
                  type="radio"
                  className="mx-2"
                  checked={os === "windows" ? true : false}
                  onClick={() => {
                    selectOs("windows");
                  }}
                />
                Windows
              </label>
              <label htmlFor="macos">
                <input
                  id="macos"
                  name="macos"
                  className="mx-2"
                  type="radio"
                  onClick={() => {
                    selectOs("macos");
                  }}
                  checked={os === "macos" ? true : false}
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
                    selectOs("macosM1");
                  }}
                  checked={os === "macosM1" ? true : false}
                />
                Mac os M1( apple Silicon)
              </label>
              <label htmlFor="versions">
                Version{" "}
                <select
                  onChange={(e) => setVersion(e.target.value)}
                  defaultValue={currentVersion}
                  className="bg-transparent border-2 border-green-500 rounded m-4 outline-none"
                >
                  {versions.map((version) => (
                    <option key={`version-${version}`} value={version}>
                      {version}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <span>
              <button
                type="submit"
                className={cn(
                  "cursor-pointer inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-green-400 disabled:bg-neutral-500"
                )}
                // disabled={code.length !== 19 ? true : false}
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
                {loading ? "Processing.." : "submit"}
              </button>
            </span>
          </form>
        </div>
      </section>
    </Container>
  );
};

Download.getInitialProps = async (ctx: {
  query: { email: any; code: any };
}) => {
  if (ctx.query.email && ctx.query.code) {
    return { email: ctx.query.email, code: ctx.query.code };
  }
  return { code: "null", email: "null" };
};

export default Download;
