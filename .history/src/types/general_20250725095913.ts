export type Status = {
    status: 'ativo' | 'inativo';
};
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

{
    "id": "ff1c8fd2-7e09-44d1-96c9-948e1808bd4e",
        "name": "Caleb Isaac Samuel Assunção",
            "document": "365.277.030-74",
                "password": "teste2",
                    "status": "ativo",
                        "token": "fake-jwt-token-123"
}