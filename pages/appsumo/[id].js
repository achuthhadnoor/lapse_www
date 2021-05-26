import { useEffect, useState } from "react";
import Container from "../../components/Container";

const AppSumo = (props) => {
    const [email, setEmail] = useState("");
    const [words, setWords] = useState("");
    const [code, setCode] = useState("");
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        setCode(props.code);
    }, [])
    const submitApi = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "email": email, "phrase": code });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("https://lapse.achuth.dev/api/verify", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result);
                // if (result.message) alert(result.message);
                //https://github.com/achuthhadnoor/lapse_www/releases/download/0.0.1/lapse-0.0.1-mac.dmg
                window.open('https://github.com/achuthhadnoor/lapse_www/releases/download/0.0.1/lapse-0.0.1-mac.dmg', '_blank');
            })
            .catch(error => console.log('error', error));
    }
    return (
        <Container>
            <div className="mt-20 text-gray-200 max-w-5xl mx-auto">
                <h1 className=" text-4xl flex my-10">Lapse ♥ <img className="w-200" src="https://brandox-production.s3-eu-central-1.amazonaws.com/6e2aa086-61bb-42db-9d4e-1bb8f97c20e0/as-appsumo-logo--1200x1200.png" width="150px" /></h1>
                <h3>Welcome sumo-lings!</h3>
                <p>
                    Please enter your email and purpose of using the app to activate the licence key!
            </p>
                <form onSubmit={submitApi} className="flex flex-col max-w-lg">
                    <label>
                        Email ID
                    </label>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        required value={email}
                        onChange={({ target }) => { setEmail(target.value) }} />
                    <label>How do you like to use the app ?</label>
                    <input
                        type="text"
                        placeholder="Start typing.."
                        required value={words}
                        onChange={({ target }) => { setWords(target.value) }} />

                    <label style={{ color: 'goldenrod', fontSize: '.7rem' }}>
                        Your code has been added successfully!!
                </label>
                    <input type="text" value={code} disabled />
                    <button type="submit">Activate your licence!</button>
                </form>

            </div>
        </Container>
    )
};

AppSumo.getInitialProps = async (ctx) => {
    if (ctx.query.id) {
        return { code: ctx.query.id }
    }
    return { code: 'NO-CODE' }
}
export default AppSumo;