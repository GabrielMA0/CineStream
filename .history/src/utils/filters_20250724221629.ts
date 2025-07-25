export const filterClient = (filterText: string, data: any, dataStore: any) => {

    if (!filterText) return data = dataStore;

    data = dataStore.filter(
        client => client.client.toLowerCase().includes(filterText)
    )

}

export const filterStatus = (status: string, data: any, dataStore: any) => {

    if (status === 'Todos') return data = dataStore;

    data = dataStore.filter(
        client => client.status.toLowerCase() === status.toLowerCase()
    )
}