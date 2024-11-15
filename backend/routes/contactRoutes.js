import { Router } from "express";
import { getContacts, addContact, updateContact, deleteContact } from "../controllers/contactControllers.js";


const router = Router();

router.get('/allcontact', getContacts );
router.post('/addcontact', addContact );
router.put('/update/:id', updateContact );
router.delete('/delete/:id', deleteContact );

export default router;