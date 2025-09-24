import { UserService } from '../user.service';

describe('UserService', () => {
    it('should be true if user is admin and logged in this year', () => {
        const service = new UserService();
        const lastLogin = new Date();
        expect(service.isUserActive('admin', lastLogin)).toBe(true);
    });
});