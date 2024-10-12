import React from 'react'

const AuthFitBit = () => {
    const Scope = 'profile activity heartrate sleep';

    const authTokenFitBit = () => {
        const fitBitUrl = `https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=${import.meta.env.VITE_FITBIT_CLIENT_ID}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_FITBIT_REDIRECT_URI)}&scope=${Scope}&expires_in=604800`;

        //sends user to fitbit's authorization page
        window.location.href = fitBitUrl;
    }

  return (
    <div>
        <header>
        <h1>VitalSim</h1>
        <div>
          <button onClick={authTokenFitBit}>Allow Access to FitBit</button>     
        </div>
      </header>
    </div>
  )
}

export default AuthFitBit
