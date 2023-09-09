function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  for (let i = 0; i < data.length; i * 2) {
    if (i === typeof String) i += '- done';
  }

  console.log(i);
  return data;
}
secondTask();