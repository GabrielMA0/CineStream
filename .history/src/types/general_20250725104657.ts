export type Status = {
    status: 'ativo' | 'inativo';
};
export type StatusRental = {
    status: 'alugado' | 'entregue';
};

export type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export type User = {
    id: string;
    name: string;
    document: string;
    password: string;
    status: Status;
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

export type Clients = {
    id: string;
    name: string;
    lastName: string;
    document: string;
    email: string;
    cellPhone: string;
    zipCode: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    status: Status;
};

export type Auth = {
    id: string;
    name: string;
    document: string;
    password: string;
    status: Status;
    token: string;
};

