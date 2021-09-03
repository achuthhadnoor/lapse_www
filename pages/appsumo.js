import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";

const AppSumo = (props) => {
    const [email, setEmail] = useState("");
    const [words, setWords] = useState("");
    const [code, setCode] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // getData();
        setCode(props.code)
    }, [])
    const submitApi = async (e) => {
        e.preventDefault();
        if (props.code !== 'NO-CODE') {
            setLoading(true)
            // axios.post('/api/sheet', { code: props.code }).then((res) => {
                    axios.post('api/verify',{email:email,phrase:props.code}).then((res)=>{
                        console.log(res.data);
                        window.open('https://github.com/achuthhadnoor/www/releases/download/tag0.0.10/Lapse-0.0.10.dmg', '_blank');
                        setLoading(false);
                    })
            // })
        } 
    }
    return (
        <Container>
          {  !loading ? <div className="relative h-full w-md">
            <h1 className="text-4xl text-gray-200 text-center mt-10">Lapse 💚 <img className="w-200 inline-block" src="https://brandox-production.s3-eu-central-1.amazonaws.com/6e2aa086-61bb-42db-9d4e-1bb8f97c20e0/as-appsumo-logo--1200x1200.png" width="150px" /></h1>
            <p className="text-md leading-loose text-gray-200 max-w-4xl mx-4 xl:mx-auto mt-10">Hey Sumo-lings 👋,<br/>
                Please enter your name, email and Appsumo code below to download lapse and 
                enjoy creating amaizing time-lapse videos  
                <span className="mx-1 p-1 bg-gray-800 rounded"> with life time access</span>.
            </p> 
            <br/>
            <p className="text-gray-200 max-w-4xl mx-4 xl:mx-auto my-2">
                After submission, you will recieve the  <span className="mx-1 p-1 bg-gray-800 rounded"> dmg file </span> where you will have to enter both email and the code 
            </p>
            <p className="text-gray-200 max-w-4xl mx-4 xl:mx-auto my-5">
                Thank you,<br/>
                Achuth Hadnoor
            </p>
            <form onSubmit={submitApi} className=" mb-20 flex flex-col max-w-4xl bg-gray-200 p-5 mx-5 xl:mx-auto rounded">
                <h2 className="text-2xl">Start recoding your amaizing digital work in time-lapse</h2>
                {/* <span className="text-red-600 text-xl">* required</span><br/> */}
                <input 
                    className="p-2 rounded max-w-md my-4 "
                    required={true}
                    type="email" placeholder="email@address.com(Appsumo email )"
                    value={email}
                    onChange={({target})=>{setEmail(target.value)}}
                />
                    <input 
                        className="p-2 rounded max-w-md my-4 disabled:bg-gray-300"
                        type="text" 
                        placeholder="Appsumo code"
                        value={code === 'NO-CODE' ? '' : code}
                        disabled={code !== 'NO-CODE' ? true : false} 
                        required={true}
                        />
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
                <h1 className="text-4xl text-gray-200 text-center mt-10">Lapse 💚 <img className="w-200 inline-block" src="https://brandox-production.s3-eu-central-1.amazonaws.com/6e2aa086-61bb-42db-9d4e-1bb8f97c20e0/as-appsumo-logo--1200x1200.png" width="150px" /></h1>
            <p className="mt-20 text-center text-2xl text-gray-200 max-w-4xl mx-4 xl:mx-auto my-2 h-full relative">
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
    return { code: 'NO-CODE' }
}
export default AppSumo;
