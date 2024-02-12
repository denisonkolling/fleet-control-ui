import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string()
    .min(6,'A senha deve conter pelo menos 6 caracteres').max(10, "A senha deve conter pelo maximo 10 caracteres")
    .required('Campo obrigatório'),
  });