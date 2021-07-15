import { Router } from "express";
import { StatusCodes } from "../common";
import {
  // createWord,
  // deleteWord,
  // getWordByName,
  getWords,
  // updateWord,
} from "./repository";
// import { Card } from './words';
// import { getCategoryById } from '../category/repository';

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await getWords();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const data = await getWordByName(req.params.id);
//     if (!data) return res.sendStatus(StatusCodes.NotFound);
//     return res.json(data);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// router.get('/:name', async (req, res) => {
//   try {
//     const data = await getWordByName(req.params.name);
//     if (!data) return res.sendStatus(StatusCodes.NotFound);
//     return res.json(data);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// router.delete('/:name', async (req, res) => {
//   try {
//     await deleteWord(req.params.name);
//     return res.sendStatus(StatusCodes.Ok);
//   } catch (e) {
//     return res.status(StatusCodes.NotFound).send(e);
//   }
// });

// router.post('/', async (req, res) => {
//   const data = req.body as Card;
//   const category = await getCategoryById(data.categoryId);
//   if (!category) {
//     return res.status(StatusCodes.BadRequest).send('Invalid category ID');
//   }
//   try {
//     const newData = await createWord(data);
//     return res.json(newData);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// router.put('/', async (req, res) => {
//   const data = req.body as Card;
//   const category = await getCategoryById(data.categoryId);
//   if (!category) {
//     return res.status(StatusCodes.BadRequest).send('Invalid category ID');
//   }
//   try {
//     const newData = await updateWord(data);
//     return res.json(newData);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

export default router;
