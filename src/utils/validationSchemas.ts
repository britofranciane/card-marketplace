import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string().required('Nome é um campo obrigatório.'),
  email: Yup.string()
    .email('Digite um email válido no formato "exemplo@exemplo.com"')
    .required('Email é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não são iguais.')
    .required('É necessário confirmar a senha'),
  isOldEnough: Yup.boolean()
    .oneOf([true], 'Marque a opção se concorda.')
    .required(),
});

export const validationSchemaCreateTrade = Yup.object({
  offeringCardId: Yup.object()
    .shape({
      label: Yup.string().required('Select a card to offer'),
      value: Yup.string().required('Select a card to offer'),
    })
    .nullable()
    .required('Select a card to offer'),
  receivingCardId: Yup.object()
    .shape({
      label: Yup.string().required('Select a card to receive'),
      value: Yup.string().required('Select a card to receive'),
    })
    .nullable()
    .required('Select a card to receive')
    .test(
      'notEqual',
      'The offering and receiving cards must be different',
      function (value) {
        const offeringCardId = this.parent.offeringCardId?.value || '';
        const receivingCardId = value?.value || '';
        return offeringCardId !== receivingCardId;
      },
    ),
});

export const validationSchemaAddCard = Yup.object({
  name: Yup.object().shape({
    label: Yup.string().required(
      'Selecione uma carta para adicionar a sua coleção.',
    ),
    value: Yup.string().required(
      'Selecione uma carta para adicionar a sua coleção.',
    ),
  }),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string().required('Por favor, digite sua senha.'),
});

export const validationSchemaRegister = Yup.object({
  name: Yup.string().required('Nome é campo obrigatório.'),
  email: Yup.string()
    .email('Digite um email válido no formato "exemplo@exemplo.com"')
    .required('Email é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não são iguais.')
    .required('É necessario confirmar a senha'),
  isOldEnough: Yup.boolean()
    .oneOf([true], 'Marque a opção se concorda.')
    .required(),
});