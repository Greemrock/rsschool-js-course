import { Router } from 'express';
import { StatusCodes } from '../common';
import {
  createWord,
  deleteWord,
  getCategoryWords,
  updateWord,
} from './repository';
import { Word } from './word';

const router = Router();

// Get words category
router.get('/:categoryId/', async (req, res) => {
  const { categoryId } = req.params;
  if (!categoryId) {
    return res.sendStatus(StatusCodes.BadRequest);
  }
  const cards = await getCategoryWords(+categoryId);
  if (!cards) {
    return res.sendStatus(StatusCodes.BadRequest);
  }
  return res.json(cards);
});

// Create word
router.post('/:categoryId/:wordId', async (req, res) => {
  const { categoryId } = req.params;
  const cardData = req.body as Word;
  if (!cardData.word) {
    return res.sendStatus(StatusCodes.BadRequest);
  }

  try {
    const newCard = await createWord(+categoryId, cardData);
    return res.json(newCard);
  } catch (error) {
    return res.status(StatusCodes.BadRequest).send(error);
  }
});

// Delete word
router.delete('/:categoryId/:wordId', async (req, res) => {
  const { wordId } = req.params;
  if (!wordId) {
    return res.sendStatus(StatusCodes.NotFound);
  }
  try {
    await deleteWord(+wordId);
    return res.sendStatus(StatusCodes.Ok);
  } catch (error) {
    return res.status(StatusCodes.NotFound).send(error);
  }
});

// update word
router.put('/:categoryId/:wordId', async (req, res) => {
  const { categoryId } = req.params;
  const { wordId } = req.params;
  const wordData = req.body as Word;

  if (!wordId) {
    return res.sendStatus(StatusCodes.BadRequest);
  }
  try {
    const card = await updateWord(+categoryId, wordData, +wordId);
    return res.json(card);
  } catch (error) {
    return res.status(StatusCodes.BadRequest).send(error);
  }
});

export default router;
