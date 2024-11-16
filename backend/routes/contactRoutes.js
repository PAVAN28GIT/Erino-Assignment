import { Router } from "express";
import { getContacts, getOneContact, addContact, updateContact, deleteContact } from "../controllers/contactControllers.js";


const router = Router();

router.get('/contacts', getContacts );
router.get('/contacts/:id', getOneContact );
router.post('/contacts', addContact );
router.put('/contacts/:id', updateContact );
router.delete('/contacts/:id', deleteContact );

export default router;