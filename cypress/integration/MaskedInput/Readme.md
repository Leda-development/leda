# MaskedInput

## Display
Здесь тестируется внешний вид компонент в зависимости от props

### Placeholder
- :heavy_check_mark: должен отображать плейсхолдер, если этот атрибут передан и поле ввода не в фокусе
- :memo: при фокусе должен исчезать и возвращаться при блюре

### isDisabled
- :heavy_check_mark: при isDisabled инпут должен иметь атрибут disabled и его враппер должен иметь класс .disabled

## Interaction
Здесь тестируется изменения в зависимости от действий пользователя

### Input from keyboard
- :heavy_check_mark: при нажатии backspace должен стирать символы по одному при каждом нажатии
- :memo: выделенные символы должны стираться вместе
- :heavy_check_mark: должен позволять заполнять поля с разными масками
- :heavy_check_mark: должен запретить ввод символов не по маске (e.g. abs1235 -> +7 (123) 5**-** -**)
- :heavy_check_mark: должен позволять ввод только завершенных значений (и отчищать незавершенные при blur)

### Validation
- :heavy_check_mark: должен становиться невалидным, если isRequired и value пустое (при blur)
- :heavy_check_mark: должен становиться невалидным, если isRequired и value незавершенное (при blur)
- :heavy_check_mark: должен станоавиться валидным, если isRequired и value завершенное (при blur)
- :memo: должен станоавитсья невалидным, если кастомный validator возвращает false (простестировать разные типы validator)
- :memo: должен быть невалидным, если predefined validator возвращает false

### Event
- :memo: имеет name в ev.component
- :memo: имеет value в ev.component
- :memo: имеет isValid в ev.component onBlur

## Rest

### Controlled Mode
- :heavy_check_mark: должен отчистить value в контролируемом режиме (value={null}
- :heavy_check_mark: должен установить value в контролируемом режиме (e.g. при клике по button)

