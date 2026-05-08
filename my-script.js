Hooks.once("init", () => {
    
    // LENGUAS DE ISPHANYA    

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
    
    // PERSONALIZACIÓN DE RASGOS

    CONFIG.DND5E.featureTypes.feat.subtypes.cultura = "Cultura";
    CONFIG.DND5E.featureTypes.class.subtypes.terreno = "Terreno predilecto";
    CONFIG.DND5E.featureTypes.class.subtypes.enemigo = "Enemigo predilecto";

    // PROPIEDADES DE ARMAS

    CONFIG.DND5E.itemProperties.abolladora = {
        label: "Abolladora",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("abolladora");

    CONFIG.DND5E.itemProperties.atravesar = {
        label: "Atravesar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("atravesar");

    CONFIG.DND5E.itemProperties.atravesar = {
        label: "Atravesar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("atravesar");

    CONFIG.DND5E.itemProperties.aturdidora = {
        label: "Aturdidora",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("aturdidora");

    CONFIG.DND5E.itemProperties.brutal = {
        label: "Brutal",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("brutal");

    CONFIG.DND5E.itemProperties.caballeria = {
        label: "Caballería",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("caballeria");

    CONFIG.DND5E.itemProperties.carga = {
        label: "Carga",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("carga");

    CONFIG.DND5E.itemProperties.controlarea = {
        label: "Control de área",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("controlarea");

    CONFIG.DND5E.itemProperties.criticomejorado = {
        label: "Crítico mejorado",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("criticomejorado");

    CONFIG.DND5E.itemProperties.defensiva = {
        label: "Defensiva",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("defensiva");

    CONFIG.DND5E.itemProperties.derribo = {
        label: "Derribo",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("derribo");

    CONFIG.DND5E.itemProperties.desarme = {
        label: "Desarme",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("desarme");

    CONFIG.DND5E.itemProperties.diplomatica = {
        label: "Diplomática",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("diplomatica");

    CONFIG.DND5E.itemProperties.emparejadas = {
        label: "Emparejadas",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("emparejadas");

    CONFIG.DND5E.itemProperties.enredar = {
        label: "Enredar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("enredar");

    CONFIG.DND5E.itemProperties.ensartar = {
        label: "Ensartar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("ensartar");

    CONFIG.DND5E.itemProperties.granalcance = {
        label: "Gran alcance",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("granalcance");

    CONFIG.DND5E.itemProperties.inutilizarescudo = {
        label: "Inutilizar escudo",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("inutilizarescudo");

    CONFIG.DND5E.itemProperties.minar = {
        label: "Minar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("minar");

    CONFIG.DND5E.itemProperties.noletal = {
        label: "No letal",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("noletal");

    CONFIG.DND5E.itemProperties.punzar = {
        label: "Punzar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("punzar");

    CONFIG.DND5E.itemProperties.propulsable = {
        label: "Propulsable",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("propulsable");

    CONFIG.DND5E.itemProperties.redireccion = {
        label: "Redirección",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("redireccion");

    CONFIG.DND5E.itemProperties.tajo = {
        label: "Tajo",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("tajo");

    CONFIG.DND5E.itemProperties.talar = {
        label: "Talar",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("talar");
});
