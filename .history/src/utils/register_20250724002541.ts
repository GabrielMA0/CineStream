import { useUserStore } from '../store/user';

export const checkExistingRegistration(userData: object): boolean => {
    const user = useUserStore();

    return user.some((u: any) => u.document === userData.document);
}