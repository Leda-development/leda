export const NO_DATA_TEMPLATES = {
  default: 'default' as const,
};

export const FILE_SIZE_UNITS = {
  byte: 'byte' as const,
  kB: 'kB' as const,
  MB: 'MB' as const,
  GB: 'GB' as const,
  TB: 'TB' as const,
};

export const FILE_SIZE_RUS_UNITS = {
  [FILE_SIZE_UNITS.byte]: 'байт' as const,
  [FILE_SIZE_UNITS.kB]: 'Кб' as const,
  [FILE_SIZE_UNITS.MB]: 'Мб' as const,
  [FILE_SIZE_UNITS.GB]: 'Гб' as const,
  [FILE_SIZE_UNITS.TB]: 'Тб' as const,
};

export const MAX_FILE_SIZE = 100 * 1024 * 1024;
export const MIN_FILE_SIZE = 0;

export const COMPONENTS_NAMESPACES = {
  autoComplete: 'autoComplete',
  button: 'button',
  buttonGroup: 'buttonGroup',
  calendar: 'calendar',
  checkBox: 'checkBox',
  collapse: 'collapse',
  collapseBody: 'collapseBody',
  collapseHeading: 'collapseHeading',
  collapsePanel: 'collapsePanel',
  dateTimeInput: 'dateTimeInput',
  dateTimeInputRange: 'dateTimeInputRange',
  dropDownSelect: 'dropDownSelect',
  dropZone: 'dropZone',
  fileDrop: 'fileDrop',
  fileUpload: 'fileUpload',
  input: 'input',
  loader: 'loader',
  maskedInput: 'maskedInput',
  modal: 'modal',
  modalBody: 'modalBody',
  modalFooter: 'modalFooter',
  modalHeader: 'modalHeader',
  multiSelect: 'multiSelect',
  notifications: 'notifications',
  numericRange: 'numericRange',
  numericTextBox: 'numericTextBox',
  pagination: 'pagination',
  password: 'password',
  progressBar: 'progressBar',
  radio: 'radio',
  rating: 'rating',
  slider: 'slider',
  suggestionList: 'suggestionList',
  switcher: 'switcher',
  tabs: 'tabs',
  tags: 'tags',
  textarea: 'textarea',
  tooltip: 'tooltip',
} as const;

/** Error codes for DropZone, FileDrop и FileUpload */
export enum FileErrorCodes {
  None,
  FileIsTooSmall,
  FileIsTooBig,
  WrongFileFormat,
  AlreadyLoaded,
  TooManyFiles,
  NameIsTooLong,
}

/** DropZone, FileDrop и FileUpload errors */
export const ERROR_MESSAGES = [
  { errorCode: FileErrorCodes.FileIsTooSmall, message: 'The file is smaller than the allowed size' },
  { errorCode: FileErrorCodes.FileIsTooBig, message: 'Maximum file size exceeded' },
  { errorCode: FileErrorCodes.WrongFileFormat, message: 'File format not allowed' },
  { errorCode: FileErrorCodes.AlreadyLoaded, message: 'The file has already been uploaded' },
  { errorCode: FileErrorCodes.TooManyFiles, message: 'Maximum number of files exceeded' },
  { errorCode: FileErrorCodes.NameIsTooLong, message: 'Maximum file name length exceeded' },
];

export const predefinedAllowedSymbols = {
  numbers: /\d/,
};

export const predefinedForbiddenSymbols = {
  numbers: /\d/,
};
