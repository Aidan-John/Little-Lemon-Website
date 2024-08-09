import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeTimes, updateTimes } from '../App';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

test('Renders the BookingForm heading', () => {
    render(<Router><BookingForm availableTimes={mockAvailableTimes} /></Router>);
    const headingElement = screen.getByText("Reserve A Table");
    expect(headingElement).toBeInTheDocument();
});

test('validate initializeTimes', () => {
    render(<Router><BookingForm availableTimes={mockAvailableTimes} /></Router>);
    const initTimes = initializeTimes();
    expect(initTimes.length).toBeGreaterThan(0);
});

test('validate updateTimes', () => {
    const times = updateTimes(initializeTimes, {type: 'updateTimes' , newDate: '2022-01-01'});
    expect(times).toEqual(updateTimes(initializeTimes, {type: 'updateTimes' , newDate: '2022-01-01'}));
});