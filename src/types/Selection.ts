import { iSelect } from "./Input";

export interface iSelectionBox {
  selection: iSelect;
  triggerState: (arg: string) => void;
  triggerResults: () => void;
  disableBtn: boolean;
  changeBtnStatus: (arg: string) => void;
  updateResults: (arg1: string, arg2: any) => void;
}
