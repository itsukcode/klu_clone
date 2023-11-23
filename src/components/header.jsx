import React from 'react'
import "../App.css"
import logo from "../img/logo.png"
import sound from "../img/sound.svg"
import Figma from "../img/figma.png"
import Notion from "../img/notion.png"
import Drive from "../img/drive.png"
import Search from "../img/search.png"
import Gmail from "../img/gmail.png"
import Onedrive from "../img/onedrive.png"
import Trello from "../img/trello.png"

const header = () => {
    return (
        <>
            <div className="bg">
                <header className="head">
                    <img src={logo} alt="" className="logo" />
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li><a href="#" className="nav-link">Pricing</a></li>
                            <li><a href="#" className="nav-link">Download</a></li>
                            <li><a href="#" className="nav-link">Resource</a></li>
                        </ul>
                    </nav>
                    <div className="btn">
                        <a href="#" className="login">LOGIN</a>
                        <a href="#" className="login sign">SIGN UP</a>
                    </div>
                </header>

                <div className="hero">
                    <h3 className="sub-head">
                        <img src={sound} alt="" className='sound' />
                        Welcome to our&nbsp; <strong>public beta</strong>, we are super excited for you to try Klu!
                    </h3>
                </div>

                <div className="img-2">
                    <img src={Figma} alt="" className="img-p-1" />
                    <img src={Notion} alt="" className="img-p-1" />
                </div>

                <div className="main-heaad-1">
                    <h1 className='main-head'>Empowering Search with<br /><span className="green">Intelligence.</span></h1>
                </div>

                <div className="img-text">
                    <img src={Drive} alt="" className="drive" />
                    <p className="para-2">Connect all your apps for seamless, unified searching.<br />
                        Internal search engine powered by AI.</p>
                </div>

                <div className="search-box">
                    <img src={Search} alt="" className="search-box-img" />
                    <a href="#" className="btn-3">TRY KLU NOW</a>
                </div>

                <div className="img-4">
                    <img src={Gmail} alt="" className="gmail" />
                    <img src={Onedrive} alt="" className="onedrive" />
                    <img src={Trello} alt="" className="trello" />
                </div>
                <p className="trusted">TRUSTED BY AWESOME PEOPLE FROM
                </p>

                <div className="img-5">
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/64747323107043aab0ee8e41_About_1_desktop%201-p-500.png" alt="img-no" className="gojek" />
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/644b6e2f5990d7639e2e4d53_zappier-p-500.png" alt="img-no" className="zapier" />
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/6474716c76590e82e09e466d_580b57fcd9996e24bc43c529%201-p-500.png" alt="img-no" className="netflix" />
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/6474716d2a3cf2627360d118_Dropbox_Logo_01%201-p-500.png" alt="img-no" className="dropbox" />
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/6474716f4741d34df7687a9c_product-hunt%201-p-500.png" alt="img-no" className="product" />
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/6474716d96040b5fe4f94eec_1024px-Klarna_Payment_Badge%201-p-500.png" alt="img-no" className="klarna" />
                </div>

                <div className="section-1">
                    <h2 className='inter-green'>INTERNAL SEARCH</h2>
                    <h1 className="sec-head">Someone shared a file with you, but have<br/> no idea which app or platform it's on?</h1>
                    <p className="sec-para">Simply type a <span className="keyword">keyword</span>, and Klu will locate it for you - from documents,<br/> emails, conversations to customer files. Just press "cmd + space + K" and let<br/> Klu search for what you need.</p>
                    <img src="https://uploads-ssl.webflow.com/63515aad2587c9ad3d23ae08/643d13e36d8d202d6e3485cc_search1-p-800.png" alt="" className="big-img" />
                    <a href="#" className="btn-4">SIGN UP TO KLU</a>
                </div>
            </div>
        </>
    )
}

export default header