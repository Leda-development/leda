declare module 'inputmask-core' {
  export interface InputMaskOptions {
    pattern?: string,
    value?: string,
    formatCharacters?: {
      [x: string]: {
        validate: (char: string) => boolean,
        transform?: (char: string) => string,
      } | null,
    },
    placeholderChar?: string,
    selection?: { start: number, end: number },
    isRevealingMask?: boolean,
  }

  export interface SelectionType {
    start: number,
    end: number,
  }

  export interface Pattern {
    firstEditableIndex: number,
    formatCharacters: InputMaskOptions['formatCharacters'],
    isRevealingMask: boolean,
    lastEditableIndex: number,
    length: number,
    pattern: string[],
    placeholderChar: string,
    source: string,
    _editableIndices: {
      [x: number]: boolean,
    }
  }

  export default class InputMask {
    constructor(options?: InputMaskOptions)

    public emptyValue: string;
    public selection: SelectionType;
    public pattern: Pattern;
    public value: string[];

    public input(char: string): boolean
    public backspace(): boolean
    public paste(input: string): boolean

    public undo(): boolean
    public redo(): boolean

    public getValue(): string
    public getRawValue(): string
    public setValue(value?: string): void
    public setSelection(selection: SelectionType): boolean
    public setPattern(pattern: string, option?: { value?: string, selection?: SelectionType }): void
  }
}
