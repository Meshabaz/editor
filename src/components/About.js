// import React, { useState } from 'react'
import me from './../me.jpeg'

export default function About(props) {

    // max-width: 540px

    return (
        <>

            <div className="card mb-3 my-5" style={{ boxShadow: props.mode === 'light' ? 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' :'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px', borderRadius: '30px', maxWidth: '800px', backgroundColor: props.mode === 'light' ? 'white' : '#071a2e', color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={me} className="img-fluid rounded-start" alt="..." style={{ borderRadius: '30px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Md Shabaz Ansari</h5>
                            <p className="card-text">I am an aspiring Full Stack Developer at Masai school. This is my first react application.</p>
                            <p className="card-text"><code>Fresher</code></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-3 px-4" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }}>

                <h2>About Us</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <code>.EDITOR</code>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }}><code>EDITOR</code> is a <code>Text Editor Applicatoin</code> which lets a user to enter, check and modify and a user can do much more with their text.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                How EDITOR Works?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }}>It is very easy to work with  <code>.EDITOR</code> a user just need to enter their content/text in the Textfeild and they can operate/manipulate their text. They can convert it to<code> UPPERCASE, LOWERCASE, CAPITALIZE, TITLE CASE, KEBABCASE, CAPITALIZED-KEBABCASE, SNAKECASE, CAPITALIZE_SNAKECASE, REMOVE EXTRA SPACES, COPY TO CLIPBOARD, CLEAR THE TEXTFEILD.</code></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                About This Application
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }}>This application has been developed by using <code>create-react-app.</code> A React application is basically a single page application (' which doesn't get reloded while a user navigates around it. ') which uses <code>react-router.</code> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. And this is how the React Router works.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
