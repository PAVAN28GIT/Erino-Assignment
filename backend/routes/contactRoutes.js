import { Router } from "express";
import { getContacts, addContact, updateContact, deleteContact } from "../controllers/contactControllers.js";


const router = Router();

router.get('/contacts', getContacts );
router.post('/contacts', addContact );
router.put('/contacts/:id', updateContact );
router.delete('/contacts/:id', deleteContact );

export default router;