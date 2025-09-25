const DB = (() => {
  const data = {};

  function getDestinos() {
    return Object.keys(data);
  }

  function addNota(dest, num, vol) {
    const nota = {
      dest,
      num,
      vol,
      id: crypto.randomUUID(),
    };

    data[dest] = data[dest] ? data[dest] : [];
    data[dest].push(nota)
  }

  function getNotas(dest) {
    return data[dest];
  }

  return { getDestinos, addNota, getNotas };
})();

DB.addNota("JPA", "123", "1");
DB.addNota("MEA", "234", "2");
DB.addNota("FST", "345", "3");

DB.addNota("JPA", "1234", "1");
DB.addNota("MEA", "2345", "2");
DB.addNota("FST", "3456", "3");

DB.addNota("JPA", "12345", "1");
DB.addNota("MEA", "23456", "2");
DB.addNota("FST", "34567", "3");

export default DB;
