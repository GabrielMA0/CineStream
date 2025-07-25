const checkUserExists(userData: User): boolean => {
    return this.user.some((u: any) => u.document === userData.document)
}