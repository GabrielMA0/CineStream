
export const checkExistingRegistration(storeData, userData: object): boolean => {

    return storeData.some((u: any) => u.document === userData.document);
}