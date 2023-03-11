const getTypeOfProductValue = (type: string) => {
  switch (type) {
    case 'L':
      return 'л';
    case 'Kg':
      return 'кг';
    default:
      break;
  }
};

export default getTypeOfProductValue;
