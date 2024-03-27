# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [1.3.3] - 2024-03-27

### Fixed
- Rating: controlled state
- Rating: uncontrolled state
- Rating: validation


## [1.3.2] - 2024-02-19

### Changed
- SuggestionList: better not found message styles


## [1.3.1] - 2024-02-19

### Fixed
- AutoComplete: clear button not clearing suggestion properly

### Changed
- SuggestionList: better styles
- Modal: better styles


## [1.3.0] - 2024-02-07

### Fixed
- ButtonGroup: missing block border width styles


## [1.2.6] - 2024-02-07

### Fixed
- ButtonGroup: missing block border width styles


## [1.2.5] - 2024-02-07

### Fixed
- ButtonGroup: missing inline border width styles


## [1.2.4] - 2024-02-07

### Fixed
- Button: missing css variables for hover state button text


## [1.2.3] - 2024-02-07

### Fixed
- ButtonGroup: missing css variables for active state button text


## [1.2.2] - 2024-02-06

### Fixed
- ButtonGroup: missing active button css


## [1.2.1] - 2024-01-14

### Fixed
- CheckBox: missing form(formName, checkBoxName).reset()


## [1.2.0] - 2024-01-14

### Added
- CheckBox: now it has all form props


## [1.1.0] - 2024-01-03
🪄🪅🎊🎉🪩

### Changed
- SCSS -> PostCSS
- MultiSelect: noSuggestionsText -> messages


## [0.32.0] - 2024-01-01

Happy new year!

### Removed
- Collapsible: component has been removed
- AutoComplete: **noSuggestionsText** prop has been removed as the functionality is already implemented in **messages** feature

### Changed
- Collapse: new HTML based implementation


## [0.31.2] - 2023-12-14

### Fixed
- Calendar: some missing weeks issue

## [0.31.1] - 2023-11-21

### Fixed
- Password: minor React key issue
- SuggestionItem: minor React key issue


## [0.31.0] - 2023-11-10

### Removed
- Modal: no more **size** prop

### Added
- Validation: **suggestion** field to the submit event for the AutoComplete


## [0.30.1] - 2023-10-02

### Changed
- Modal: better styles


## [0.30.0] - 2023-08-30

### Removed
- Slider
- Demo page running on webpack


## [0.29.1] - 2023-08-28

### Fixed
- TS & eslint errors

### Added
- NextJS docs


## [0.29.0] - 2023-08-28

### Removed
- No more Currency, DropDown, DropDownLink, StatusBar, StickyPanel, VStepper, DropZone, FileDrop, FileUpload

### Added
- Calendar and Dates: customize month names and weekdays names through messages API
- Calendar base theme

### Changed
- refs are now pointing to the outer component wrapper, no nested ref structure


## [0.28.2] - 2023-08-01

### Added
- Collapse: base theme
- Loader: base theme
- Modal: base theme
- Pagination: base theme
- ProgressBar: base theme
- Tabs: base theme


## [0.28.1] - 2023-07-27

### Fixed
- AutoComplete TS minor fix


## [0.28.0] - 2023-07-26

### Added
- AutoComplete: base theme
- DropZone: base theme
- DropDownSelect: base theme
- FileDrop: base theme
- MaskedInput: base theme
- Numeric: base theme
- NumericRange: base theme
- Radio: base theme
- Rating: base theme
- Tooltip: base theme
- Slider: base theme
- Switcher: base theme
- Textarea: base theme


## [0.27.5] - 2023-07-23

### Added
- CheckBox: checkboxIcon prop to make it look whtaever you like
- CheckBox: base CSS

### Changed
- CheckBox: it uses Leda icons instead of font


## [0.27.4] - 2023-07-22

### Added
- 'use client' directive to all client only components


## [0.27.3] - 2023-07-19

### Changed
- BREAKING Password: passwordRules prop validates the password, not just a string
- Password: default minPasswordEvaluationLength is 0 now

### Added
- Password: passwordStrength - use your custom evaluator

### Removed
- Password: passwordEvaluators is removed as being bad UX


## [0.27.2] - 2023-07-19

### Changed
- CSS base theme is default for Button, ButtonGroup & Input

### Added
- CSS base theme for Input

## [0.27.0] - 2023-06-12

### Added
- validators: creditCardNumber
- CSS base theme for Button and ButtonGroup
- Icon: add types declaration
- Autocomplete, DropDownSelect, Multiselect: new prop noSuggestionsText

### Changed
- NoSuggestions: default text changed to english
- Password: change default text to english
- common validators: change default text to english

### Removed
- RUB as default currency (replaced to USD)

## [0.26.0] - 2023-06-01

### Added
- Icons: new component based on FeatherIcons

## [0.0.7] - 2020-03-12

### Fixed
- DropDownSelect: onFilterChange incorrect value on suggestion click
- DateTimePicker: date parsing errors
- Validation: validating by validator when empty and not required

## [0.23.0] - 2020-08-05

### Added
- Calendar: standalone version

## [0.0.6] - 2020-03-05

### Fixed
- StatusBar: typeField prop

## [0.0.5] - 2020-03-03

### Fixed
- Tooltip: flickering on component mount

## [0.0.4] - 2020-02-28

### Fixed
- MaskedInput: reset event & enterPress event


## [0.0.3] - 2020-02-25

### Fixed
- MaskedInput: ChangeEvent type


## [0.0.2] - 2020-02-23

### Fixed
- Collapse: auto height
- MaskedInput: add missing inputValue to event.component


## [0.0.1-alpha.16] - 2020-02-20

### Fixed
- Collapse: better initial rendering for a large number of components


## [0.0.1-alpha.15] - 2020-02-20

### Added
- DropDownLink: better typing, props are generics now
- MultiSelect: add compareObjectsByProp
- MultiSelect: conditional textField typing
- Tabs: improved render of customized elements

### Fixed
- DropDownSelect: reset highlighted item when the input field gets cleared


## [0.0.1-alpha.14] - 2020-02-19

### Fixed
- AutoComplete: shouldCorrectValue in uncontrolled mode


## [0.0.1-alpha.13] - 2020-02-14

### Added
- Validation: L.form('formName').get() and L.form('formName').validate() helpers are available


## [0.0.1-alpha.12] - 2020-02-09

### Changed
- StickyPanel: it is better now, it works as if shouldAlwaysRerender is true, but without performance penalties
- Collapse: in does not use external dependency anymore

### Added
- Collapse: now you can customize it as you like
- DateRange: requiredMessage is available
- Validation: now you can use predefined 'url' validator

### Fixed
- CheckBox: redundant rerender on each change
- DropDownSelect: last element in the suggestions list sometimes was unavailable to choose usin keyboard
- AutoComplete: minSearchLength and isOpen conflicts
- DropDown, DropDownSelect: fix boundingContainerRef types


## [0.0.1-alpha.10 - 0.0.1-alpha.11] - 2020-02-05

### Fixed
- Compilation target for IE support


## [0.0.1-alpha.9] - 2020-02-03

### Added
- Calendar, DropDown: boundingContainerRef prop for customized positioning

### Changed
- AutoComplete: use testing library for tests
