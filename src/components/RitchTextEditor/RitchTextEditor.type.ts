export type RitchTextEditorProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (data: {
    text: string;
    html: string;
  }, event?: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
