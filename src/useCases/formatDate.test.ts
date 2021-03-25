import formatDate from './formatDate';

describe('formatDate', () => {
    it('returns Friday, 1 January when passed the appropriate date', () => {
        const date = new Date(2021, 0, 1);
        const response = formatDate(date);

        expect(response).toBe('Friday, 1 January');
    })
})