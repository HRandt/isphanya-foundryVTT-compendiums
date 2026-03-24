Hooks.once("init", () => {

    delete CONFIG.DND5E.languages.standard;
    delete CONFIG.DND5E.languages.exotic;

    CONFIG.DND5E.languages.idiomas = {
        label: "Idiomas",
        children: {
            ibero: "Íbero",
            kelt: "Keltíbero",
            kalaico: "Kallaico",
            vasconico: "Vascónico",
            neoplatino: "Neoplatino",
            koine: "Koiné",
            punico: "Púnico"
        }
    };

    CONFIG.DND5E.languages.escritura = {
        label: "Escritura",
        children: {
            acaica: "Escritura acaica",
            aquibera: "Escritura aquíbera",
            suroibera: "Escritura suroíbera",
            keltibera: "Escritura keltíbera",
            turda: "Escritura turda",
            tarteside: "Escritura tartéside",
            punica: "Escritura púnica"
        }
    };

    CONFIG.DND5E.languages.exotico = {
        label: "Exóticos",
        children: {
            celestial: "Celestial",
            ctonico: "Ctónico",
            naturalis: "Naturalis",
            cancionmundo: "La canción del mundo"
        }
    };


  CONFIG.DND5E.languages.hofos = "Hofos";
  CONFIG.DND5E.languages.kataneo = "Kataneo";
});
