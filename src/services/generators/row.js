const row = (base, str) => {
  for (let j = 1; j < 10; j++)
    str += `${j} * ${base} = ${j * base}\t`;
  return str += '\n';
}

module.exports = {
  row
};

