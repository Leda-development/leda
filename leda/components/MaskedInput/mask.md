# Masked input

Applies to the `MaskedInput` component.
Specifies the format of the value to be entered into the input.
It is composed of a set of special characters and passed to the `mask` prop:

## Character Description

* `#` - Requires a digit (0-9).
* `l` - Requires an Latin alphabet character (a-Z).
* `L` - Requires an Latin alphabet character (a-Z), converts to an uppercase letter when entered.
* `c` - Requires a Cyrillic alphabet character (а-Я).
* `C` - Requires a Cyrillic alphabet character (а-Я), converts to an uppercase letter when entered.
* `x` - Any character.
* `w` - Requires a digit (0-9) or a Latin alphabet character (a-Z).
* `z` - Requires a digit (0-9), a Latin alphabet character (a-Z), or a Cyrillic alphabet character (а-Я).

## Examples

mask="+49 (###) ###-###-###" // +49 (123) 456-78-90 (phone number)

mask="#### #### #### ####" // 1234 5678 9012 3456 (bank card number)

mask="LL#########LL" // CA123456789UA (track number of international mail)

mask="CC-##" // АБ-22
