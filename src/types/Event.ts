export interface iEventButton {
  button: iButton;
  buttonAction: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export interface iButton {
  title: string;
  id: string;
  topCss: string;
  css: string;
  method: iMethod;
}

interface iMethod {
  name: string;
  action: string;
}
