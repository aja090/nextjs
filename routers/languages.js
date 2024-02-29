//TODO Create a Router Module:

//? Start by creating a separate router module.This is usually done in a separate file.Here's an example of a simple router module:

import { Router } from 'express';
import { getLang, createLang, updateLang, deleteLang } from '../controllers/lang.js'

const router = Router()

// router.get('/', getLang)
// router.post('/', createLang)
// router.put('/:id', updateLang)
// router.delete('/:id', deleteLang)

//! طريقة مختصرة اكثر من فوك
router.route('/').get(getLang).post(createLang);
router.route('/:id').put(updateLang).delete(deleteLang)

export default router;
