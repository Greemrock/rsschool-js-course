import { deleteCategory } from "../../api/api";
import { Close } from "./CloseItem.styled";

export const CloseItem: React.FC<{ id: number }> = (id) => {
  return (
    <Close onClick={() => deleteCategory(id)}>
      <div />
      <div />
    </Close>
  );
};
