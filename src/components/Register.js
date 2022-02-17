import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../assets/gradient";

const Register = () => {
    return(
        <div style={theme}>

        <div style={{position: 'absolute', left: 0, top: 0, margin: '.75rem', padding: '.75rem'}}>
            <Link to={'/login'}>
                <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8205 0.620071C14.454 0.0864919 13.7508 -0.148228 13.2549 0.0976033C13.0126 0.217684 0.247861 12.7286 0.112174 12.9789C0.0504629 13.0928 1.58925e-07 13.3272 1.60986e-07 13.5C1.63047e-07 13.6728 0.0504629 13.9072 0.112174 14.0211C0.247861 14.2714 13.0126 26.7823 13.2549 26.9024C13.7508 27.1482 14.454 26.9135 14.8205 26.3799C15.016 26.0955 15.06 25.5643 14.9119 25.2769C14.8645 25.1849 12.1667 22.4974 8.9168 19.3048L3.00784 13.5L8.9168 7.69523C12.1667 4.50256 14.8645 1.81513 14.9119 1.72309C15.06 1.43573 15.016 0.904524 14.8205 0.620071Z" fill="#393C6A"/>
                </svg>
            </Link>
        </div>

        <div style={{paddingTop: '5rem', paddingLeft: '2.5rem', margin: 'auto'}}>
            <p style={{fontSize: 25, margin:0}}>Primeira vez na Steps?</p>
            <p style={{fontSize: 25, margin:0}}>Cria uma conta!</p>
        </div>
        <div style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9)5%, rgba(255, 255, 255, 0.5)95%)',
            borderRadius: 30,
            margin: '2.5rem',
            
        }}>
            <section style={{width: '100%', marginLeft: '2.5rem', marginRight: '2.5rem', paddingBottom: '4rem'}}>
                <div style={{marginTop: '3rem'}}>
                    <p style={{textAlign: 'center', fontSize: 15}}>Preenche os seguintes campos:</p>
                    <div style={{marginTop: '2rem'}}>
                        <label style={{display: 'flex', fontSize: 12, marginBottom: '.5rem'}} for='username'>Username</label>
                        <input
                            style={{
                                border: 'none',
                                borderRadius: 50,
                                padding: '1rem',
                                width: '100%'
                            }}
                            type='text'
                            id='username' 
                        />
                    </div>
                </div>

                <div style={{marginTop: '2rem'}}>
                    <label style={{display: 'flex', fontSize: 12, marginBottom: '.5rem'}} for='password'>Password</label>
                    <input
                        style={{
                            border: 'none',
                            borderRadius: 50,
                            padding: '1rem',
                            width: '100%',
                        }}
                        type='text'
                        id='password' 
                    />
                </div>

                <div style={{marginTop: '2rem'}}>
                    <label style={{display: 'flex', fontSize: 12, marginBottom: '.5rem'}} for='password'>Repete a password</label>
                    <input
                        style={{
                            border: 'none',
                            borderRadius: 50,
                            padding: '1rem',
                            width: '100%',
                        }}
                        type='text'
                        id='password' 
                    />
                </div>
                
                <div style={{marginTop: '3rem'}}>
                    <button style={{width: '100%', border: 'none', borderRadius: 50, background: '#393C6A', color: 'white', fontSize: 17, height: '3rem'}} type="submit">Registar</button>
                </div>

            </section>

               
      </div>
            <div style={{display: "flex", justifyContent: 'center', marginTop: '4rem'}}>
               
                <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.19831" cy="4.19855" r="4.19831" fill="white"/>
                    <circle cx="21.6182" cy="4.19819" r="4.19831" fill="#393C6A"/>
                </svg>
                
            </div>
          
</div>
    )
}

export default Register;