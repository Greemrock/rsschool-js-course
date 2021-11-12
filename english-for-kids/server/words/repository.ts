import { collectionStore } from '../service/collectionStore';
import { getNextId } from '../service/nextId';
import { Word } from './word';


export const getCategoryWords = (categoryId: number): Promise<Word[]> => {
  const cards = collectionStore.filter(
    (card) => card.categoryId === categoryId,
  );
  return Promise.resolve<Word[]>(cards);
};

export const createWord = (
  categoryId: number,
  cardData: Word,
): Promise<Word> => {
  const selectedCategoryCards = collectionStore.filter(
    (card) => card.categoryId === categoryId,
  );
  const isExist = selectedCategoryCards.findIndex((card) => card.word === cardData.word) >= 0;
  if (isExist) {
    return Promise.reject(new Error(`Word ${cardData.word} already exists`));
  }
  const id = getNextId();
  const newCard: Word = { ...cardData, id };
  collectionStore.push(newCard);
  return Promise.resolve(newCard);
};

export const deleteWord = (cardId: number): Promise<Word[]> => {
  const index = collectionStore.findIndex((card) => card.id === cardId);

  if (cardId < 0) {
    return Promise.reject(new Error('Word is not found'));
  }
  collectionStore.splice(index, 1);
  return Promise.resolve(collectionStore);
};

export const updateWord = (
  categoryId: number,
  cardData: Word,
  cardId: number,
): Promise<Word> => {
  const selectedCategoryCards = collectionStore.filter(
    (category) => category.categoryId === categoryId
  );
  if (selectedCategoryCards) {
    const cardIdx = selectedCategoryCards.findIndex(
      (card) => card.id === cardId
    );
    if (cardIdx < 0) {
      return Promise.reject(new Error('Word is not found'));
    }
    const selectedCard = selectedCategoryCards[cardIdx];
    selectedCard.word = cardData.word;
    selectedCard.translation = cardData.translation;
    selectedCard.audioSrc = cardData.audioSrc;
    selectedCard.image = cardData.image;
    return Promise.resolve(selectedCard);
  }
  throw new Error('Category is not found');
};
