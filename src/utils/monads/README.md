# Monads Helpers
Монады - своего рода контейнеры (здесь реализованы в виде JS-объектов),
которые хранят свое состояние и позволяют преобразовывать его, при этом сохраняя имутабельность
данных.

Монады организуют последовательные вычисления при помощи цепочек (чейнинг).
Монады позволяют сделать код плоским, лаконичным и улучшить читаемость.

Папка содержит следующие монады:

## Monad
Простейшая монада для организации чейнинга:
```js
  const adjustTwo= x => x + 2;
  const multiplyByFive = x => x * 5;
  const substractTen = x => x - 10;
  const multiplyByThree = x => x * 3;
  
  const func = value => Monad(value)
    .do(adjustTwo) // применить doSomething к value
    .do(multiplyByFive)
    .ifDo(state => state !== 5, substractTen) // применить функцию по условию (условие зависит от состояния)
    .ifDo(value > 20, multiplyByThree) // применить фунцию по условию (условие не зависит от состояния)
    .getValue(); // распаковать монаду и получить значение
    
  const result = func(5); // равно 0
  
  // вариант без монады:
  const func2 = value => {
    const num = multiplyByFive(adjustTwo(value));
    
    if (num !== 5) {
      const newNum = substractTen(num);
      
      if (newNum > 20) {
        return multiplyByThree(newNum);
      } else {
        return newNum;
      }
    } else {
      if (num > 20) {
        return multiplyByThree(num);
      } else {
        return num;
      }
    }
  }
```

API - [здесь.](Monad.md)

## Maybe
Монада для работы с null/undefined:
```js
  const func = obj => Maybe(obj)
    .do(state => state.firstField)
    .do(state => state.secondField)
    .do(state => state.lastField)
    .do(state => state.func())
    .withDefault(1)
    .getValue(); // распаковать монаду и получить значение
    
    // вариант без монады (пирамида погибели):
    const func2 = obj => {
      if (obj) {
        if (obj.firstField) {
          if (obj.firstField.secondField) {
            if (obj.firstField.secondField.lastField) {
              if (obj.firstField.secondField.lastField.func) {
                return func() || 1;
              } else {
                return 1;
              }
            } else {
              return 1;
            }
          } else {
            return 1;
          }
        } else {
          return 1;
        }
      } else {
        return 1;
      }
    }
```

API - [здесь.](Maybe.md)

## Guards
Монада для организации pattern match:
```js
  const reducer = action => Guards(action)
    .when(action.type === 'a', handleA) // вызывается первая функция с подходящим условием
    .when(action.type === 'b', handleB)
    .when(action.type === 'c', handleC)
    .when(action.type === 'd', handleD)
    .otherwise(handleDefault); // если ни одно условие не подошло
```

Пример с древовидной структурой:
```js
const func = value => Guards(value)
  .when(isError && isServerError, handleServerError)
  .when(isError, handleClientError)
  .when(shouldGiveCredit && hasGuarant, giveCreditWithGuarant)
  .when(shouldGiveCredit, giveCreditWithoutGuarant)
  .otherwise(doNotGiveCredit);
  
const func2 = value => {
  if (isError) {
    if (isServerError) {
      handleServerError(value)
    } else {
      handleClientError(value);
    } 
  } else {
    if (shouldGiveCredit) {
      if (hasGuarant) {
        giveCreditWithGuarant(value);
      } else {
        giveCreditWithoutGuarant(value);
      }
    } else {
      doNotGiveCredit(value);
    }
  }
};
```

API - [здесь.](Guards.md)
