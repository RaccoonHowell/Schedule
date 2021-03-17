import React from 'react';
import { render } from '@testing-library/react';
import DateHeader from './dateHeader';


describe('date', () => {
    it('renders 17/10/2021 correctly', () => {
        const date = new Date(2021, 9, 17)
        const { container, getByText } = render(<DateHeader date={ date } />)
        expect(getByText('Sun Oct 17 2021')).toBeInTheDocument();
    })
})