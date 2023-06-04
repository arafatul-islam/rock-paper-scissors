import { describe,it } from "vitest";
import { generateRandomNumber } from "./randomNumber";

describe('random number',()=>{
    it('should generate random number between 0 to 2 inclucive',()=>{
        const randomNumber = generateRandomNumber();

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(2);
    })
})