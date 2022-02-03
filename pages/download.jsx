import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";

const AppSumo = (props) => {
    const [email, setEmail] = useState("");
    const [words, setWords] = useState("");
    const [code, setCode] = useState("");
    const [os, setOs] = useState('macos');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // getData();
        setCode(props.code)
    }, [])
    const submitApi = async (e) => {
        e.preventDefault();
        if (props.code !== 'NO-CODE') {
            setLoading(true)
                if(os === 'macos'){
                window.open('https://github.com/achuthhadnoor/www/releases/download/0.0.1/Lapse-0.0.10.dmg', '_blank');
                setLoading(false);
                return;
            }
                window.open('https://github.com/achuthhadnoor/www/releases/download/0.0.1/Lapse.Setup.0.0.10.exe')
                setLoading(false); 
        }
    }
    let selectOs = (os)=>{
        setOs(os);
    }
    return (
        <Container>
            {!loading ? <div className="relative h-full w-md">
                <h1 className="text-4xl  text-center mt-10">Lapse 💚 <span className="text-green-500">You</span></h1>
                <p className="text-md leading-loose  max-w-4xl mx-4 xl:mx-auto mt-10">Hey Lpsers 👋,<br />
                    Please enter your name, email and Appsumo code below to download lapse and
                    enjoy creating amaizing time-lapse videos
                    <span className="mx-1 p-1 text-orange-200 bg-orange-800 rounded"> with life time access</span>.
                </p>
                <br />
                <p className=" max-w-4xl mx-4 xl:mx-auto my-2">
                    After submission, you will recieve the  <span className="mx-1 p-1 text-orange-200 bg-orange-800 rounded"> .dmg / .exe </span> 
                    where you will have to enter both email and the code
                </p>
                <p className=" max-w-4xl mx-4 xl:mx-auto my-5">
                    Thank you,<br />
                    Achuth Hadnoor
                </p>
                <form onSubmit={submitApi} className=" mb-20 flex flex-col max-w-4xl bg-orange-200 p-5 mx-5 xl:mx-auto rounded">
                    <h2 className="text-2xl">Start recoding your amaizing digital work in time-lapse</h2>
                    {/* <span className="text-red-600 text-xl">* required</span><br/> */}
                    <input
                        className="p-2 rounded max-w-md my-4 "
                        required={true}
                        type="email" placeholder="email@address.com"
                        value={email}
                        onChange={({ target }) => { setEmail(target.value) }}
                    />
                    <input
                        className="p-2 rounded max-w-md my-4 disabled:bg-gray-300"
                        type="text"
                        placeholder="Licence"
                        value={code}
                        required={true}
                        onChange={({ target }) => { setCode(target.value) }}
                    />
                   <label for="windows">
                    <input id="windows" name="fname" type="radio" onClick={()=>{selectOs('windows')}} checked={os ==='windows'? true : false}/> Windows</label> 
                   <label for="macos">
                    <input id="macos" name="fname" type="radio" onClick={()=>{selectOs('macos')}} checked={os ==='macos'? true : false}/> Mac os</label> 
                    <div>
                        <button
                            className=" bg-green-400 p-2 rounded disabled:bg-gray-400"
                            type="submit"
                            disabled={email === '' || code === '' ? true : false}
                        >
                            Download
                        </button>
                    </div>
                </form>

            </div> : <div className="h-screen">
                <h1 className="text-4xl  text-center mt-10">Lapse 💚 <img className="w-200 inline-block" src="https://brandox-production.s3-eu-central-1.amazonaws.com/6e2aa086-61bb-42db-9d4e-1bb8f97c20e0/as-appsumo-logo--1200x1200.png" width="150px" /></h1>
                <p className="mt-20 text-center text-2xl  max-w-4xl mx-4 xl:mx-auto my-2 h-full relative">
                    🦄 Verifying your code and preparing download...
                </p>
            </div>
            }
        </Container>
    )
};

AppSumo.getInitialProps = async (ctx) => {
    if (ctx.query.appsumocode) {
        return { code: ctx.query.appsumocode }
    }
    return { code: '' }
}
export default AppSumo;
