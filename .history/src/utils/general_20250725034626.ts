export const toggleStatus = (id: string, dataStore: any): void => {
    const index = dataStore.findIndex(u => u.id === id);
    if (index !== -1) {
        if (this.user[index].status === 'inativo') {
            this.user[index].status = 'ativo'
        } else {
            this.user[index].status = 'inativo'
        }
    }
}