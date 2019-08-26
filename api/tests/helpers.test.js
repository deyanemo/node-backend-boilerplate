const helpers = require('../helpers');


describe('Test helper module', () => {
    it('should return undefined when no password passed', () => {
        const result = helpers.Hash();
        expect(result).toBeUndefined()
    })

    it('should return an hash string when password passed', () => {
        const result = helpers.Hash("secret");
        expect(result.length).toBeGreaterThan(14)
    })

    it('should return false when password is wrong!', () => {
        const password = helpers.Hash("secret");
        const result = helpers.Compare("non-secret", password);
        expect(result).toBeFalsy()
    })

    it('should return true when password is correct', () => {
        const password = helpers.Hash("secret");
        const result = helpers.Compare("secret", password);
        expect(result).toBeTruthy()
    })
})
