export const isObjectEmpty = (myObject) => {
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const truncate = (data, maxLength) => {
  const shortFunFact = data.substring(0, maxLength);
  return `${shortFunFact}...`;
};


export const imageBaseLink = 'https://api.publishxi.com/picture?ImageGUID=';
export const fileBaseLink = 'https://api.publishxi.com/uploads/';
