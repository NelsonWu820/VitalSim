const access_token = "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=23PVJS&scope=activity+cardio_fitness+electrocardiogram+heartrate+irregular_rhythm_notifications+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&code_challenge=wrA0zR26qK1UtD13aO8B5fJeePcvSAjU0rrveLEXZTA&code_challenge_method=S256&state=5y3i3v4q1l6g4p260i344b3b4a4f5d5g&redirect_uri=http%3A%2F%2Flocalhost"

fetch('https://api.fitbit.com/1/user/-/activities/steps/date/today/1y.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json)); 