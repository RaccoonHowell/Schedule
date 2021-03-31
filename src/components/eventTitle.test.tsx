import React from 'react';
import { render } from '@testing-library/react';
import EventTitle from './eventTitle';


describe('event', () => {
    it('renders Malcolm\'s Birthday correctly', () => {
        const { container, getByText } = render(<EventTitle event={'Malcolm\'s Birthday'} />)
        expect(getByText('Malcolm\'s Birthday')).toBeInTheDocument();
    })
})