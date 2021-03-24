import React from 'react';
import { render } from '@testing-library/react';
import Time from './time';


describe('time', () => {
    it('renders 14:20 - 14:50 correctly', () => {
        const startTime = new Date(2021, 2, 12, 14, 20);
        const finishTime = new Date(2021, 2, 12, 14, 50);
        const { container, getByText } = render(<Time startTime={startTime} finishTime={finishTime} />)
        expect(getByText('14:20 - 14:50')).toBeInTheDocument();
    })
})