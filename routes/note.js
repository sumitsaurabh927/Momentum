import express from "express"
import {createNote,deleteNote,updateNote,getNotes,sendEmailNotification,sendSmsNotification} from "../controllers/note.js"
import auth from "../utils/auth.js";
const router= express.Router();

router.get('/',auth,getNotes);
router.post('/',auth,createNote);
router.patch('/:id',updateNote);
router.delete('/:id',deleteNote);

// for novu API
router.post('/send-sms',sendSmsNotification);
router.post('/send-email',sendEmailNotification);

export default router;

