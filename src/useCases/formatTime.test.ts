import formatTime from './formatTime';

describe('formatTime', () => {
    it('returns 10:20 when passed the appropriate date', () => {
        const date = new Date(2021, 2, 24, 10, 20);
        const response = formatTime(date);

        expect(response).toBe('10:20');
    })

    it('returns 10:01 when passed the appropriate date', () => {
        const date = new Date(2021, 2, 24, 10, 1);
        const response = formatTime(date);

        expect(response).toBe('10:01');
    })

    it('returns 09:00 when passed the appropriate date', () => {
        const date = new Date(2021, 2, 24, 9, 0);
        const response = formatTime(date);

        expect(response).toBe('09:00');
    })

    it('returns 17:35 when passed the appropriate date', () => {
        const date = new Date(2021, 2, 24, 17, 35);
        const response = formatTime(date);

        expect(response).toBe('17:35');
    })
})