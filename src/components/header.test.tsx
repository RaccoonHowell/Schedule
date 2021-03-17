import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';


describe('header', () => {
    it('renders January correctly', () => {
        const { container, getByText } = render(<Header month={'January'} />)
        expect(getByText('January')).toBeInTheDocument();
    })
})