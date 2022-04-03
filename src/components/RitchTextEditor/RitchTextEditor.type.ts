export type RitchTextEditorProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  value?: string 
}
