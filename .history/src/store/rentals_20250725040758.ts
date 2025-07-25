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
        toggleRentalStatus(id: string): void {
            const index = this.rentals.findIndex(u => u.id === id);
            if (index !== -1) {
                if (this.rentals[index].status === 'alugado') {
                    this.rentals[index].status = 'entregue'
                } else {
                    this.rentals[index].status = 'alugado'
                }
            }
        }
    },

    persist: true

});
