
export const checkExistingRegistration = (storeData: any, userData: object): boolean => {
    return storeData.some((u: any) => u.document === userData.document);
}

export const getDataById = () => {

}