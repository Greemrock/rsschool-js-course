import { ICategory, ICollectionCards } from "./interface";

const ActionAId = 1;
const ActionBId = 2;
const AnimalAId = 3;
const AnimalBId = 4;
const ClothesId = 5;
const EmotionsId = 6;
const BodyPartsId = 7;
const VegetableId = 8;

export const collectionCards: ICollectionCards[] = [
  {
    [ActionAId]: [
      {
        word: "cry",
        translation: "плакать",
        image: "/assets/img/cry.jpg",
        audioSrc: "/assets/audio/cry.mp3",
      },
      {
        word: "dance",
        translation: "танцевать",
        image: "/assets/img/dance.jpg",
        audioSrc: "/assets/audio/dance.mp3",
      },
      {
        word: "dive",
        translation: "нырять",
        image: "/assets/img/dive.jpg",
        audioSrc: "/assets/audio/dive.mp3",
      },
      {
        word: "draw",
        translation: "рисовать",
        image: "/assets/img/draw.jpg",
        audioSrc: "/assets/audio/draw.mp3",
      },
      {
        word: "fish",
        translation: "ловить рыбу",
        image: "/assets/img/fish.jpg",
        audioSrc: "/assets/audio/fish.mp3",
      },
      {
        word: "fly",
        translation: "летать",
        image: "/assets/img/fly.jpg",
        audioSrc: "/assets/audio/fly.mp3",
      },
      {
        word: "hug",
        translation: "обнимать",
        image: "/assets/img/hug.jpg",
        audioSrc: "/assets/audio/hug.mp3",
      },
      {
        word: "jump",
        translation: "прыгать",
        image: "/assets/img/jump.jpg",
        audioSrc: "/assets/audio/jump.mp3",
      },
    ],
    [ActionBId]: [
      {
        word: "open",
        translation: "открывать",
        image: "/assets/img/open.jpg",
        audioSrc: "/assets/audio/open.mp3",
      },
      {
        word: "play",
        translation: "играть",
        image: "/assets/img/play.jpg",
        audioSrc: "/assets/audio/play.mp3",
      },
      {
        word: "point",
        translation: "указывать",
        image: "/assets/img/point.jpg",
        audioSrc: "/assets/audio/point.mp3",
      },
      {
        word: "ride",
        translation: "ездить",
        image: "/assets/img/ride.jpg",
        audioSrc: "/assets/audio/ride.mp3",
      },
      {
        word: "run",
        translation: "бегать",
        image: "/assets/img/run.jpg",
        audioSrc: "/assets/audio/run.mp3",
      },
      {
        word: "sing",
        translation: "петь",
        image: "/assets/img/sing.jpg",
        audioSrc: "/assets/audio/sing.mp3",
      },
      {
        word: "skip",
        translation: "пропускать, прыгать",
        image: "/assets/img/skip.jpg",
        audioSrc: "/assets/audio/skip.mp3",
      },
      {
        word: "swim",
        translation: "плавать",
        image: "/assets/img/swim.jpg",
        audioSrc: "/assets/audio/swim.mp3",
      },
    ],
    [AnimalAId]: [
      {
        word: "cat",
        translation: "кот",
        image: "/assets/img/cat.jpg",
        audioSrc: "/assets/audio/cat.mp3",
      },
      {
        word: "chick",
        translation: "цыплёнок",
        image: "/assets/img/chick.jpg",
        audioSrc: "/assets/audio/chick.mp3",
      },
      {
        word: "chicken",
        translation: "курица",
        image: "/assets/img/chicken.jpg",
        audioSrc: "/assets/audio/chicken.mp3",
      },
      {
        word: "dog",
        translation: "собака",
        image: "/assets/img/dog.jpg",
        audioSrc: "/assets/audio/dog.mp3",
      },
      {
        word: "horse",
        translation: "лошадь",
        image: "/assets/img/horse.jpg",
        audioSrc: "/assets/audio/horse.mp3",
      },
      {
        word: "pig",
        translation: "свинья",
        image: "/assets/img/pig.jpg",
        audioSrc: "/assets/audio/pig.mp3",
      },
      {
        word: "rabbit",
        translation: "кролик",
        image: "/assets/img/rabbit.jpg",
        audioSrc: "/assets/audio/rabbit.mp3",
      },
      {
        word: "sheep",
        translation: "овца",
        image: "/assets/img/sheep.jpg",
        audioSrc: "/assets/audio/sheep.mp3",
      },
    ],
    [AnimalBId]: [
      {
        word: "bird",
        translation: "птица",
        image: "/assets/img/bird.jpg",
        audioSrc: "/assets/audio/bird.mp3",
      },
      {
        word: "fish",
        translation: "рыба",
        image: "/assets/img/fish1.jpg",
        audioSrc: "/assets/audio/fish.mp3",
      },
      {
        word: "frog",
        translation: "жаба",
        image: "/assets/img/frog.jpg",
        audioSrc: "/assets/audio/frog.mp3",
      },
      {
        word: "giraffe",
        translation: "жирафа",
        image: "/assets/img/giraffe.jpg",
        audioSrc: "/assets/audio/giraffe.mp3",
      },
      {
        word: "lion",
        translation: "лев",
        image: "/assets/img/lion.jpg",
        audioSrc: "/assets/audio/lion.mp3",
      },
      {
        word: "mouse",
        translation: "мышь",
        image: "/assets/img/mouse.jpg",
        audioSrc: "/assets/audio/mouse.mp3",
      },
      {
        word: "turtle",
        translation: "черепаха",
        image: "/assets/img/turtle.jpg",
        audioSrc: "/assets/audio/turtle.mp3",
      },
      {
        word: "dolphin",
        translation: "дельфин",
        image: "/assets/img/dolphin.jpg",
        audioSrc: "/assets/audio/dolphin.mp3",
      },
    ],
    [ClothesId]: [
      {
        word: "skirt",
        translation: "юбка",
        image: "/assets/img/skirt.jpg",
        audioSrc: "/assets/audio/skirt.mp3",
      },
      {
        word: "pants",
        translation: "брюки",
        image: "/assets/img/pants.jpg",
        audioSrc: "/assets/audio/pants.mp3",
      },
      {
        word: "blouse",
        translation: "блузка",
        image: "/assets/img/blouse.jpg",
        audioSrc: "/assets/audio/blouse.mp3",
      },
      {
        word: "dress",
        translation: "платье",
        image: "/assets/img/dress.jpg",
        audioSrc: "/assets/audio/dress.mp3",
      },
      {
        word: "boot",
        translation: "ботинок",
        image: "/assets/img/boot.jpg",
        audioSrc: "/assets/audio/boot.mp3",
      },
      {
        word: "shirt",
        translation: "рубашка",
        image: "/assets/img/shirt.jpg",
        audioSrc: "/assets/audio/shirt.mp3",
      },
      {
        word: "coat",
        translation: "пальто",
        image: "/assets/img/coat.jpg",
        audioSrc: "/assets/audio/coat.mp3",
      },
      {
        word: "shoe",
        translation: "туфли",
        image: "/assets/img/shoe.jpg",
        audioSrc: "/assets/audio/shoe.mp3",
      },
    ],
    [EmotionsId]: [
      {
        word: "sad",
        translation: "грустный",
        image: "/assets/img/sad.jpg",
        audioSrc: "/assets/audio/sad.mp3",
      },
      {
        word: "angry",
        translation: "сердитый",
        image: "/assets/img/angry.jpg",
        audioSrc: "/assets/audio/angry.mp3",
      },
      {
        word: "happy",
        translation: "счастливый",
        image: "/assets/img/happy.jpg",
        audioSrc: "/assets/audio/happy.mp3",
      },
      {
        word: "tired",
        translation: "уставший",
        image: "/assets/img/tired.jpg",
        audioSrc: "/assets/audio/tired.mp3",
      },
      {
        word: "surprised",
        translation: "удивлённый",
        image: "/assets/img/surprised.jpg",
        audioSrc: "/assets/audio/surprised.mp3",
      },
      {
        word: "scared",
        translation: "испуганный",
        image: "/assets/img/scared.jpg",
        audioSrc: "/assets/audio/scared.mp3",
      },
      {
        word: "smile",
        translation: "улыбка",
        image: "/assets/img/smile.jpg",
        audioSrc: "/assets/audio/smile.mp3",
      },
      {
        word: "laugh",
        translation: "смех",
        image: "/assets/img/laugh.jpg",
        audioSrc: "/assets/audio/laugh.mp3",
      },
    ],
    [BodyPartsId]: [
      {
        word: "eye",
        translation: "глаз",
        image: "/assets/img/eye.jpg",
        audioSrc: "/assets/audio/eye.mp3",
      },
      {
        word: "hand",
        translation: "рука",
        image: "/assets/img/hand.jpg",
        audioSrc: "/assets/audio/hand.mp3",
      },
      {
        word: "head",
        translation: "голова",
        image: "/assets/img/head.jpg",
        audioSrc: "/assets/audio/head.mp3",
      },
      {
        word: "knee",
        translation: "колено",
        image: "/assets/img/knee.jpg",
        audioSrc: "/assets/audio/knee.mp3",
      },
      {
        word: "leg",
        translation: "нога",
        image: "/assets/img/leg.jpg",
        audioSrc: "/assets/audio/leg.mp3",
      },
      {
        word: "nose",
        translation: "нос",
        image: "/assets/img/nose.jpg",
        audioSrc: "/assets/audio/nose.mp3",
      },
      {
        word: "shoulder",
        translation: "плечо",
        image: "/assets/img/shoulder.jpg",
        audioSrc: "/assets/audio/shoulder.mp3",
      },
      {
        word: "teeth",
        translation: "зубы",
        image: "/assets/img/teeth.jpg",
        audioSrc: "/assets/audio/teeth.mp3",
      },
    ],
    [VegetableId]: [
      {
        word: "cabbage",
        translation: "капуста",
        image: "/assets/img/cabbage.jpg",
        audioSrc: "/assets/audio/cabbage.mp3",
      },
      {
        word: "carrot",
        translation: "морковка",
        image: "/assets/img/carrot.jpg",
        audioSrc: "/assets/audio/carrot.mp3",
      },
      {
        word: "cucumber",
        translation: "огурец",
        image: "/assets/img/cucumber.jpg",
        audioSrc: "/assets/audio/cucumber.mp3",
      },
      {
        word: "eggplant",
        translation: "баклажан",
        image: "/assets/img/eggplant.jpg",
        audioSrc: "/assets/audio/eggplant.mp3",
      },
      {
        word: "onion",
        translation: "лук",
        image: "/assets/img/onion.jpg",
        audioSrc: "/assets/audio/onion.mp3",
      },
      {
        word: "pepper",
        translation: "перец",
        image: "/assets/img/pepper.jpg",
        audioSrc: "/assets/audio/pepper.mp3",
      },
      {
        word: "pumpkin",
        translation: "тыква",
        image: "/assets/img/pumpkin.jpg",
        audioSrc: "/assets/audio/pumpkin.mp3",
      },
      {
        word: "tomato",
        translation: "помидор",
        image: "/assets/img/tomato.jpg",
        audioSrc: "/assets/audio/tomato.mp3",
      },
    ],
  },
];

const findImg = (idCategory: number): string => {
  return collectionCards[0][idCategory][0].image;
};

export const SECTIONS: ICategory[] = [
  {
    id: ActionAId,
    link: "action_set_a",
    title: "Action (setA)",
    image: findImg(ActionAId),
  },
  {
    id: ActionBId,
    link: "action_set_b",
    title: "Action (setB)",
    image: findImg(ActionBId),
  },
  {
    id: AnimalAId,
    link: "animal_set_a",
    title: "Animal (setA)",
    image: findImg(AnimalAId),
  },
  {
    id: AnimalBId,
    link: "animal_set_b",
    title: "Animal (setB)",
    image: findImg(AnimalBId),
  },
  {
    id: ClothesId,
    link: "clothes",
    title: "Clothes",
    image: findImg(ClothesId),
  },
  {
    id: EmotionsId,
    link: "emotions",
    title: "Emotions",
    image: findImg(EmotionsId),
  },
  {
    id: BodyPartsId,
    link: "body_parts",
    title: "Body Parts",
    image: findImg(BodyPartsId),
  },
  {
    id: VegetableId,
    link: "vegetable",
    title: "Vegetable",
    image: findImg(VegetableId),
  },
];
