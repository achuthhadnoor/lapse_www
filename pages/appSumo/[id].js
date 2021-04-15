import { useEffect, useState } from "react";
import styled from "styled-components";

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
                if (result.message) alert(result.message);
            })
            .catch(error => console.log('error', error));
    }
    return (
        <Wrapper>
            <h1>Lapse ♥ <img src="https://brandox-production.s3-eu-central-1.amazonaws.com/6e2aa086-61bb-42db-9d4e-1bb8f97c20e0/as-appsumo-logo--1200x1200.png" width="150px" /></h1>
            <h3>Welcome sumo-lings!</h3>
            <p>
                Please enter your email and purpose of using the app to activate the licence key!
            </p>
            <form onSubmit={submitApi}>
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
        </Wrapper>
    )
};
const Wrapper = styled.div`
    max-width:800px;
    margin:50px auto;
    padding:20px;
    background:rgba(0,0,0,.2);
    backdrop-filter: blur(10px);
    border-radius:5px;
    color:#fff;
    form {
        display:flex;
        flex-direction:column;
        max-width:300px; 
    }
    input{
        padding:10px;
        margin:10px 0px;
        border-radius:5px;
        max-width:300px;
        width:100%;
    }
    button{
        width:200px;
        background:goldenrod;
        color:#222;
        padding:10px;
        border-radius:5px;
    }
`;

AppSumo.getInitialProps = async (ctx) => {
    if (ctx.query.id) {
        return { code: ctx.query.id }
    }
    return { code: 'NO-CODE' }
}
export default AppSumo;