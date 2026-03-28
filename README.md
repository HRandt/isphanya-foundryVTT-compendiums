# isphanya-foundryVTT-compendiums
Compendios de FoundryVTT para el juego de rol [Isphanya](https://isphanya.thecottontales.es). Actualmente incompleto, poco a poco se irán añadiendo más elementos.

Este módulo se trata de un producto no oficial, pero su desarrollo independiente cuenta con el permiso del Equipo Isphanya. Para mayor conocimiento sobre la [licencia de Isphanya](https://isphanya.thecottontales.es/creadores/), visita su web. Consulta [LICENSE](https://github.com/HRandt/isphanya-foundryVTT-compendiums/blob/main/LICENSE.txt) para ver la licencia de este repositorio.

## Qué incluyen los compendios actualmente
- Idiomas
- Culturas
- Clases: Clérigo, Explorador, Bárbaro, Místico, Paladín
- Subclases: Heraldo, Funerario, Cazador, Augur, Devoción
- Especies: Caprina, Betizu, Faele, Humano greco
- Trasfondos: Aldeano, Guardián de los antiguos secretos, Limpiador de dólmenes, Mercader
- Dotes: Acorazado, Afinidad elemental, Voluntad de hierro, Mejora de puntuación de característica
- Conjuros: todos los necesarios hasta nivel 2-3 de las clases mencionadas y unos cuantos más
- Listas de conjuros propias

## Cómo instalar el módulo para usarlo en tus partidas
1. Copia este enlace: `https://github.com/HRandt/isphanya-foundryVTT-compendiums/releases/latest/download/module.json`
2. En FoundryVTT, ve la sección de Módulos. Dale a *Instalar módulo*.
3. En la nueva ventana, abajo, copia el enlace en la caja llamada *URL del manifiest* y dale al botón de *Instalar*.
4. Probáblemente te pedirá instalar [dnd5e-spellpoints](https://github.com/misthero/dnd5e-spellpoints) como dependencia. Si no fuera así, instálalo también manualmente.

## He encontrado un problema
Puedes reportar errores de los compendios en [la pestaña de issues](https://github.com/HRandt/isphanya-foundryVTT-compendiums/issues).

## Cómo colaborar en el proyecto
1. Clona el repositorio en tu pc, pero no en cualquier parte. La carpeta debe estar dentro de la carpeta donde se alojan tus datos de usuario de Foundry, NO la carpeta de instalación de Foundry. Puedes comprobar cuál es esta carpeta dentro de Foundry, en las dos tuercas, en la caja llamada *Ruta de datos de usuarios*. Si tu ruta es, por ejemplo, `C:/foundrydata/`, la ruta donde debes clonar el repositorio sería `C:/foundrydata/data/modules` y la carpeta del módulo debe llamárse`isphanya-foundryVTT-compendiums`.
2. Créate una rama con tu nick como nombre.
3. En tu rama, haz los siguientes cambios de nombres:
        `module.json` --> `module_pro.json`  (este es el json preparado para producción, no queremos modificarlo por error pero tampoco eliminarlo)
        `module_dev.json` --> `module.json`  (este se el json preparado para desarrollo, en el que se trabaja)
4. Edita el fichero `module.json` (el que antes se llamaba `module_dev.json`). Dentro de este json debes añadir los datos de una nueva carpeta llamada `BETA - tuNick` y dentro de ella añade tres compendios: `La guía de Polibio (Beta - tuNick)`, `El grimorio de Diáktoros (Beta - tuNick)`, `El bestiario de Pitias (Beta - tuNick)`. Usa de referencia los de otros usuarios para mantener la estructura.
5. Si no lo habías hecho ya, instala el sistema de DnD5e y el módulo de [dnd5e-spellpoints](https://github.com/misthero/dnd5e-spellpoints). Los compendios de Isphanya tienen dependencias de este módulo.
6. Crea un mundo con el sistema de DnD5e y habilita los dos módulos: isphanya-foundryvtt-compendiums y dnd5e-spellpoints.
7. Desbloquea los compendios que tienen tu nick, los cuales serán tus compendios personales. Añade y modifica en tus compendios personales los elementos que desees. Por favor, **no modifiques el resto de compendios**. Para hacer tus propias versiones de objetos que ya estén en un compendio general o de otros usuarios, cópiatelo a tu propio compendio y edita tu copia, no el original.
8. Cuando hayas terminado de hacer tus cambios, puedes realizar un pull-request a la rama de `DEV`.

Cualquier duda que tengas puedes consultarlo en la [comunidad de Discord de Isphanya](https://isphanya.thecottontales.es/comunidad/).

### A tener en cuenta
- Modifica sólo los compendios que tienen tu nick. Respeta el de los demás.
- Como iconos, utiliza aquellos ubicados en `~/data/modules/isphanya-foundryVTT-compendiums/icons` o los ubicados en la carpeta del sistema dnd5e.
- No modifiques, añadas o elimines iconos de las carpetas de `isphanya_official` (iconos cedidos por Sara Randt, *Todos los derechos reservados*) y `pf2` (iconos del módulo de Pathfinder 2 para FoundryVTT, bajo la [*Community Use Policy*](https://paizo.com/licenses/communityuse) de Paizo). Por favor, haz un uso responsable de estos recursos y respeta sus licencias.
- Si quieres añadir nuevos iconos, créate una nueva carpeta en `~/data/modules/isphanya-foundryVTT-compendiums/icons`. Por favor, comprueba que la licencia de dichos iconos es abierta o compatible con el proyecto antes de subirlos.

