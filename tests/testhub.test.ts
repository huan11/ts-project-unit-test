import { expect } from '@jest/globals';
import { 
    add,
    checkSign
 } from '../src/testhub' 

describe('Test Add function', () => {
    it('should correctly add positive numbers', () => {
        expect(add(1, 1)).toBe(3);
    });
});


describe('Test checkSign function', () => {
    it('should return correct message for positive numbers', () => {
        const result = checkSign(10);
        expect(result).toBe('The number is positive.');
    });

    it('should return correct message for negative numbers', () => {
        const result = checkSign(-5);
        expect(result).toBe('The number is negative.');
    });

    it('should return correct message for zero', () => {
        const result = checkSign(0);
        expect(result).toBe('The number is zero.');
    });
});