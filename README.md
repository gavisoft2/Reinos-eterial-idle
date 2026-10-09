# Etherial Idle: Cazadores — 0.11

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
