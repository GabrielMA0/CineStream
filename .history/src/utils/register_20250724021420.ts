
export const checkExistingRegistration = (storeData: any, userData: object): boolean => {
    return storeData.some((u: any) => u.document === userData.document);
}
export const getDataById = (storeData: any[], id: string): any => {
    return storeData.find((u: any) => u.id === id);
}

export const checkExistingRegistrationEdit = (storeData: any[], userData: { document: string, id: string }): boolean => {
    return storeData.some((u: any) => u.document === userData.document && u.id !== userData.id);
};