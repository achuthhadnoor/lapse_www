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
            <h1>Lapse 💖 <img src="https://brandox-production.s3-eu-central-1.amazonaws.com/6e2aa086-61bb-42db-9d4e-1bb8f97c20e0/as-appsumo-logo--1200x1200.png" width="150px" /></h1>
            {/* <h3>Welcome sumo-lings!</h3> */}
            <p>
            Hey, Sumolings thanks for choosing lapse . you get an instant discount and you can get the app for 9$ .  
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
                <input type="text" value={code} disabled className="licence"/>
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
    h1{
        word-spacing: 10px;
        padding-top:10px;
        padding-bottom:10px;
        font-size: 36px;
    }
    h3{
        margin:20px 0px;
        font-size:24px
    }
    p{
        margin-top:20px;
        padding-top:10px;
        padding-bottom:10px;
    } 
    form {
        display:flex;
        flex-direction:column;
        max-width:300px; 
        margin-top:20px;
    }
    input{
        padding:10px;
        margin:10px 0px;
        border-radius:5px;
        max-width:300px;
        width:100%;
        margin-bottom:15px;
    }
    button{
        width:200px;
        background:goldenrod;
        color:#222;
        padding:10px;
        border-radius:5px;
        font-weight:800
    }
    .licence{
        color: goldenrod;
        background: #ffea9f;
    }
`;

AppSumo.getInitialProps = async (ctx) => {
    if (ctx.query.appsumocode) {
        return { code: ctx.query.appsumocode }
    }
    return { code: 'NO-CODE' }
}
export default AppSumo; 