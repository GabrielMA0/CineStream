export const filterClient = (filterText: string, data: any, dataStore: any) => {

    if (!filterText) return rentals.value = rentalStore.rentals;

    rentals.value = rentalStore.rentals.filter(
        client => client.client.toLowerCase().includes(filterText)
    )

}

export const filterStatus = (e: any) => {
    const status = e.target.value;

    if (status === 'Todos') return rentals.value = rentalStore.rentals;

    rentals.value = rentalStore.rentals.filter(
        client => client.status.toLowerCase() === status.toLowerCase()
    )
}