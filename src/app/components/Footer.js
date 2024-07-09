import React from 'react'; 

const Footer = () => {
    return (
        <footer className="w-full mt-7 text-gray-100">
            <div className="w-4/5 mx-auto border-b border-gray-700 mb-6">
                <div className="flex flex-wrap justify-around mb-12 gap-8">
                    <div className="flex flex-col flex-wrap gap-5">
                        <h2 className="text-xl font-bold">INTERACT</h2>
                        <span className="text-xs w-72 text-gray-300">We are your personal guide for exploring web3 projects & earning 100x rewards</span>
                    </div>
                    <div className="flex flex-col flex-wrap gap-3">
                        <h2 className="text-xl font-medium">INTRACT</h2>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Explore Quests</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Communities</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Alpha Hub</span>
                    </div>
                    <div className="flex flex-col flex-wrap gap-3">
                        <h2 className="text-xl font-bold">EARN</h2>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Refer & Earn</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Leaderboard</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Achievements</span>
                    </div>
                    <div className="flex flex-col flex-wrap gap-3">
                        <h2 className="text-xl font-bold">ABOUT</h2>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Product Roadmap</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Affiliate Program</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Sign up Program</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Growth Community</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Blogs</span>
                    </div>
                    <div className="flex flex-col flex-wrap gap-3">
                        <h2 className="text-xl font-bold">SUPPORT</h2>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Help Center</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Create your quest</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="text-xs text-gray-300 hover:text-white cursor-pointer">Community Guidelines</span>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto font-bold border-b border-gray-700 mb-6">
                <p className="mb-10">
                    Disclaimer:
                    <span className="text-sm font-bold text-gray-400 leading-5">
                        Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
                    </span>
                </p>
            </div>
            <div className="w-4/5 flex justify-between mx-auto mb-5">
                <h3>CREATED BY <span className="underline">INTRACT</span></h3>
                <div className="flex gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        style={{ color: "#1da1f2" }}
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    {/* <!-- Telegram --> */}
                    <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlSpace="preserve"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "1.41421",
                            color: "#0088cc",
                        }}
                    >
                        <path
                            id="telegram-1"
                            d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                        />
                    </svg>
                    {/* <!-- Twitch --> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        style={{ color: "#9146ff" }}
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        style={{ color: "#7289da" }}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm3.888 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                    </svg>
                </div>
            </div>
        </footer>
    );
};

export default Footer;