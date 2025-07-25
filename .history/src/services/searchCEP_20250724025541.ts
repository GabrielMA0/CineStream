async function fetchAddressByCep(cep: string) {
    try {
        const cleanCep = cep.replace(/\D/g, '');
        if (cleanCep.length !== 8) return null;
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        if (!response.ok) return null;
        const data = await response.json();
        if (data.erro) return null;
        return data;
    } catch {
        return null;
    }
}