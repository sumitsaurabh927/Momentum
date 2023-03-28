import express from "express"
import {createNote,deleteNote,updateNote,getNotes} from "../controllers/note.js"
const router= express.Router();

router.get('/',getNotes);
router.post('/',createNote);
router.patch('/:id',updateNote);
router.delete('/:id',deleteNote);

export default router;

