export const toggleStatus = (id: string, dataStore: any): void => {
    const index = dataStore.findIndex(u => u.id === id);
    if (index !== -1) {
        if (dataStore[index].status === 'inativo') {
            dataStore[index].status = 'ativo'
        } else {
            dataStore[index].status = 'inativo'
        }
    }
}