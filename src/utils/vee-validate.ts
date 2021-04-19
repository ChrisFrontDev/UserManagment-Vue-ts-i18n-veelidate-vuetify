/* eslint-disable no-underscore-dangle */
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import i18n from '@/plugins/i18n';

extend('required', {
  ...required,
  message: (fieldName, values) =>
    `${fieldName} ${i18n.t('validation.required', values)}`,
});

extend('email', {
  ...email,
  message: (_, values) => i18n.t('LOGIN_FORM_EMAIL_VALID_MESSAGE', values),
});
