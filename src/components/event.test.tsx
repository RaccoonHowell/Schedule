import React from 'react';
import { render } from '@testing-library/react';
import Event from './event';


describe('event', () => {
    it('renders Malcolm\'s Birthday correctly', () => {
        const { container, getByText } = render(<Event event={'Malcolm\'s Birthday'} />)
        expect(getByText('Malcolm\'s Birthday')).toBeInTheDocument();
    })
})