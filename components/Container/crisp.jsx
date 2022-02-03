import { useEffect } from "react";
//.CRISP_WEBSITE_ID="b0fb2deb-d4f0-4376-848f-baf2cf23ff76"

const Crisp = () => {
    useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "b0fb2deb-d4f0-4376-848f-baf2cf23ff76";
        (() => {
            const d = document;
            const s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("body")[0].appendChild(s);
        })();
    });
    return null;
}
export default Crisp