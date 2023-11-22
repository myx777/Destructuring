
// TODO: write your code here
export function extractSpecialAttacks(character) {
    // Используем деструктуризацию для извлечения поля special из объекта character
    const { special } = character;
  
    // Создаем новый массив с обработанными данными
    return special.map(({ id, name, description, icon }) => ({
      id,
      name,
      description: description || 'Описание недоступно', // Устанавливаем значение по умолчанию
      icon,
    }));
  
  }
  