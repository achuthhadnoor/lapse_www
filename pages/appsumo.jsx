import { useEffect,useState } from "react";
import cn from "classnames";
import axios from 'axios';
import Container from "@/components/Container";



const AppSumo = (props) => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [os, setOs] = useState('macos');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setCode(props.code)
    }, [])

    const submitApi = async (e) => {
        e.preventDefault();
        if (code !== 'null' && code.length === 19) {
            setLoading(true);
            
            axios.post('api/verify', { email: email, phrase: code }).then((res) => {
                if(res.data.status === 503){
                    alert(res.data.message)
                    return;
                }
                else if(res.data.status === 403){
                    alert(res.data.message)
                    return;
                }
                console.log(res.data);
                if (os === 'macos') {
                    window.open('https://github.com/achuthhadnoor/www/releases/download/0.0.1/Lapse-0.0.10.dmg', '_blank');
                    setLoading(false);
                    return;
                }
                window.open('https://github.com/achuthhadnoor/www/releases/download/0.0.1/Lapse.Setup.0.0.10.exe')
                setLoading(false);
            })
        }
    }
    let selectOs = (os) => {
        setOs(os);
    }
    return (
        <Container>
            <section className="max-w-screen-xl mx-auto">
                <h1 className="text-2xl font-semibold py-4 my-10 text-center">Lapse ❤️
                    <img
                        className="w-200 inline-block"
                        src="https://brandox-production.s3-eu-central-1.amazonaws.com/79f070fd-ba34-4e29-b764-e85b450a3cdd/as-appsumo-logo-blk--1200x1200.png"
                        width="150px"
                    />
                </h1>
                <div className="mt-2 max-w-2xl my-5 mx-auto">
                    <h2 className="text-xl font-semibold">Hello Sumo-links 👋</h2>
                    <p className="my-5 max-w-xl leading-loose">
                        Please enter your name, email and Appsumo code below to download lapse and
                        enjoy creating amaizing time-lapse videos
                        <span className="mx-1 p-1 bg-orange-800 text-orange-200 rounded"> with life time access</span>.
                    </p>
                    <p className="my-5 max-w-xl leading-loose">
                        After submission, you will recieve the
                        <span className="mx-1 p-1 bg-orange-800 text-orange-200 rounded"> .dmg / .exe</span> 
                        file where you will have to enter both email and the code
                    </p>
                    <a className="">
                        Thank you,<br />
                        Achuth
                    </a>
                </div>
                <div className="px-4 py-1 bg-orange-50 rounded-md max-w-2xl shadow-md my-5 mx-auto">
                    <h3 className="text-lg mt-2">
                        Start recoding your amaizing digital work in time-lapse
                    </h3>
                    <form
                        className="py-4 flex flex-col max-w-md gap-4"
                        onSubmit={submitApi}
                    >
                        <input
                            className={cn(
                                loading && "cursor-not-allowed",
                                "px-2 py-1 rounded outline-none shadow text-sm focus:ring-2 focus:ring-orange-300 ")}
                            type="email"
                            placeholder="join@email.address"
                            required
                            value={email}
                            onChange={({ target }) => { setEmail(target.value) }}
                            disabled={loading}
                        />
                        <input
                            className="px-2 py-1 rounded outline-none shadow text-sm focus:ring-2 focus:ring-orange-300 "
                            type="text"
                            placeholder="Appsumo code"
                            required
                            value={code === 'null' ? '' : code}
                            onChange={({ target }) => { 
                                setCode(target.value) }}
                            disabled={loading || code.length === 19}
                        />
                        <p className="text-gray-400 text-xs">Paste the code from appsumo</p>
                        <div className="flex flex-col">
                            <span className="text-sm my-5">Select operating system</span>
                            <label for="windows">
                                <input
                                    id="windows"
                                    name="fname"
                                    type="radio"
                                    className="mx-2"
                                    checked={os === 'windows' ? true : false} 
                                    onClick={() => {
                                        selectOs('windows')
                                    }}
                                    />
                                Windows
                            </label>
                            <label for="macos">
                                <input
                                    id="macos"
                                    name="fname"
                                    className="mx-2"
                                    type="radio"
                                    onClick={() => { selectOs('macos') }}
                                    checked={os === 'macos' ? true : false}
                                />
                                Mac os
                            </label>
                        </div>
                        <span>
                            <button
                                type="submit"
                                className={cn(
                                    loading || code.length !== 19
                                      ? "cursor-not-allowed"
                                      : "cursor-pointer",
                                      "inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 disabled:bg-gray-500"
                                  )}
                                  disabled={code.length !== 19 ? true : false}
                            >
                                {
                                    loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                }
                                {loading ? 'Processing..' : 'submit'}
                            </button>
                        </span>
                    </form>
                </div>
            </section>
        </Container>
    )
}

AppSumo.getInitialProps = async (ctx) => {
    if (ctx.query.appsumocode) {
        return { code: ctx.query.appsumocode }
    }
    return { code: 'null' }
}
export default AppSumo;