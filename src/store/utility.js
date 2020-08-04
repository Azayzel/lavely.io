export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const isInt = n => {
  return Number(n) === n && n % 1 === 0;
};

export const isFloat = n => {
  return Number(n) === n && n % 1 !== 0;
};
