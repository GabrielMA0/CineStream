export function isValidCPF(cpf: string): boolean {
    // Verifica se o valor existe
    if (!cpf) return false;

    // Remove tudo que não for número (pontuação, espaços, etc.)
    cpf = cpf.replace(/[^\d]+/g, '');

    // CPF deve ter exatamente 11 dígitos e não pode ser uma sequência repetida (ex: 11111111111)
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // ===== Verificação do primeiro dígito verificador =====
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let firstCheckDigit = 11 - (sum % 11);
    if (firstCheckDigit >= 10) firstCheckDigit = 0;

    if (firstCheckDigit !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // ===== Verificação do segundo dígito verificador =====
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    let secondCheckDigit = 11 - (sum % 11);
    if (secondCheckDigit >= 10) secondCheckDigit = 0;

    if (secondCheckDigit !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // CPF é válido
    return true;
}
