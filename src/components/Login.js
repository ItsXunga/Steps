import React from "react";
import { Link } from "react-router-dom";
import '../style/Login_Register.css'

const Login = () => {

    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')

    return(
        <div className="maindiv">
                <div style={{height: '2rem'}}>
                    <p style={{fontSize: 25}}>Olá outra vez!</p>
                </div>
                <section className="form">
                    <div className="innerForm">
                        <div>
                            <label className="label" for='username'>Username</label>
                            <input
                                className="input"
                                type='text'
                                id='username'
                                placeholder="user222" 
                            />
                        </div>

                        <div>
                            <label className="label" for='password'>Password</label>
                            <input
                                className="input"
                                type='text'
                                id='password' 
                            />
                        </div>
                        
                        <div style={{paddingTop: '2rem'}}>
                            <Link to={'/profile'}>
                            <button className="blueButton" type="submit">Entrar</button>
                            </Link>
                        </div>

                        <div>
                            <p className="link">Esqueceste-te da password?</p>
                        </div>

                        <div style={{display: 'flex',  justifyContent: 'center', padding: '1rem'}}>
                            <svg width="222" height="14" viewBox="0 0 222 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.364 11.15C106.824 11.15 106.353 11.0283 105.949 10.785C105.546 10.5417 105.233 10.2067 105.009 9.78C104.789 9.35 104.679 8.85667 104.679 8.3C104.679 7.73333 104.793 7.23667 105.019 6.81C105.246 6.38333 105.561 6.05 105.964 5.81C106.368 5.57 106.834 5.45 107.364 5.45C107.908 5.45 108.381 5.57167 108.784 5.815C109.188 6.05833 109.501 6.395 109.724 6.825C109.948 7.25167 110.059 7.74333 110.059 8.3C110.059 8.86 109.946 9.355 109.719 9.785C109.496 10.2117 109.183 10.5467 108.779 10.79C108.376 11.03 107.904 11.15 107.364 11.15ZM107.364 10.02C107.844 10.02 108.201 9.86 108.434 9.54C108.668 9.22 108.784 8.80667 108.784 8.3C108.784 7.77667 108.666 7.36 108.429 7.05C108.193 6.73667 107.838 6.58 107.364 6.58C107.041 6.58 106.774 6.65333 106.564 6.8C106.358 6.94333 106.204 7.145 106.104 7.405C106.004 7.66167 105.954 7.96 105.954 8.3C105.954 8.82333 106.073 9.24167 106.309 9.555C106.549 9.865 106.901 10.02 107.364 10.02ZM113.186 11.155C112.786 11.155 112.456 11.0883 112.196 10.955C111.936 10.8217 111.729 10.6517 111.576 10.445C111.423 10.2383 111.309 10.0183 111.236 9.785C111.163 9.55167 111.114 9.33167 111.091 9.125C111.071 8.915 111.061 8.745 111.061 8.615V5.6H112.281V8.2C112.281 8.36667 112.293 8.555 112.316 8.765C112.339 8.97167 112.393 9.17167 112.476 9.365C112.563 9.555 112.689 9.71167 112.856 9.835C113.026 9.95833 113.254 10.02 113.541 10.02C113.694 10.02 113.846 9.995 113.996 9.945C114.146 9.895 114.281 9.81 114.401 9.69C114.524 9.56667 114.623 9.39833 114.696 9.185C114.769 8.97167 114.806 8.70167 114.806 8.375L115.521 8.68C115.521 9.14 115.431 9.55667 115.251 9.93C115.074 10.3033 114.813 10.6017 114.466 10.825C114.119 11.045 113.693 11.155 113.186 11.155ZM114.951 11V9.325H114.806V5.6H116.016V11H114.951Z" fill="#393C6A"/>
                            <line y1="8.75" x2="90" y2="8.75" stroke="#393C6A" stroke-width="0.5"/>
                            <line x1="132" y1="8.75" x2="222" y2="8.75" stroke="#393C6A" stroke-width="0.5"/>
                            </svg>
                        </div>

                        <div>
                            <button className="orangeButton" type="submit">Entrar sem conta</button>
                        </div>

                        <div>
                            <Link to={'/register'}>
                                <p className="link">Regista-te aqui!</p>
                            </Link>
                        </div>

                    </div>

                       
              </section>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                       
                        <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.19831" cy="4.19855" r="4.19831" fill="#393C6A"/>
                            <circle cx="21.6182" cy="4.19819" r="4.19831" fill="white"/>
                        </svg>
                        
                    </div>
                  
        </div>
    )
}

export default Login
