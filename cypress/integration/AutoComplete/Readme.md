# AutoComplete

## Display
- :heavy_check_mark: должен отобразить placeholder
- :heavy_check_mark: должен отрендерить инпут
- :heavy_check_mark: при isDisabled инпут должен иметь атрибут disabled
- :heavy_check_mark: при isOpen должен отрендерить список
- :heavy_check_mark: при isLoading должен отрендерить лоадер
- :heavy_check_mark: должен отображать заданный текст (например "НИЧЕГО НЕ НАЙДЕНО") при noSuggestionsRender
- :heavy_check_mark: должен отображать список, как задано в itemRender


## Interaction
- :heavy_check_mark: должен позволять вводить и удалять символы
- :heavy_check_mark: должен очищать инпут при нажатии на clear button (кнопка hasClearButton отображается и работает)
- :heavy_check_mark: если shouldCorrectValue, не должен позволять ввести строки не из списка
- :heavy_check_mark: filterRule smart должен фильтровтаь все слова из инпута в любом порядке
- :heavy_check_mark: filterRule startsWith должен фильтровать по началу строки в инпуте
- :heavy_check_mark: filterRule includes должен фильтровать по вхождению строки в инпуте
- :heavy_check_mark: minSearchLength должен корректно отрабатывать с выпадающим списком (минимальное кол-во символов для появления выпадающего списка)
- :heavy_check_mark: проверить корректность работы свойства textField для массива данных в data
- :heavy_check_mark: проверить работоспособность isRequired (обязательность поля). Должен появляться класс danger при потере фокуса
- :heavy_check_mark: проверить работоспособность isRequired (обязательность поля). Должен появляться класс danger при нажатии на кнопку
- :heavy_check_mark: проверить отображение requiredMessage при валидации пустого поля


## Rest
- :heavy_check_mark: должен позволять установить значение и отчистить инпут в контролируемом режиме

