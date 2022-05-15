export const getMessageFromErrorCode = (code) => {
  switch (code) {
  case 'auth/invalid-email':
    return 'Неверно указан Email адрес';
  case 'auth/wrong-password':
    return 'Неверно указан пароль';
  case 'auth/too-many-requests':
    return 'Слишком много попыток, повторите чуть позже';
  default:
    return 'Что-то пошло не так...';
  }
};
