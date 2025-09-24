export class UserService {
    isUserActive(userRole: string, lastLoginDate: Date): boolean {
        const today = new Date();
        // Pitest will try to mutate '&&' to '||'
        if (userRole === 'admin' && today.getFullYear() === lastLoginDate.getFullYear()) {
            return true;
        }
        return false;
    }
}

export const userService = new UserService();