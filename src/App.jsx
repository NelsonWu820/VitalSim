import './App.css'

function App() {
  const Scope = 'activity heartrate sleep';

  const authFitBit = () => {
    const fitBitUrl = `https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=${import.meta.env.VITE_FITBIT_CLIENT_ID}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_FITBIT_REDIRECT_URI)}&scope=${Scope}&expires_in=604800`;

    //sends user to fitbit's authorization page
    window.location.href = fitBitUrl;
  }
  return (
    <>
      <header>
        <h1>VitalSim</h1>
        <div>
          <button onClick={authFitBit}>Allow Access to FitBit</button>
        
        </div>
      </header>
    </>
  )
}

export default App
