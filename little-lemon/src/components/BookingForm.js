import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function BookingForm({availableTimes, dispatch, submitForm}) {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [partySize, setPartySize] = React.useState('');
    const [occasion, setOccasion] = React.useState('');
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        console.log("Date changed:", newDate);
        setDate(newDate);
        dispatch({ type: "updateTimes", newDate: newDate });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date: date,
            time: time,
            partySize: partySize,
            occasion: occasion
        };
        ;
        setFormSubmitted(submitForm(formData));
        };

    React.useEffect(() => {
        if (formSubmitted){
            navigate("/confirmed");

        }
    }, [formSubmitted]);
    
 


    return(
        <div class="booking-form">
            <h1>Reserve A Table</h1>
            <form onSubmit={handleSubmit}>
                <div class="date-time">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" data-testid="res-date" onChange={handleDateChange} />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={(newTime) => setTime(newTime)}>
                    {availableTimes.map((time) => <option>{time}</option>)}
                    
                </select>
                </div>

                <div class="submit-button">
                    <input type="submit" value="Make Your reservation"></input>
                </div>

                <div class="party-occasion">
                    <label htmlFor="party-size">Party Size</label>
                    <select id="party-size" onChange={(newPartySize) => setPartySize(newPartySize)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={(newOccasion) => setOccasion(newOccasion)}>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                        <option>N/A</option>
                    </select>

                </div>
            </form>

        </div>
    );
};