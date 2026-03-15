# isphanya-foundryVTT-compendiums
Compendios de FoundryVTT para el juego de rol [Isphanya](https://isphanya.thecottontales.es). Actualmente incompleto, poco a poco se irán añadiendo más elementos.

Este módulo se trata de un producto NO oficial, pero su desarrollo independiente cuenta con el permiso del Equipo Isphanya. Para mayor conocimiento sobre la licencia de Isphanya, visita su web.

## Cómo instalar el módulo
1. Ve a la [última release](https://github.com/HRandt/isphanya-foundryVTT-compendiums/releases/latest) siguiendo este enlace. 
2. En la lista de assets, localiza el llamado *module.json*. Haz click derecho en él y copia el enlace.
3. En FoundryVTT, ve la sección de Módulos. Dale a *Instalar módulo*.
4. En la nueva ventana, abajo, copia el enlace en la caja llamada *URL del manifiest* y dale al botón de *Instalar*.
5. Probáblemente te pedirá instalar [dnd5e-spellpoints](https://github.com/misthero/dnd5e-spellpoints) como dependencia. Si no fuera así, instálalo también manualmente.

## Cómo colaborar en el proyecto
1. Clona el repositorio en tu pc, pero no en cualquier parte. La carpeta debe estar dentro de la carpeta donde se alojan tus datos de usuario de Foundry, NO la carpeta de instalación de Foundry. Puedes comprobar cuál es esta carpeta dentro de Foundry, en las dos tuercas, en la caja llamada *Ruta de datos de usuarios*. Si tu ruta es, por ejemplo, `C:/foundrydata/`, la ruta donde debes clonar el repositorio sería `C:/foundrydata/data/modules` y la carpeta del módulo debe llamárse`isphanya-foundryVTT-compendiums`.
2. Créate una rama con tu nick como nombre.
3. En tu rama, edita el module.json. Dentro del json debes añadir los datos de una nueva carpeta llamada `BETA - tuNick` y dentro de ella añade tres compendios: `La guía de Polibio (Beta - tuNick)`, `El grimorio de Diáktoros (Beta - tuNick)`, `El bestiario de Pitias (Beta - tuNick)`.
4. Si no lo habías hecho ya, instala el sistema de DnD5e y el módulo de [dnd5e-spellpoints](https://github.com/misthero/dnd5e-spellpoints). Los compendios de Isphanya tienen dependencias de este módulo.
5. Crea un mundo con el sistema de DnD5e y habilita los dos módulos: isphanya-foundryvtt-compendiums y dnd5e-spellpoints.
6. Desbloquea los compendios que tienen tu nick, los cuales serán tus compendios personales. Añade y modifica en tus compendios personales los elementos que desees. Por favor, **no modifiques el resto de compendios**.

### A tener en cuenta
- Modifica sólo los compendios que tienen tu nick. Respeta el de los demás.
- Como iconos, utiliza aquellos ubicados en `~/data/modules/isphanya-foundryVTT-compendiums/icons`.
- No modifiques, añadas o elimines iconos de las carpetas de `isphanya_official` (iconos cedidos por Sara Randt, *Todos los derechos reservados*) y `pf2` (iconos del módulo de Pathfinder 2 para FoundryVTT, bajo la [*Community Use Policy*](https://paizo.com/licenses/communityuse) de Paizo). Por favor, haz un uso responsable de estos recursos y respeta sus licencias.
- Si quieres añadir nuevos iconos, créate una nueva carpeta en `~/data/modules/isphanya-foundryVTT-compendiums/icons`. Por favor, comprueba que la licencia de dichos iconos es abierta o compatible con el proyecto antes de subirlos.

