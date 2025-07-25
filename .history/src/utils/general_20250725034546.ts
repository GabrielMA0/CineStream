export const toggleUserStatus = (id: string): void => {
    const index = this.user.findIndex(u => u.id === id);
    if (index !== -1) {
        if (this.user[index].status === 'inativo') {
            this.user[index].status = 'ativo'
        } else {
            this.user[index].status = 'inativo'
        }
    }
}