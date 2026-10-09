# Etherial Idle: Cazadores — 0.17

Prototipo móvil jugable, en español. Proyecto independiente para continuar el desarrollo; no modifica Reinos de Etherial.

## Probar
Abre `index.html` o sirve esta carpeta con `python3 -m http.server 8080`. No requiere npm, compilación ni imágenes externas. La tipografía de Google es opcional y tiene respaldo local.

1. Elige un héroe, añade Blez de prueba y confirma la compra. El precio se descuenta del saldo.
2. El combate empieza automáticamente; cada enemigo genera monedas Blez internas.
3. Mejora el arma, sube de nivel y vence al jefe de la décima oleada.
4. Abre Mundo y viaja a una zona desbloqueada.
5. Vuelve tras 30 segundos o más para reclamar monedas offline (hasta 8 horas).

Tres clases, cuatro zonas, jefes, animación pixelada original, mejora de armas, pausa, guardado local y cofre offline. Los precios son provisionales y las compras son simuladas. Blez no es un token desplegado ni tiene valor de retiro.

## Archivos
- `index.html`: interfaz móvil y ventanas.
- `style.css`: diseño, responsive y tipografía.
- `js/config.js`: clases, enemigos, escenarios y parámetros.
- `js/engine.js`: combate, progresión y economía de prueba.
- `js/scene.js`: pixel art y animaciones dibujados con Canvas.
- `js/app.js`: interacción, guardado y compras simuladas.
- `tests/engine.test.js`: pruebas de progresión y recompensas.

## Pagos y Telegram pendientes
La preferencia del proyecto es TON Gram / DeFi para los pagos externos. Los héroes se compran con Blez. Falta identificar el proveedor exacto, red, contrato o moneda, dirección receptora y precios definitivos. No existe conexión de billetera ni se realizan transacciones.

Telegram exige Stars para ventas de bienes digitales dentro de bots y miniapps, incluidos personajes. Referencia: https://core.telegram.org/bots/payments-stars. La preferencia TON Gram no está validada para esa distribución. No activar cobros reales hasta resolver el diseño de pagos compatible.

Antes de operar con dinero: backend que verifique initData de Telegram, usuarios y compras; verificación de transacciones en servidor e idempotencia; economía y recompensas autoritativas con base de datos. El estado en localStorage puede editarse y sirve exclusivamente para la demo. No confiar en él para saldos, propiedad de héroes o retiros. El cofre offline concede solo monedas y no desbloquea niveles o escenarios.

## Publicación posterior
Para una demostración en GitHub Pages, subir el contenido de esta carpeta y activar Pages. Para Telegram, alojar bajo HTTPS y configurar la miniapp con BotFather. Este proyecto todavía no incluye bot, autenticación de Telegram, servidor ni integración real de pagos. No se ha publicado.

## Validación
`node --test tests/engine.test.js`

## Economía Blez propuesta
- 10,000 Blez = 1 TON; 5,000 Blez = 0.5 TON. El cálculo es una propuesta de tasa, no una garantía de canje.
- Guerrero: 5,000 Blez (precio indicado por el usuario). Arquera: 7,500 y mago: 10,000 Blez (precios provisionales).
- Comprar descuenta Blez; equipar un héroe ya comprado no vuelve a cobrar.
- Billetera permite añadir 5,000 Blez de prueba y calcular conversiones sin enviar una solicitud ni transferir fondos.
- Pendiente: cómo se compran Blez, mínimo y comisiones de retiro, reserva TON, límites, financiación y balance de emisión. No establecer ganancias diarias o prometer rentabilidad con estos parámetros de prueba.

## Dirección artística RPG (0.6)
Interfaz de piedra oscura y latón, títulos serif y botones de pergamino. Héroes originales con armadura/capa, arco/capucha y bastón/túnica. Retratos pixelados en tienda y selección. Bosque con castillo, cuevas con cristales, cripta con ruinas y volcán con lava. Cada zona tiene monstruos y jefes con siluetas propias. Todo el arte se genera desde código Canvas, sin assets ajenos ni imágenes externas.

Pulido visual 0.6: contornos de personajes y enemigos, sprites almacenados en caché, detalles de piedra, estandartes, cofres, indicador de diez oleadas y barra de vida del héroe.

## Escenarios y ficha RPG 0.6
Escenarios rediseñados con vista elevada: bosque con casa, río y puente; cueva con suelo de roca y agua; cripta con pavimento, alfombra y antorchas; volcán con canales de lava. El mapa usa miniaturas reales de cada escenario. Campamento incluye una ficha visual del héroe, arma/mejora actual, vestimenta de clase y estadísticas derivadas del combate. Los elementos de equipo muestran los valores ya existentes; no añaden bonificaciones ocultas ni cambian los precios Blez.

## Héroes 0.6
Guerrero con rostro visible, armadura articulada, capa carmesí, escudo heráldico y espada biselada. Arquera con trenza, carcaj, armadura de cuero y arco largo. Mago con bordados, libro de hechizos, sombrero y bastón de cristal. Las poses de reposo y ataque tienen dos cuadros cada una por clase. Los mismos sprites se muestran en combate, tienda, selección y ficha. No cambia el poder de combate ni el precio de los héroes.

## Enemigos y combate 0.7
Rediseño de las ocho criaturas: slime gelatinoso, árbol ancestral, murciélago, gólem de cristal, esqueleto armado, rey nigromante, bestia de lava y dragón de ceniza. Animación de alas en el murciélago y dragón, partículas de impacto y monedas visuales al vencer enemigos. Se actualizaron los nombres de la cripta para corresponder con sus nuevas criaturas; los valores de combate se mantienen.

El campamento incorpora un bestiario visual con monstruos y jefes, vida base de primera oleada/jefe y recompensa de cada encuentro.

## Presentación RPG 0.8
Antorchas, cristales y lava con iluminación ambiental; viñeta de profundidad; sombras suaves bajo personajes; reacción al impacto y aparición del siguiente enemigo. Interfaz muestra el nombre del ataque de cada clase y la vida numérica de la criatura. Los iconos del equipo se dibujan en pixel art. El terreno se almacena en caché y solo las capas animadas se redibujan, reduciendo trabajo por cuadro en móvil. Se respeta la preferencia de movimiento reducido.

## Materiales y sprites 0.9
Detalles de remaches, cota de malla, costuras, bordados, grietas, corteza y escamas. Luz direccional dibujada en armaduras y rostros. Las mejoras de arma ya existentes reciben acabados visuales: base, dorado a partir de +3 y rúnico a partir de +6. Se conserva el poder y precio de las mejoras. El acabado aparece también en los retratos y en la ficha de equipo.

## Rostros y ojos 0.10
Ojos visibles en ambos lados del rostro de los héroes, iris por clase, pupilas, reflejos, cejas y párpados. El guerrero, la arquera y el mago tienen expresiones y detalles faciales propios. Parpadeo breve en reposo, desactivado cuando el usuario prefiere movimiento reducido. Los mobs reciben ojos y bocas según su especie: pupilas de reptil, ojos luminosos en no muertos, cuencas y colmillos.

## Criaturas y equipo 0.11

Los ocho mobs reciben anatomía y materiales propios: slime translúcido con brotes, guardián con dedos de raíces y corazón de madera, murciélago con nervaduras y garras, gólem con cuarzo facetado, soldado esqueleto con coraza y escudo, nigromante con hombreras de hueso y cadenas, bestia volcánica con placas de obsidiana y dragón con espinas y escamas. Las membranas siguen las dos poses de vuelo existentes. Los detalles se guardan en la caché de sprites y se reutilizan en combate y bestiario.

## Combate por turnos automáticos 0.12

El héroe ataca y, si el mob sobrevive, el enemigo responde en el siguiente pulso (600 ms por acción). Cada cuatro golpes se activa una habilidad de clase con daño aumentado. Las victorias restauran un 12% de la vida máxima; caer inicia tres pulsos de recuperación sin premios ni pérdida de Blez. La pausa congela los turnos y la recuperación. El medidor muestra la carga de habilidad y el registro conserva los últimos cuatro eventos. Ataques enemigos, retroceso, daño flotante y destellos de habilidades siguen los eventos reales del motor.

## Recorrido del mundo 0.13

El héroe camina con el escenario desplazándose y los mobs se aproximan desde la derecha antes del combate. Hay cuatro pulsos de recorrido entre encuentros (dos de marcha y dos de aproximación), sin daño ni botín. Tras ganar, sigue caminando; cada jefe conduce automáticamente a la siguiente región. El stage 40 termina con el dragón de ceniza y detiene la expedición. Iniciar otro recorrido conserva el equipo, las monedas y los niveles. La pausa congela el recorrido. Al regresar de un guardado, se reanuda el encuentro desde la marcha; las heridas se conservan y un recorrido completado permanece terminado. El progreso offline sigue siendo una estimación de monedas, sin simular stages.

## Dificultad y grupos 0.14

Cada región mantiene 10 stages. Bosque y cuevas tienen un mob por encuentro; cripta y ceniza tienen tres, con vida individual y ataques de todos los supervivientes. En el stage 10, las dos regiones finales presentan al jefe con dos escoltas. El héroe concentra sus ataques en un objetivo y el stage avanza cuando cae todo el grupo. El botín y la experiencia del encuentro se entregan una vez al completarlo, contando cada criatura derrotada. El nombre del enemigo ocupa una placa más compacta; los grupos muestran pequeñas barras de vida y un marcador de objetivo.

## Retorno al morir 0.15

Al llegar a cero vida, el héroe regresa al stage 1 de su área actual. Conserva Blez, experiencia, nivel, equipo y áreas desbloqueadas. Tras tres pulsos de recuperación, vuelve a caminar hacia el primer encuentro. El recorrido visual vuelve al inicio del área y no aparecen enemigos durante la recuperación. Guardar y recargar conserva este retorno y el estado de recuperación.

## Seis regiones nuevas 0.16

El mundo crece a diez regiones de diez stages (100 en total). Las nuevas regiones son Pantano Esmeralda (4 mobs), Picos de Escarcha (5), Desierto del Sol (6), Bastión Sombrío (7), Abismo Infernal (8) y Trono del Vacío (9). Cada una aumenta vida, daño y botín e incorpora escenario, mob y jefe propios. El stage 10 incluye un jefe y el resto de la formación como escoltas. Los grupos grandes se distribuyen en tres columnas con barras individuales. Las partidas anteriores conservan desbloqueos; haber terminado Ceniza ya no marca el final del mundo. Morir sigue devolviendo al stage 1 del área actual.

## Mochila y equipo 0.17

Botón flotante con mochila pixelada en el lateral izquierdo. Abre un inventario de 20 espacios con objetos visibles y cantidades. Cada ampliación agrega dos espacios: 200, 400, 600 Blez y así sucesivamente. Las pociones se apilan hasta 100 por espacio; el sobrante pasa a otro espacio y la inserción devuelve lo que no cabe. Cada objeto abre sus estadísticas, comparación y acción de equipar o usar; hay botones para volver y cerrar. Arma, armadura, botas y amuleto aportan estadísticas reales, respetan las clases y permanecen en su espacio marcados como equipados. Se incluye un kit inicial de prueba con armas de las tres clases, vestimentas, botas, amuleto y cinco pociones. El inventario, las ampliaciones y el equipo se guardan junto con la partida; las partidas anteriores reciben el kit una sola vez al migrar. Defensa reduce el daño por mob con mínimo uno, y equipar vida adicional no cura instantáneamente. Las pociones recuperan 40 de vida y no pueden usarse a vida completa ni durante la recuperación tras morir.

Cada encuentro vencido entrega una poción de vida si queda espacio. Si la mochila está llena, el botín Blez se entrega igualmente y la escena indica que la poción no pudo guardarse.
