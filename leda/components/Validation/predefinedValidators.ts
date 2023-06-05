import { validate } from '../../validators';
import { NormalizedValidatorObject, PredefinedValidator } from './types';

export const PREDEFINED_VALIDATORS: Record<PredefinedValidator, NormalizedValidatorObject> = {
  // Common validators
  creditCardNumber: {
    validator: validate.creditCardNumber,
    invalidMessage: 'Card number is not valid'
  },
  email: {
    validator: validate.email,
    invalidMessage: 'E-mail is not valid',
  },
  password: {
    validator: validate.password,
    invalidMessage: 'Use at least 8 latin lowercase and uppercase letters and numbers',
  },
  url: {
    validator: validate.url,
    invalidMessage: 'Url is not valid',
  },

  // Russia specific validators  
  cadastralNumber: {
    validator: validate.cadastralNumber,
    invalidMessage: 'Введите кадастровый номер',
  },
  inn: {
    validator: validate.inn,
    invalidMessage: 'Введите ИНН',
  },
  innCorp: {
    validator: validate.innCorp,
    invalidMessage: 'Введите ИНН юридического лица',
  },
  innPrivate: {
    validator: validate.innPrivate,
    invalidMessage: 'Введите ИНН физического лица',
  },
  postalCode: {
    validator: validate.postalCode,
    invalidMessage: 'Введите почтовый индекс',
  },
  snils: {
    validator: validate.snils,
    invalidMessage: 'Введите СНИЛС',
  },
  ogrn: {
    validator: validate.ogrn,
    invalidMessage: 'Введите ОГРН',
  },
  ogrnIp: {
    validator: validate.ogrnIp,
    invalidMessage: 'Введите ОГРНИП',
  },
  kpp: {
    validator: validate.kpp,
    invalidMessage: 'Введите КПП',
  },
  okpo: {
    validator: validate.okpo,
    invalidMessage: 'Введите ОКПО',
  },
};
