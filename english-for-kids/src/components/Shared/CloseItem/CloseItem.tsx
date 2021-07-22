import { deleteCategory } from "../../api/api-category";
import { Close } from "./CloseItem.styled";

interface ICloseItemProps {
  id: number;
  getAllCategories: () => Promise<void>;
}

export const CloseItem: React.FC<ICloseItemProps> = ({
  id,
  getAllCategories,
}) => {
  const delCategory = async () => {
    await deleteCategory({ id });
  };
  return (
    <Close
      onClick={() => {
        delCategory();
        getAllCategories();
        // getAllCategories();
      }}
    >
      <div />
      <div />
    </Close>
  );
};
