# Number formatting

Applies to NumericTextBox and NumericRange components.
Sets the format of displaying a numeric value in an input.
It is selected by passing one of the options to the `format` prop.

You can create any string format using the following construction order.

* ** **Symbol `"#"`** &mdash; Sets a value rounded to an integer. Must necessarily be present in the format.

      The number entered in the input is: 1234.5678;

      format="#" // Outputs 1234.

* **Symbol `"."` or `","`** &mdash; Pointer to the beginning of the fractional part of the number. It is a linking character, it does not affect the format directly.

      The number entered into the input: 1234.5678;

      format="#." // Outputs 1234

* **Symbol `"#"`** &mdash; Indicator of rounding accuracy. The number of characters indicates the number of decimal places.

      The number entered in the input is: 1234.5678;

      format="#.##" // Prints 1234.57

      format="#.####" // Prints 1234.5678.

      format="#.#####" // Prints 1234.56780.

* **Symbol `string`** &mdash; Suffix. Characters passed after the mask will be put into the suffix unchanged.
IMPORTANT: There MUST be a space character before the suffix!

      The number entered in the input is: 1234.5678;

      format="#.## foo" // Prints 1234.56 foo

      format="#.## x100 psc." // Outputs 1234.56 x100 psc.


* **Symbol `string`** &mdash; Prefix. Characters passed before the mask will be put into the prefix unchanged.

      The number entered in the input is: 1234.5678;

      format="from #.##" // Outputs from 1234.57

      format="up to #.##"// Outputs up to 1234.57      
