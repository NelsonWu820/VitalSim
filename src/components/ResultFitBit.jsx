import React, { useState, useEffect } from 'react';

//formate date to YYYY-MM-DD
const formatDate = (date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
};

//get date a month ago
const getMonthAgo = (date) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() - 1);
    return formatDate(d);
};

const ResultFitBit = () => {
    const [heartRateToday, setHeartRateToday] = useState(null);
    const [heartRateLastMonth, setHeartRateLastMonth] = useState(null);
    const [profile, setProfile] = useState();
    const token = localStorage.getItem('fitbit_token');

    //make new date for today and last month
    const today = formatDate(new Date());
    const lastMonth = getMonthAgo(new Date());

  
    useEffect(() => {
      if (token){
        fetch('https://api.fitbit.com/1/user/-/profile.json', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setProfile(data.user))
          .catch((error) => console.error('Error fetching profile:', error));

        //heart rate today
        fetch(`https://api.fitbit.com/1/user/-/activities/heart/date/${today}/1d.json`, {
            headers: {
                Authorization: `Bearer ${token}`,
                },  
            })
            .then((res) => res.json())
            .then((data) => setHeartRateToday(data['activities-heart'][0]))
            .catch((error) => console.error('Error fetching today heart rate:', error));
    
          //heart rate last month
          fetch(`https://api.fitbit.com/1/user/-/activities/heart/date/${lastMonth}/1d.json`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setHeartRateLastMonth(data['activities-heart'][0]))
            .catch((error) => console.error('Error fetching last month heart rate:', error));
      }
    }, [token]);
  
    return(
        profile ? ( 
            <div>
                <h1>{profile.displayName}'s Profile</h1>
                <p>Age: {profile.age}</p>
                <p>Gender: {profile.gender}</p>
                <img src={profile.avatar} alt="Avatar" />
                <div>
                    <h2>Heart Rate Today ({heartRateToday.dateTime}):</h2>
                    <ul>
                        {heartRateToday.value.heartRateZones.map((zone, index) => (
                            <li key={index}>
                                {zone.name}: {zone.min} - {zone.max} bpm
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Heart Rate Last Month ({heartRateLastMonth.dateTime}):</h2>
                    <ul>
                        {heartRateLastMonth.value.heartRateZones.map((zone, index) => (
                            <li key={index}>
                                {zone.name}: {zone.min} - {zone.max} bpm
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
         ) : (
            <p>Loading</p>
        )
    )
}

export default ResultFitBit