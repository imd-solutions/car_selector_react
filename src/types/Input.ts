import { iButton } from "./Event";

export interface iInputText {
  select: iSelect;
  onKeyupAction: () => void;
  updateResults: (arg1: string, arg2: string) => void;
}

export interface iInputSelect {
  select: iSelect;
  onChangeAction: () => void;
  onKeyupActio?: () => void;
  updateResults: (arg1: string, arg2: string) => void;
}

export interface iSelect {
  id: string;
  label: string;
  cssClass: string;
  name: string;
  inputType: string;
  display: boolean;
  placeholder: string;
  options: iSelectOptions[];
  button: iButton;
}

export interface iSelectOptions {
  id: string;
  name: string;
}
