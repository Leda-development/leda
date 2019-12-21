declare module 'attr-accept' {
  export default function accept(input: { name: string, type?: string }, accept: string | string[]): boolean;
}
