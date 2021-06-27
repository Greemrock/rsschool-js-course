import "./App.css";
import { useState } from "react";
import { MainPage } from "./components/Main/MainPage";
import { Header } from "./components/Header/Header";
import { Checkbox } from "./components/Checkbox/Checkbox";

export interface ICategory {
  link: string;
  title: string;
  image: string;
}

export interface ICategoriesArr {
  title: ICategory[];
}

export const App: React.FC = () => {
  const [value, setValue] = useState<boolean>(false);

  const SECTIONS: ICategory[] = [
    {
      link: "Action_setA",
      title: "Action (setA)",
      image: `${process.env.PUBLIC_URL}/assets/img/cry.jpg`,
    },
    {
      link: "Action_setB",
      title: "Action (setB)",
      image: `${process.env.PUBLIC_URL}/assets/img/open.jpg`,
    },
    {
      link: "Animal_setA",
      title: "Animal (setA)",
      image: `${process.env.PUBLIC_URL}/assets/img/cat.jpg`,
    },
    {
      link: "Animal_setB",
      title: "Animal (setB)",
      image: `${process.env.PUBLIC_URL}/assets/img/bird.jpg`,
    },
    {
      link: "Clothes",
      title: "Clothes",
      image: `${process.env.PUBLIC_URL}/assets/img/skirt.jpg`,
    },
    {
      link: "Emotions",
      title: "Emotions",
      image: `${process.env.PUBLIC_URL}/assets/img/sad.jpg`,
    },
  ];

  return (
    <>
      <Header title={SECTIONS} />
      <Checkbox
        isOn={value}
        handleToggle={() => {
          return setValue(!value);
        }}
      />
      <MainPage title={SECTIONS} />
    </>
  );
};
