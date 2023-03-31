import notes from "../models/note.js";
import mongoose from "mongoose";
import { getNotification } from "../novu/novu.js";

export const getNotes= async (req,res)=>{
    try {
        const allNotes= await notes.find();
        res.status(200).json(allNotes); 
    } catch (error) {
        res.status(409).json({message:error});
    }
}

export const createNote= async (req,res)=>{
    const { title, description, email } = req.body;
    const newNote = new notes({
        title,
        description,
        email,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });
    try {
        await newNote.save();
        await getNotification(title,email,newNote._id);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({message:error});
    }
}

export const deleteNote= async (req,res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no note is available with id:${id}`);
    await notes.findByIdAndRemove(id);
    res.json({message:"Note deleted successfully"});
}

export const updateNote = async (req,res)=>{
    const {id:_id}=req.params;
    const note= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No note is available with id:${id}`);
    const updatedNote= await notes.findByIdAndUpdate(_id,{...note,_id},{new:true})
    res.json(updatedNote);
}