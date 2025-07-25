export type User = {
    id: string;
    name: string;
    document: string;
    password: string;
    status: 'ativo' | 'inativo';
};