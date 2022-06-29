class CompareExample {
  compare(base: object, example: object): Array<Boolean> {
    const arrBase = Object.values(base);
    const arrExample = Object.values(example);

    const responses = [];

    arrBase.map((base, index) => {
      if (arrExample[index] >= base) {
        responses.push(true);
      } else {
        responses.push(false);
      }
    });

    return responses;
  }
}

export default new CompareExample();
