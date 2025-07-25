export const checkExistingRegistration(userData: object): boolean => {
    return this.user.some((u: any) => u.document === userData.document)
}