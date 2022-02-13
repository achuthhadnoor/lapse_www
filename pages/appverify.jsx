import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

const IndexPage = () => {
    // const onSayHiClick = () => {
    // window.electron.ipcRenderer.send('message', 'hi from next')
    // }
    const [email, setEmail] = useState('');
    const [lapseData, setLapseData] = useState('');
    const [code, setCode] = useState('');
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(false)
    const [permission, setPermission] = useState(false)
    const limit = 5;
    const verify = (e) => {
        e.preventDefault();
        // window.electron.ipcRenderer.send('verify',{email,code})
        setLoading(true);
        gumroad();
    }
    const nestedValue = (mainObject, key) => {
        try {
            return key.split('.').reduce((obj, property) => obj[property], mainObject)
        } catch (err) {
            return null
        }
    }
    const gumroad = async () => {
        // https://api.gumroad.com/v2/licenses/verify
        axios
            .post('https://api.gumroad.com/v2/licenses/verify', {
                product_permalink: 'lapse_app',
                license_key: code,
                increment_uses_count: true,
                email: email,
            }).then(response => {
                // if (!data?.success) {
                //   alert('Sorry. Something went wrong.')
                //   return
                // }

                const uses = nestedValue(response, 'data.uses')

                if (uses > limit) {
                    alert('Sorry, This licence expired!')
                    window.electron.ipcRenderer.send('quit-app');
                    return
                }

                const refunded = nestedValue(response, 'data.purchase.refunded')

                if (refunded) {
                    alert('Sorry. This purchase has been refunded.')
                    window.electron.ipcRenderer.send('quit-app');
                    return
                }

                const chargebacked = nestedValue(response, 'data.purchase.chargebacked')

                if (chargebacked) {
                    alert('Sorry. This purchase has been chargebacked.')
                    window.electron.ipcRenderer.send('quit-app');
                    return
                }
                window.electron.ipcRenderer.send('verify', { id: response.data.purchase.id, name: response.data.purchase.name });
                // Store.set('verification', response.data)
                // Store.set('showMenubar', true)
                // MenuBar.create()
                // this.emitSuccess()
                setLoading(false);
            })
            .catch(error => {
                if (!error.response) {
                    alert('Please check your internet connection.')
                    setLoading(false);
                } else if (error.response.status && error.response.status >= 500) {
                    alert('Oh no. lapse can\'t be reached. Please try again later.')
                    setLoading(false);
                } else {
                    // alert('Sorry. This license does not exist.')
                    axios.post('https://lapse.achuth.dev/api/verify', { email: email, phrase: code }).then((res) => {
                        let result = res.data;
                        if (result.status === 200) {
                            setValid(true)
                            if (result.message) alert(result.message);
                            window.electron.ipcRenderer.send('verified', result);
                        }
                        setLoading(false);
                    })
                        .catch(e => {
                            alert(e);
                            setLoading(false);
                        })
                }
            })
    }
    return (
        <div className='bg-orange-100 h-screen flex flex-col'>
            <div className='p-2 dragable' />
            <div className='carousel flex justify-center py-2'>
                <svg width="151" height="45" viewBox="0 0 151 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.4101 10.2322C3.32648 9.91512 3.56563 9.60474 3.89357 9.60474H31C31.2761 9.60474 31.5 9.8286 31.5 10.1047V37.9976C31.5 38.3324 31.1773 38.5726 30.8566 38.4766L9.41188 32.0558C9.24505 32.0059 9.11622 31.8727 9.07182 31.7043L3.4101 10.2322Z" stroke="url(#paint0_linear_4289_1049)" stroke-width="5" />
                    <path d="M68.9863 36H51.3379V10.793H56.3828V30.9551H68.9863V36ZM88.8496 36H87.6895L85.8262 33.416C85.3691 33.8262 84.8828 34.2129 84.3672 34.5762C83.8633 34.9277 83.3301 35.2383 82.7676 35.5078C82.2051 35.7656 81.625 35.9707 81.0273 36.123C80.4414 36.2754 79.8438 36.3516 79.2344 36.3516C77.9102 36.3516 76.6621 36.1289 75.4902 35.6836C74.3301 35.2383 73.3105 34.5938 72.4316 33.75C71.5645 32.8945 70.8789 31.8516 70.375 30.6211C69.8711 29.3906 69.6191 27.9902 69.6191 26.4199C69.6191 24.9551 69.8711 23.6133 70.375 22.3945C70.8789 21.1641 71.5645 20.1094 72.4316 19.2305C73.3105 18.3516 74.3301 17.6719 75.4902 17.1914C76.6621 16.6992 77.9102 16.4531 79.2344 16.4531C79.8438 16.4531 80.4473 16.5293 81.0449 16.6816C81.6426 16.834 82.2227 17.0449 82.7852 17.3145C83.3477 17.584 83.8809 17.9004 84.3848 18.2637C84.9004 18.627 85.3809 19.0195 85.8262 19.4414L87.6895 17.209H88.8496V36ZM84.0156 26.4199C84.0156 25.7637 83.8867 25.1309 83.6289 24.5215C83.3828 23.9004 83.043 23.3555 82.6094 22.8867C82.1758 22.4062 81.666 22.0254 81.0801 21.7441C80.5059 21.4512 79.8906 21.3047 79.2344 21.3047C78.5781 21.3047 77.957 21.416 77.3711 21.6387C76.7969 21.8613 76.293 22.1895 75.8594 22.623C75.4375 23.0566 75.1035 23.5957 74.8574 24.2402C74.6113 24.873 74.4883 25.5996 74.4883 26.4199C74.4883 27.2402 74.6113 27.9727 74.8574 28.6172C75.1035 29.25 75.4375 29.7832 75.8594 30.2168C76.293 30.6504 76.7969 30.9785 77.3711 31.2012C77.957 31.4238 78.5781 31.5352 79.2344 31.5352C79.8906 31.5352 80.5059 31.3945 81.0801 31.1133C81.666 30.8203 82.1758 30.4395 82.6094 29.9707C83.043 29.4902 83.3828 28.9453 83.6289 28.3359C83.8867 27.7148 84.0156 27.0762 84.0156 26.4199ZM97.3574 43.1719H92.5234V17.1738H93.6836L95.5996 19.4414C96.0332 19.0312 96.5078 18.6445 97.0234 18.2812C97.5391 17.918 98.0723 17.6074 98.623 17.3496C99.1855 17.0801 99.7656 16.8691 100.363 16.7168C100.961 16.5645 101.564 16.4883 102.174 16.4883C103.498 16.4883 104.74 16.7285 105.9 17.209C107.072 17.6777 108.092 18.3457 108.959 19.2129C109.838 20.0801 110.529 21.1289 111.033 22.3594C111.537 23.5781 111.789 24.9316 111.789 26.4199C111.789 27.9668 111.537 29.3613 111.033 30.6035C110.529 31.834 109.838 32.8828 108.959 33.75C108.092 34.6055 107.072 35.2617 105.9 35.7188C104.74 36.1758 103.498 36.4043 102.174 36.4043C101.752 36.4043 101.33 36.3574 100.908 36.2637C100.498 36.1699 100.088 36.0469 99.6777 35.8945C99.2793 35.7305 98.8809 35.5488 98.4824 35.3496C98.0957 35.1504 97.7207 34.9453 97.3574 34.7344V43.1719ZM106.973 26.4199C106.973 25.623 106.844 24.9082 106.586 24.2754C106.34 23.6426 106 23.1094 105.566 22.6758C105.133 22.2305 104.623 21.8906 104.037 21.6562C103.451 21.4219 102.83 21.3047 102.174 21.3047C101.518 21.3047 100.896 21.4219 100.311 21.6562C99.7363 21.8906 99.2324 22.2305 98.7988 22.6758C98.3652 23.1094 98.0195 23.6426 97.7617 24.2754C97.5156 24.9082 97.3926 25.623 97.3926 26.4199C97.3926 27.1816 97.5156 27.8789 97.7617 28.5117C98.0195 29.1445 98.3652 29.6836 98.7988 30.1289C99.2324 30.5742 99.7363 30.9199 100.311 31.166C100.896 31.4121 101.518 31.5352 102.174 31.5352C102.83 31.5352 103.451 31.4121 104.037 31.166C104.623 30.9199 105.133 30.5742 105.566 30.1289C106 29.6836 106.34 29.1445 106.586 28.5117C106.844 27.8789 106.973 27.1816 106.973 26.4199ZM124.797 36H113.828V31.2188H124.797C125.125 31.2188 125.406 31.1016 125.641 30.8672C125.875 30.6328 125.992 30.3516 125.992 30.0234C125.992 29.6836 125.875 29.4609 125.641 29.3555C125.406 29.25 125.125 29.1973 124.797 29.1973H119.805C118.973 29.1973 118.193 29.0391 117.467 28.7227C116.74 28.4062 116.107 27.9785 115.568 27.4395C115.029 26.8887 114.602 26.25 114.285 25.5234C113.98 24.7969 113.828 24.0176 113.828 23.1855C113.828 22.3535 113.98 21.5742 114.285 20.8477C114.602 20.1211 115.029 19.4883 115.568 18.9492C116.107 18.4102 116.74 17.9883 117.467 17.6836C118.193 17.3672 118.973 17.209 119.805 17.209H129.525V21.9902H119.805C119.477 21.9902 119.195 22.1074 118.961 22.3418C118.727 22.5762 118.609 22.8574 118.609 23.1855C118.609 23.5254 118.727 23.8184 118.961 24.0645C119.195 24.2988 119.477 24.416 119.805 24.416H124.797C125.617 24.416 126.391 24.5566 127.117 24.8379C127.844 25.1074 128.477 25.4883 129.016 25.9805C129.555 26.4727 129.982 27.0645 130.299 27.7559C130.615 28.4473 130.773 29.2031 130.773 30.0234C130.773 30.8555 130.615 31.6348 130.299 32.3613C129.982 33.0762 129.555 33.709 129.016 34.2598C128.477 34.7988 127.844 35.2266 127.117 35.543C126.391 35.8477 125.617 36 124.797 36ZM140.828 31.3945C141.016 31.4531 141.203 31.4941 141.391 31.5176C141.578 31.5293 141.766 31.5352 141.953 31.5352C142.422 31.5352 142.873 31.4707 143.307 31.3418C143.74 31.2129 144.145 31.0312 144.52 30.7969C144.906 30.5508 145.246 30.2578 145.539 29.918C145.844 29.5664 146.09 29.1797 146.277 28.7578L149.793 32.291C149.348 32.9238 148.832 33.4922 148.246 33.9961C147.672 34.5 147.045 34.9277 146.365 35.2793C145.697 35.6309 144.988 35.8945 144.238 36.0703C143.5 36.2578 142.738 36.3516 141.953 36.3516C140.629 36.3516 139.381 36.1055 138.209 35.6133C137.049 35.1211 136.029 34.4355 135.15 33.5566C134.283 32.6777 133.598 31.6348 133.094 30.4277C132.59 29.209 132.338 27.873 132.338 26.4199C132.338 24.9316 132.59 23.5723 133.094 22.3418C133.598 21.1113 134.283 20.0625 135.15 19.1953C136.029 18.3281 137.049 17.6543 138.209 17.1738C139.381 16.6934 140.629 16.4531 141.953 16.4531C142.738 16.4531 143.506 16.5469 144.256 16.7344C145.006 16.9219 145.715 17.1914 146.383 17.543C147.062 17.8945 147.695 18.3281 148.281 18.8438C148.867 19.3477 149.383 19.916 149.828 20.5488L140.828 31.3945ZM143.289 21.498C143.066 21.416 142.844 21.3633 142.621 21.3398C142.41 21.3164 142.188 21.3047 141.953 21.3047C141.297 21.3047 140.676 21.4277 140.09 21.6738C139.516 21.9082 139.012 22.248 138.578 22.6934C138.156 23.1387 137.822 23.6777 137.576 24.3105C137.33 24.9316 137.207 25.6348 137.207 26.4199C137.207 26.5957 137.213 26.7949 137.225 27.0176C137.248 27.2402 137.277 27.4688 137.312 27.7031C137.359 27.9258 137.412 28.1426 137.471 28.3535C137.529 28.5645 137.605 28.752 137.699 28.916L143.289 21.498Z" fill="black" />
                    <defs>
                        <linearGradient id="paint0_linear_4289_1049" x1="-1.08304e-06" y1="25" x2="32.4531" y2="17.9147" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFB26A" />
                            <stop offset="1" stop-color="#CA8D6A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {!permission && <div className='text-center flex flex-col flex-1 justify-center align-middle items-center'>
                <h1 className='text-xl py-5'>Permission</h1>
                <button
                    className='bg-orange-300 py-2 px-4 rounded-full text-sm disabled:bg-gray-400 disabled:cursor-not-allowed'
                    onClick={() => {
                        setLoading(true);
                        window.electron.ipcRenderer.invoke('systemPreferences').then(grant => {
                            if (grant) {
                                setPermission(true);
                                setLoading(false);
                            }
                        })
                    }}
                    disabled={loading}
                >
                    Grant permission
                </button>
            </div>}
            {permission && <form className='mt-5 flex-1 px-4 align-middle items-center justify-center flex flex-col'>
                <label htmlFor='licence' className='text-lg font-semibold text-center py-2'>Enter your License</label>
                <input
                    name="licence"
                    className='text-center px-3 py-2 rounded-md shadow-md w-full font-mono outline-none focus:ring ring-orange-200 tracking-widest disabled:bg-gray-100'
                    placeholder='XXXX-XXXX-XXXX-XXXX'
                    value={code}
                    disabled={code.length === 19}
                    onChange={({ target }) => {
                        const newVal = target.value;
                        const newCode = newVal.length === 4 ? `${newVal}-` : newVal.length === 9 ? `${newVal}-` : newVal.length === 14 ? `${newVal}-` : newVal;
                        setCode(newCode);
                    }}
                />
                <div className='flex gap-2 mt-5  justify-center'>
                    <button className='px-4 py-1 bg-orange-300 rounded' onClick={verify}>Apply</button>
                    <button className='px-4 py-1 border-2 border-orange-300 rounded' onClick={() => { setCode('') }}>Reset</button>
                </div>
            </form>}
            <div className='mt-5 gap-2 my-2 flex justify-center align-middle items-center text-sm'>
                Don't have license yet?
                <button
                    className='px-2 py-1 rounded bg-orange-200'
                    onClick={() => {
                        window.electron.ipcRenderer.send('buy');
                        // window.electron.ipcRenderer.send('verify',{email,code})
                    }}
                // href='https://lapse.achuth.dev' 
                >
                    Buy License
                </button>
            </div>
        </div>
    )
}

export default IndexPage
 /*
    {
        "success": true,
        "uses": 3,
        "purchase": {
        "id": "OmyG5dPleDsByKGHsneuDQ==",
        "product_name": "licenses demo product",
        "created_at": "2014-04-05T00:21:56Z",
        "full_name": "Maxwell Elliott",
        "variants": "",
        "refunded": false,
        # purchase was refunded, non-subscription product only
        "chargebacked": false,
        # purchase was refunded, non-subscription product only
        "subscription_cancelled_at": null,
        # subscription was cancelled,
        subscription product only
        "subscription_failed_at": null,
        # we were unable to charge the subscriber's card
        "custom_fields": [],
        "email": "maxwell@gumroad.com"
        }
    }
    
    */