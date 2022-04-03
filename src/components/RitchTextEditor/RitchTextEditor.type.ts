import React, { Dispatch, SetStateAction } from "react";

export type RitchTextEditorProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>; 
}
