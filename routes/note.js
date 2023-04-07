import express from "express";
import {
  createNote,
  deleteNote,
  updateNote,
  getNotes,
  sendEmailNotification,
  sendSmsNotification,
  deleteInAppNotification,
  toggleNoteDone,
} from "../controllers/note.js";
import auth from "../utils/auth.js";
const router = express.Router();

router.get("/", auth, getNotes);
router.post("/", auth, createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/:id", toggleNoteDone);

// for novu API
router.post("/send-sms", sendSmsNotification);
router.post("/send-email", sendEmailNotification);
router.post("/delete", auth, deleteInAppNotification);

export default router;
