export const formatDate = (date: Date): string => {

    console.log(date)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro = 0
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
