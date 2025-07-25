import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useRentalsStore = defineStore('rentals', {
    state: (): { rentals: object } => ({
        rentals: [],
    }),
    actions: {
        addRental(rental: User): void {
            this.rentals.push(rental)
        },
        toggleStatus(id: string, dataStore: any): void => {
    const index = dataStore.findIndex(u => u.id === id);
    if (index !== -1) {
        if (dataStore[index].status === 'inativo') {
            dataStore[index].status = 'ativo'
        } else {
            dataStore[index].status = 'inativo'
        }
    }
}
    },

persist: true

});
