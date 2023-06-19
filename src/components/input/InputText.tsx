import { iInputText } from "../../types/Input";

export default function InputText({
  select,
  onKeyupAction,
  updateResults,
}: iInputText) {
  return (
    <div className={select.cssClass}>
      <label className="inputLabel">{select.label}</label>
      <div className="">
        <input
          name={select.name}
          className="input"
          onChange={(input) => {
            onKeyupAction();
            updateResults("code", input.target.value);
          }}
        />
      </div>
    </div>
  );
}
