export type RitchTextEditorProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  // adicionamos value e onChange no input.
  value?: string;
  onChange?: (value: string) => void;
}