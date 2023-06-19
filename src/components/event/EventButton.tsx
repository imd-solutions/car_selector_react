import { iEventButton } from "../../types/Event";

export default function EventButton({
  button,
  buttonAction,
  disabled,
}: iEventButton) {
  return (
    <div className={button.topCss}>
      <button
        id={button.id}
        className={button.css}
        onClick={(e) => buttonAction(e)}
        disabled={disabled}
      >
        <span>{button.title}</span>
      </button>
    </div>
  );
}
