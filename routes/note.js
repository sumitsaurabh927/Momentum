import express from "express"
import {createNote,deleteNote,updateNote,getNotes} from "../controllers/note.js"
import auth from "../utils/auth.js";
const router= express.Router();

router.get('/',auth,getNotes);
router.post('/',auth,createNote);
router.patch('/:id',updateNote);
router.delete('/:id',deleteNote);

export default router;

