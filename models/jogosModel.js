
const jogos = [
    { idjogo: 1, nomejogo: "GTA VI", fabricante: "Rockstar Games", idademin:18, anolanc: 2026 },
    { idjogo: 2, nomejogo: "The Sims 4", fabricante: "Electronic Arts", idademin: 12, anolanc: 2014 },
    { idjogo: 3, nomejogo: "Sonic Mania", fabricante: "Sega", idademin:10, anolanc: 2017 },
    { idjogo: 4, nomejogo: "Minecraft", fabricante: "Mojang", idademin:10, anolanc: 2011 },
   { idjogo:5, nomejogo:"Call of Duty: Modern Warfare II",fabricante:"Activision",idademin:18,anolanc:2022},
];

export const listarTodos = () => {
    return jogos;
};

export const buscarPorFabricante = (fabricante) => {
    return jogos.filter(
        j => j.fabricante.toLowerCase() === fabricante.toLowerCase()
    );
};

export const buscarPorId = (id) => {
    return jogos.find(j => j.idjogo === id);
};

export const buscarPorAno = (ano) => {
    return jogos.filter(j => j.anolanc === parseInt(ano));
};


export const criar = ({ idjogo, nomejogo, fabricante, idademin, anolanc }) => {
    const novoJogo = {
        idjogo: parseInt(idjogo),
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };


    jogos.push(novoJogo);
    return novoJogo;


};

export const Criar = ({ idjogo, nomejogo, fabricante, idademin, anolanc }) => {
    const novoJogo = {
        idjogo: parseInt(idjogo),
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };


    jogos.push(novoJogo);
    return novoJogo;
};

export const Atualizar = (id, { nomejogo, fabricante, idademin, anolanc }) => {
    const index = jogos.findIndex(j => j.idjogo === id);
    if (index === -1) return null;


    jogos[index] = {
        idjogo: parseInt(id),
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };


    return jogos[index];
};

export const remover = (id) => {
    const index = jogos.findIndex(j => j.idjogo === id);
    if (index === -1) return null;


    const [jogoRemovido] = jogos.splice(index, 1);
    return jogoRemovido;
};