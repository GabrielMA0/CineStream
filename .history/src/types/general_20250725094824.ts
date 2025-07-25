export type User = {
    id: string;
    name: string;
    document: string;
    password: string;
    status: 'ativo' | 'inativo';
};

export type Rental = {
    id: string;
    name: string;
    movie: string;
    rentalDate: string;
    deliveryDate: string;
    user: string;
    status: 'alugado' | 'entregue';
};
