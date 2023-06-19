import { iInputSelect, iSelectOptions } from "../../types/Input";

export default function InputSelect({
  select,
  onChangeAction,
  updateResults,
}: iInputSelect) {
  return (
    <div className={select.cssClass}>
      <label className="inputLabel">{select.label}</label>
      <div className="select is-fullwidth">
        <select
          className="is-fullwidth"
          id="carMake"
          onChange={(selected) => {
            onChangeAction();
            const infoSelected: any = select.options.find(
              (s: any) => s.id === selected.target.value
            );
            updateResults(select.name, infoSelected.name);
          }}
          defaultValue="default"
        >
          <option value="default" disabled>
            {select.placeholder}
          </option>
          {select.options.map((data: iSelectOptions, i: number) => {
            return (
              <option key={i} value={data.id}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
