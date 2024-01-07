export function saveDataLocal(fieldName: string, data: any) {
  const saveData = {
    time: new Date().getTime(),
    value: data,
  };
  localStorage.setItem(fieldName, JSON.stringify(saveData));
}

export function getDataLocal(fieldName: string) {
  const data = localStorage.getItem(fieldName);
  if (data) {
    const dataSave = JSON.parse(data);

    const date = new Date().getTime();
    // время хранение кэша одни сутки
    if (date - dataSave.time <= 8.64e7) {
      return dataSave.value;
    }
  }
  return null;
}
