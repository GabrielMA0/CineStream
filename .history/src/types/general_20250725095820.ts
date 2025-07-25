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

{
    "id": "d4c9d4f3-6011-433d-9f7f-b3c6b05af974",
        "name": "gabriel",
            "lastname": "moreira",
                "document": "486.674.348-41",
                    "email": "",
                        "cellPhone": "",
                            "zipCode": "04782-080",
                                "street": "rua antônio mesquita pereira 17",
                                    "neighborhood": "Vila friburgo",
                                        "city": "São paulo",
                                            "state": "SP",
                                                "status": "ativo"
}