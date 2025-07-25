export const formatDate = (date: string): string => {
    const [yearStr, monthStr, dayStr] = date.split('-');
    const year = Number(yearStr);
    const month = Number(monthStr) - 1; // Mês começa em 0
    const day = Number(dayStr);

    const parsedDate = new Date(year, month, day); // cria no horário local

    const formattedYear = parsedDate.getFullYear();
    const formattedMonth = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const formattedDay = String(parsedDate.getDate()).padStart(2, '0');

    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
};
