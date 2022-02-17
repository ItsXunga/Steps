import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../assets/gradient";

const Register = () => {
    return(
        <div style={theme}>
        <div style={{paddingTop: '3rem', paddingLeft: '2.5rem', margin: 'auto'}}>
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