import { iSelectionBox } from "../types/Selection";
import EventButton from "./event/EventButton";
import InputSelect from "./input/InputSelect";
import InputText from "./input/InputText";

export default function SelectionBox({
  selection,
  triggerState,
  triggerResults,
  disableBtn,
  changeBtnStatus,
  updateResults,
}: iSelectionBox) {
  return (
    <div className="card mb-3">
      {selection.inputType === "text" ? (
        <InputText
          select={selection}
          onKeyupAction={() => changeBtnStatus(selection.id)}
          updateResults={(name: string, data: any) => updateResults(name, data)}
        />
      ) : (
        <InputSelect
          select={selection}
          onChangeAction={() => changeBtnStatus(selection.id)}
          updateResults={(name: string, data: any) => updateResults(name, data)}
        />
      )}

      <EventButton
        button={selection.button}
        buttonAction={() =>
          selection.id === "carCode"
            ? triggerResults()
            : triggerState(selection.id)
        }
        disabled={disableBtn}
      />
    </div>
  );
}
