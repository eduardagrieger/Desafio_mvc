import { Router } from 'express';
import {
    getJogos,
    getJogosPorFabricante,
    getJogoPorId,
    getJogoPorAno,
    postJogos,
    putJogo,
    deleteJogo
} from '../controllers/jogosController.js';

const router = Router();

router.get('/', getJogos);
router.get('/fabricante/:fabricante', getJogosPorFabricante);
router.get('/ano/:ano', getJogoPorAno);
router.get('/:id', getJogoPorId);
router.post('/', postJogos);
router.put('/:id', putJogo);
router.delete('/:id', deleteJogo);

export default router;