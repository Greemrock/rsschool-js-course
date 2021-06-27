export type CardType = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
};

const cards = [
  [
    "Action (set A)",
    "Action (set B)",
    "Animal (set A)",
    "Animal (set B)",
    "Clothes",
    "Emotions",
  ],
  [
    {
      word: "cry",
      translation: "плакать",
      image: `${process.env.PUBLIC_URL}/assets/img/cry.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/cry.mp3`,
    },
    {
      word: "dance",
      translation: "танцевать",
      image: `${process.env.PUBLIC_URL}/assets/img/dance.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dance.mp3`,
    },
    {
      word: "dive",
      translation: "нырять",
      image: `${process.env.PUBLIC_URL}/assets/img/dive.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dive.mp3`,
    },
    {
      word: "draw",
      translation: "рисовать",
      image: `${process.env.PUBLIC_URL}/assets/img/draw.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/draw.mp3`,
    },
    {
      word: "fish",
      translation: "ловить рыбу",
      image: `${process.env.PUBLIC_URL}/assets/img/fish.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fish.mp3`,
    },
    {
      word: "fly",
      translation: "летать",
      image: `${process.env.PUBLIC_URL}/assets/img/fly.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fly.mp3`,
    },
    {
      word: "hug",
      translation: "обнимать",
      image: `${process.env.PUBLIC_URL}/assets/img/hug.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/hug.mp3`,
    },
    {
      word: "jump",
      translation: "прыгать",
      image: `${process.env.PUBLIC_URL}/assets/img/jump.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/jump.mp3`,
    },
  ],
  [
    {
      word: "open",
      translation: "открывать",
      image: `${process.env.PUBLIC_URL}/assets/img/open.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/open.mp3`,
    },
    {
      word: "play",
      translation: "играть",
      image: `${process.env.PUBLIC_URL}/assets/img/play.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/play.mp3`,
    },
    {
      word: "point",
      translation: "указывать",
      image: `${process.env.PUBLIC_URL}/assets/img/point.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/point.mp3`,
    },
    {
      word: "ride",
      translation: "ездить",
      image: `${process.env.PUBLIC_URL}/assets/img/ride.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/ride.mp3`,
    },
    {
      word: "run",
      translation: "бегать",
      image: `${process.env.PUBLIC_URL}/assets/img/run.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/run.mp3`,
    },
    {
      word: "sing",
      translation: "петь",
      image: `${process.env.PUBLIC_URL}/assets/img/sing.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/sing.mp3`,
    },
    {
      word: "skip",
      translation: "пропускать, прыгать",
      image: `${process.env.PUBLIC_URL}/assets/img/skip.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/skip.mp3`,
    },
    {
      word: "swim",
      translation: "плавать",
      image: `${process.env.PUBLIC_URL}/assets/img/swim.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/swim.mp3`,
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      image: `${process.env.PUBLIC_URL}/assets/img/cat.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/cat.mp3`,
    },
    {
      word: "chick",
      translation: "цыплёнок",
      image: `${process.env.PUBLIC_URL}/assets/img/chick.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/chick.mp3`,
    },
    {
      word: "chicken",
      translation: "курица",
      image: `${process.env.PUBLIC_URL}/assets/img/chicken.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/chicken.mp3`,
    },
    {
      word: "dog",
      translation: "собака",
      image: `${process.env.PUBLIC_URL}/assets/img/dog.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dog.mp3`,
    },
    {
      word: "horse",
      translation: "лошадь",
      image: `${process.env.PUBLIC_URL}/assets/img/horse.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/horse.mp3`,
    },
    {
      word: "pig",
      translation: "свинья",
      image: `${process.env.PUBLIC_URL}/assets/img/pig.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/pig.mp3`,
    },
    {
      word: "rabbit",
      translation: "кролик",
      image: `${process.env.PUBLIC_URL}/assets/img/rabbit.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/rabbit.mp3`,
    },
    {
      word: "sheep",
      translation: "овца",
      image: `${process.env.PUBLIC_URL}/assets/img/sheep.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/sheep.mp3`,
    },
  ],
  [
    {
      word: "bird",
      translation: "птица",
      image: `${process.env.PUBLIC_URL}/assets/img/bird.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/bird.mp3`,
    },
    {
      word: "fish",
      translation: "рыба",
      image: `${process.env.PUBLIC_URL}/assets/img/fish1.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/fish.mp3`,
    },
    {
      word: "frog",
      translation: "жаба",
      image: `${process.env.PUBLIC_URL}/assets/img/frog.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/frog.mp3`,
    },
    {
      word: "giraffe",
      translation: "жирафа",
      image: `${process.env.PUBLIC_URL}/assets/img/giraffe.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/giraffe.mp3`,
    },
    {
      word: "lion",
      translation: "лев",
      image: `${process.env.PUBLIC_URL}/assets/img/lion.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/lion.mp3`,
    },
    {
      word: "mouse",
      translation: "мышь",
      image: `${process.env.PUBLIC_URL}/assets/img/mouse.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/mouse.mp3`,
    },
    {
      word: "turtle",
      translation: "черепаха",
      image: `${process.env.PUBLIC_URL}/assets/img/turtle.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/turtle.mp3`,
    },
    {
      word: "dolphin",
      translation: "дельфин",
      image: `${process.env.PUBLIC_URL}/assets/img/dolphin.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dolphin.mp3`,
    },
  ],
  [
    {
      word: "skirt",
      translation: "юбка",
      image: `${process.env.PUBLIC_URL}/assets/img/skirt.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/skirt.mp3`,
    },
    {
      word: "pants",
      translation: "брюки",
      image: `${process.env.PUBLIC_URL}/assets/img/pants.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/pants.mp3`,
    },
    {
      word: "blouse",
      translation: "блузка",
      image: `${process.env.PUBLIC_URL}/assets/img/blouse.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/blouse.mp3`,
    },
    {
      word: "dress",
      translation: "платье",
      image: `${process.env.PUBLIC_URL}/assets/img/dress.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/dress.mp3`,
    },
    {
      word: "boot",
      translation: "ботинок",
      image: `${process.env.PUBLIC_URL}/assets/img/boot.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/boot.mp3`,
    },
    {
      word: "shirt",
      translation: "рубашка",
      image: `${process.env.PUBLIC_URL}/assets/img/shirt.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/shirt.mp3`,
    },
    {
      word: "coat",
      translation: "пальто",
      image: `${process.env.PUBLIC_URL}/assets/img/coat.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/coat.mp3`,
    },
    {
      word: "shoe",
      translation: "туфли",
      image: `${process.env.PUBLIC_URL}/assets/img/shoe.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/shoe.mp3`,
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      image: `${process.env.PUBLIC_URL}/assets/img/sad.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/sad.mp3`,
    },
    {
      word: "angry",
      translation: "сердитый",
      image: `${process.env.PUBLIC_URL}/assets/img/angry.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/angry.mp3`,
    },
    {
      word: "happy",
      translation: "счастливый",
      image: `${process.env.PUBLIC_URL}/assets/img/happy.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/happy.mp3`,
    },
    {
      word: "tired",
      translation: "уставший",
      image: `${process.env.PUBLIC_URL}/assets/img/tired.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/tired.mp3`,
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: `${process.env.PUBLIC_URL}/assets/img/surprised.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/surprised.mp3`,
    },
    {
      word: "scared",
      translation: "испуганный",
      image: `${process.env.PUBLIC_URL}/assets/img/scared.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/scared.mp3`,
    },
    {
      word: "smile",
      translation: "улыбка",
      image: `${process.env.PUBLIC_URL}/assets/img/smile.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/smile.mp3`,
    },
    {
      word: "laugh",
      translation: "смех",
      image: `${process.env.PUBLIC_URL}/assets/img/laugh.jpg`,
      audioSrc: `${process.env.PUBLIC_URL}/assets/audio/laugh.mp3`,
    },
  ],
];

export default cards;
