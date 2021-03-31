import React from 'react';
import { render } from '@testing-library/react';
import EventCard from './eventCard';
import Event from '../interfaces/event';


describe('EventCard', () => {
    it('renders an event correctly', () => {
        const event: Event = {
            startDate: new Date(2021, 0 , 8, 10, 0),
            endDate: new Date(2021, 0, 8, 12, 0),
            name: 'Morning Run'
        }

        const { container, getByText } = render(<EventCard event={ event } />)
        expect(getByText('Friday, 8 January')).toBeInTheDocument();
        expect(getByText('Morning Run')).toBeInTheDocument();
        expect(getByText('10:00 - 12:00')).toBeInTheDocument();
    })
})