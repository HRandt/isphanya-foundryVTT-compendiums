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
            cancionmundo: "La canción del mundo",
            platino: "Platino antiguo",
            dracónido: "Dracónido"
        }
    };

    CONFIG.DND5E.languages.otros = {
        label: "Otros métodos",
        children: {
            hofos: "Hofos",
            kataneo: "Kataneo",
            irrintzi: "Irrintzi",
            pictovasco: "Pictogramas vascones",
        }
    };

    CONFIG.DND5E.featureTypes.feat.subtypes.cultura = "Cultura";
    CONFIG.DND5E.featureTypes.class.subtypes.terreno = "Terreno predilecto";
    CONFIG.DND5E.featureTypes.class.subtypes.enemigo = "Enemigo predilecto";

});
