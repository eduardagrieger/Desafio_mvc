import * as JogosModel from '../models/jogosModel.js';

export const getJogos = (req, res) => {
    const jogos = JogosModel.listarTodos();
    res.status(200).json(jogos);
};

export const getJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const jogosFabricante = JogosModel.buscarPorFabricante(fabricante);


    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado na categoria ${fabricante}`
        });
    }
};


// GET /jogos/:id
export const getJogoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = JogosModel.buscarPorId(id);


    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({
            mensagem: `Jogo ${id} não encontrado`
        });
    }
};

export const getJogoPorAno = (req, res) => {
    const anolanc = parseInt(req.params.ano);
    const jogosDoAno = JogosModel.buscarPorAno(anolanc);


    if (jogosDoAno.length > 0) {
        res.status(200).json(jogosDoAno);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado para o ano ${anolanc}`
        });
    }
};

export const postJogos = (req, res) => {
    const { idjogo, nomejogo, fabricante, idademin, anolanc } = req.body;


    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
        });
    }


    const novoJogo = JogosModel.criar({ idjogo, nomejogo, fabricante, idademin, anolanc });
    res.status(201).json(novoJogo);
};

export const putJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nomejogo, fabricante, idademin, anolanc } = req.body;


    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) devem ser informados.'
        });
    }


    const jogoAtualizado = JogosModel.Atualizar(id, { nomejogo, fabricante, idademin, anolanc });


    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }


    res.status(200).json(jogoAtualizado);
};

export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = JogosModel.remover(id);


    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};