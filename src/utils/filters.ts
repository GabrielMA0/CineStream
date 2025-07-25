export const filterClient = (filterText: string, data: any, dataStore: any) => {
    if (!filterText) {
        data.value = [...dataStore]; // cria uma cópia para evitar referência direta
        return;
    }

    data.value = dataStore.filter(
        (client: any) => client.name.toLowerCase().includes(filterText)
    )
}


export const filterStatus = (status: string, data: any, dataStore: any) => {

    if (status === 'Todos') return data.value = dataStore;

    data.value = dataStore.filter(
        client => client.status.toLowerCase() === status.toLowerCase()
    )
}