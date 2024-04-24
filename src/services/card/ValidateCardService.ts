import prismaClient from "../../prisma";

type CardValidationRequest = {
    creditCardNumber: string,
    userId: string,
}


class ValidateCardService {

    async execute(payload: CardValidationRequest) {

        payload.creditCardNumber = payload.creditCardNumber.replace(' ', '').replace('-', '').replace('.', '');

        const existsByNumber = await prismaClient.cartao.findFirst({
            where: {
                numero: payload.creditCardNumber
            }
        });

        if (!existsByNumber) {
            return { mensagem: 'Erro na validação' };
        }

        if(existsByNumber.idUsuario === payload.userId) {
            return { mensagem: 'Validação OK' }
        } else {
            return { mensagem: 'Erro na validação' };
        }

    }

}

export { ValidateCardService };