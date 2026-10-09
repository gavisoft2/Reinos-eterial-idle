# Etherial Idle: Cazadores — 0.34

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

El héroe ataca y, si el mob sobrevive, el enemigo responde en el siguiente pulso (600 ms por acción). Cada clase usa automáticamente sus habilidades desbloqueadas al estar lista y tener 10 maná; después espera 55 segundos reales antes de repetirla. Las victorias restauran un 12% de la vida máxima; caer inicia tres pulsos de recuperación sin premios ni pérdida de Blez. La pausa congela los turnos y la recuperación. El medidor muestra los segundos restantes de recarga y el registro conserva los últimos cuatro eventos. Ataques enemigos, retroceso, daño flotante y destellos de habilidades siguen los eventos reales del motor.

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

## Ficha completa de equipamiento 0.18

Nueve espacios visibles: casco, armadura, botas, guantes, secundario de clase, arma, collar, anillo y amuleto. El secundario es escudo para guerrero, libro para mago y carcaj para arquera; las armas siguen las mismas restricciones de clase. Tocar un espacio vacío abre la mochila filtrada; tocar uno equipado abre la pieza con opción de desequipar. Los objetos permanecen en la mochila y solo una pieza aporta bonos por espacio. Nivel y rareza aumentan ataque, vida y defensa: factor de nivel 1 + 0.15 × (nivel − 1), multiplicado por rareza (Común 1, Poco común 1.25, Raro 1.6, Épico 2.1, Legendario 2.8), redondeado hacia abajo. Los jefes entregan una pieza compatible, con nivel y rareza según el área si cabe en la mochila. Se conservan metadatos y equipo al guardar. Al migrar una mochila antigua, se añaden las siete piezas nuevas en los espacios disponibles una sola vez.

## Equipo exclusivo por clase 0.19

Todas las piezas de los nueve slots tienen clase, incluidos casco, botas, guantes, collar, anillo y amuleto. Solo las pociones son compartidas. El motor y la interfaz rechazan equipo de otra clase; cambiar de héroe retira piezas incompatibles. Hay un conjunto completo para cada clase con capucha y cuero para arquera, diadema y piezas rúnicas para mago, y acero y remaches para guerrero. La primera elección de héroe adapta el kit inicial de accesorios a esa clase. Los antiguos accesorios compartidos se convierten a la clase activa una sola vez al cargar, conservando nivel y rareza. Los jefes entregan únicamente equipo de la clase activa.

## Ilustraciones de objetos 0.20

Los iconos se redibujan a doble resolución con siluetas propias: espada diagonal, arco curvado, báculo engastado, placas de armadura, guantes con dedos, botas con suelas, escudo con borde metálico, libro en perspectiva, carcaj con flechas y joyas facetadas. Los materiales tienen sombras, luces, costuras y remaches. Las rarezas altas muestran señales de encantamiento y el nivel añade marcas discretas. Las ilustraciones se guardan en caché por tipo, rareza y rango de nivel, y se usan en mochila, detalles y ficha.

## Probabilidades de equipo 0.21

Cada mob derrotado tiene 15% de probabilidad de equipo; cada jefe 70%. Tras esa tirada, una segunda elige rareza y una tercera el tipo de pieza compatible con la clase. Niveles por pares de áreas: 1–2 nivel 1, 3–4 nivel 5, 5–6 nivel 10, 7–8 nivel 20, 9–10 nivel 30. Distribución de rarezas cuando cae equipo (común/poco común/raro/épico/legendario): 75/20/5/0/0, 60/28/10/2/0, 45/32/18/5/0, 32/33/25/9/1, 22/33/30/13/2. No hay legendarios en las primeras seis áreas. El equipo se entrega al derrotar cada criatura del grupo y se conserva aunque después el héroe caiga; los Blez del encuentro siguen concediéndose al vencer al grupo completo. Si no cabe, se muestra el drop perdido. Las tasas se consultan en el bestiario y los objetos conservan nivel y rareza al guardar.

## Colores de rareza 0.22

Común: gris; Poco común: verde; Raro: azul; Épico: morado; Legendario: naranja. Los bordes de la mochila y la ficha, los nombres y la vista de detalles usan estos colores, incluso al equipar un objeto. El nombre de la rareza sigue visible para identificarla sin depender solo del color.

## Tienda y pociones automáticas 0.23

La tienda se abre con el botón del combate. Compra 1 o 10 unidades con Blez; cada pila admite 100 unidades. Sin saldo o espacio suficiente se rechaza toda la compra sin cobrar.

| Tamaño | Recuperación | Vida (Blez) | Maná (Blez) |
|---|---:|---:|---:|
| Pequeña | 40 | 50 | 45 |
| Mediana | 100 | 100 | 90 |
| Grande | 250 | 200 | 180 |

Dos slots de consumibles en la ficha permiten seleccionar un tamaño para vida y otro para maná. Desde la mochila se pueden equipar, desequipar o usar manualmente. El uso automático consume como máximo una unidad por recurso y turno activo, al llegar al 50% de vida o 30% de maná. Continúa con otras pilas del mismo tipo; al agotarse, conserva la selección para la próxima compra. No consume estando pausado, muerto o recuperándose.

Todas las clases tienen maná (100 + 5 por nivel adicional). Cada habilidad consume 10; sin suficiente maná el héroe sigue con ataques básicos. Recuperar tras morir, cambiar de héroe o viajar recarga el maná. La selección y el maná se guardan; las partidas antiguas empiezan con el maná lleno. Los frascos de vida son rojos y los de maná azules, con tamaño visual creciente.

## Mercado Gram y retiros 0.27

El botón flotante ⚖ del lateral izquierdo abre una cuadrícula de slots. Cada oferta muestra el ítem, rareza, nivel y precio en Gram. Toca un slot para ver sus estadísticas, vendedor y botón de compra. Los espacios vacíos se distinguen claramente; en GitHub Pages se muestra el catálogo del Mercader de Etherial y el estado de conexión, sin simular ofertas de otros jugadores.

Vender equipo abre directamente la mochila filtrada por equipo comerciable. Al seleccionar una pieza se abre su ficha con ilustración, estadísticas, precio y botón Poner a la venta. El precio usa hasta dos decimales y respeta el mínimo de su rareza (máximo 1,000,000 Gram). Publicar aparta la pieza; retirar devuelve el equipo. Solo se vende equipamiento comerciable y desequipado. Los slots crecen con las ofertas; no se mantiene el antiguo límite de 20 publicaciones. La compra entrega la misma pieza con nivel y rareza; se rechaza sin saldo Gram o espacio en la mochila. Las compras simultáneas no duplican un objeto.

### Comisiones y moneda Gram

Una sola comisión del 5% cubre publicar y vender, cobrada únicamente al completar la venta. El comprador paga el precio anunciado y el vendedor recibe el 95% en su saldo Gram. Publicar o retirar no cobra un segundo importe. La interfaz muestra comisión y neto antes de publicar y en Mis ventas.

Gram usa centésimas enteras en el servidor (`gramUnits`); su saldo y los ingresos netos acumulados (`gramSalesUnits`) se muestran en Retiros. Las comisiones se redondean hacia arriba a 0.01 Gram y se registran en `gramFeesCollectedUnits`. Las ventas no abonan Blez. Las cuentas nuevas empiezan con cero Gram; todavía no hay recargas o depósitos implementados. El servidor no acepta un saldo Gram inventado en una partida enviada por el cliente.

Los retiros tienen un 10% de comisión. Retiros muestra saldo, monto bruto, comisión y neto, tanto para la cotización Gram como para la conversión Blez → TON ya existente. Ejemplo: vender por 100 Gram deja 95 Gram; retirar esos 95 muestra 9.50 de comisión y 85.50 netos. Los retiros son cotizaciones de prueba: no debitan el saldo ni envían fondos. No se ha definido equivalencia Gram/TON.

Las antiguas ofertas en Blez se conservan, pero deben retirarse y republicarse en Gram para venderse. No se convierten precios ni saldos automáticamente; los créditos Blez de ventas anteriores se conservan.

### Servidor compartido

Requiere Node 20 o superior, sin paquetes adicionales:

```sh
npm start
```

Abre `http://localhost:3000` en dos navegadores o perfiles separados para crear dos jugadores. Ambos comparten las ofertas del mismo servidor. La sesión se conserva en el navegador; todavía no usa identidad Telegram ni recuperación de cuentas. `PORT` configura el puerto y `MARKET_DATA_FILE` el archivo persistente (por defecto `.data/market.json`). Conserva este archivo en un volumen persistente y ejecuta una sola instancia.

```sh
npm test
```

La cuadrícula y las cotizaciones funcionan en la interfaz estática, pero GitHub Pages no ejecuta el servidor. Para el mercado compartido por internet, aloja este proyecto con Node y almacenamiento persistente, sirviendo el juego y `/api/market` desde el mismo dominio.

El servidor controla ofertas, saldo Gram, comisiones y transacciones; los inventarios y ganancias Blez de combate todavía vienen del cliente. Antes de una economía real falta validar combate e inventario en el servidor, identidad y depósitos. No se procesan pagos TON.

### Equipo comerciable y mínimos 0.27

| Rareza | Precio mínimo (Gram) |
|---|---:|
| Común | 0.10 |
| Poco común | 0.50 |
| Raro | 0.80 |
| Épico | 1.00 |
| Legendario | 3.00 |

El mínimo se comprueba en la interfaz y en el servidor. El equipo comerciable muestra ⚖ en la esquina superior derecha de la mochila y de la ventana de estadísticas. El resto queda ligado y no puede publicarse; los objetos equipados deben desequiparse antes de venderse.

Se mantienen los drops de equipo del 15% por mob y 70% por jefe. Cuando cae equipo, hay un segundo sorteo del 20% para que sea comerciable en mobs y del 30% en jefes. La probabilidad total es **3% por mob** y **21% por jefe**; la distribución de rarezas y los niveles de las áreas no cambian. El bestiario muestra estos porcentajes.

La marca de comerciable se guarda con la pieza y se conserva al comprar o retirar una oferta. El equipo inicial, las pociones y las piezas antiguas sin esa marca quedan ligados. Las piezas apartadas en ofertas previas conservan el derecho a recuperarse y comerciarse.

### Ofertas e historial de ventas 0.28

Ofertas muestra todos los artículos activos, incluidos los del jugador. En sus propias ofertas se permite retirar la pieza en lugar de comprarla. Ofertas y Mis ventas permanecen navegables incluso cuando el servidor no está disponible; durante una solicitud se bloquean brevemente para evitar acciones duplicadas.

Mis ventas muestra primero el historial de ventas completadas del vendedor, ordenado por la venta más reciente. Cada registro incluye equipo, rareza, nivel, precio, comisión, saldo neto recibido y día de la semana, fecha y hora (con segundos) en la zona America/Santo_Domingo. Debajo aparecen sus ofertas todavía activas.

El servidor registra `soldAt` al completar la compra y lo guarda junto con la transacción. Solo entrega el historial al propietario de las ofertas. No incluye ofertas retiradas como ventas ni cambia la hora en los reintentos. Las ventas anteriores que no tenían fecha se muestran como Fecha no registrada, sin inventar una fecha. El historial compartido sigue requiriendo alojar el servidor Node.

### Botones de venta en la mochila 0.29

La ventana de estadísticas conserva Equipar/Desequipar y añade un botón de venta según la pieza:

- Equipo comerciable: **Vender en mercado** abre directamente su formulario de publicación en Gram, conserva el ítem seleccionado y permite fijar el precio.
- Equipo ligado: **Vender · N Blez** retira la pieza inmediatamente de la mochila, libera su espacio y suma el precio completo al saldo Blez. No usa Gram ni aplica la comisión del mercado.

| Rareza | Venta inmediata (Blez) |
|---|---:|
| Común | 5 |
| Poco común | 12 |
| Raro | 20 |
| Épico | 50 |
| Legendario | 100 |

No se pueden vender piezas equipadas; primero se desequipan. Las pociones mantienen sus botones de uso y no se venden. Las piezas comerciables no pueden liquidarse mediante la venta Blez. El retiro de la pieza y el saldo se guardan juntos en la partida; una segunda venta del mismo espacio vacío no vuelve a pagar. La venta Blez funciona en la página estática, y publicar en Gram sigue requiriendo el servidor compartido.

### Publicación de sets completos 0.30

El Mercader de Etherial publica 135 piezas originales: guerrero, arquero y mago × nueve slots × cinco rarezas. Cada pieza tiene nivel 1 y marca de comerciable. Los precios son los mínimos: común 0.10 Gram, poco común 0.50, raro 0.80, épico 1.00 y legendario 3.00. Son 45 piezas por clase.

El catálogo cubre casco, armadura, botas, guantes, secundario de clase, arma de clase, collar, anillo y amuleto. No cambia las restricciones de clase al equipar.

El servidor publica el catálogo permanente al crear o actualizar la base de mercado (`catalogVersion: 3`). Las compras usan saldo Gram y conservan nivel, rareza y marca ⚖. Cada compra entrega una pieza nueva; la oferta original sigue activa con stock ilimitado. El vendedor es un mercader del juego; su cuenta de sistema no permite iniciar sesión como jugador. En pruebas de otros flujos se usa `seedCatalog: false`.

Si el servidor todavía no está disponible, Ofertas muestra las 135 piezas como catálogo del Mercader de Etherial con las compras desactivadas y un mensaje de conexión pendiente. No se registra una venta local ficticia ni se descuenta saldo. Al conectar, las ofertas disponibles provienen del servidor y reflejan el catálogo permanente y las ofertas únicas de los jugadores.

### Stock permanente y ganancias del propietario 0.31

Las 135 ofertas del Mercader de Etherial muestran Stock permanente ∞. Comprar no agota ni retira la oferta: cada comprador recibe una copia nueva con la misma clase, nivel, rareza y marca de comerciable. Dos compradores pueden adquirir el mismo artículo simultáneamente. Las publicaciones de jugadores conservan su comportamiento de pieza única.

Cada compra del catálogo crea un registro independiente en `catalogSales`, con un ID único, referencia de oferta, comprador, fecha/hora, bruto, comisión del 5% y neto. `ownerEarnings` acumula bruto, neto, comisiones y cantidad de ventas. La migración restaura como permanentes las ofertas del catálogo vendidas anteriormente, conservando sus registros.

`MARKET_OWNER_SESSION` configura la sesión UUID del propietario en el servidor. Las ganancias netas del catálogo se acreditan a esa cuenta y su historial aparece en Mis ventas; el propietario no puede comprar su propio catálogo. Sin propietario configurado, los ingresos quedan en la reserva del mercader (`system-catalog`). Al configurar al propietario se transfieren una sola vez los saldos de reserva y sus registros. Este valor se configura solo en el servidor.

Esto registra y asigna saldo Gram dentro del prototipo. Todavía falta enlazar la dirección pública de la billetera del propietario y habilitar depósitos/retiros verificados en la red TON. No se envían fondos reales a Telegram. El retiro sigue cotizando una comisión del 10%.

### Atributos RPG por pieza 0.32

Todo el equipo nuevo y antiguo, comerciable o ligado, recibe atributos aleatorios persistentes. Se conservan los valores base de ataque, HP y defensa del tipo de pieza; encima se tiran bonos de ataque, HP, defensa, velocidad de ataque, probabilidad de crítico y daño crítico. La cantidad, combinación, calidad y valores varían. Cada atributo muestra su calidad de tirada (1–100).

| Rareza | Bonos aleatorios | Calidad posible |
|---|---:|---:|
| Común | 1–2 | 10–45 |
| Poco común | 1–3 | 20–55 |
| Raro | 2–4 | 35–70 |
| Épico | 3–5 | 50–90 |
| Legendario | 4–6 | 70–100 |

Comunes y poco comunes tienen potencia baja; las siguientes rarezas elevan la potencia además de la calidad y cantidad de tiradas. El nivel aumenta los valores, de forma más moderada para porcentajes. Las piezas existentes reciben su tirada una sola vez al migrarse; los valores no se vuelven a sortear por abrir, equipar o recargar. Las pociones no reciben atributos.

Al equipar se suman los bonos a la ficha y al combate. Velocidad acelera solo el turno ofensivo del héroe, manteniendo el ritmo de enemigos y caminata. Crítico aumenta la probabilidad de golpes críticos, y daño crítico su multiplicador (bono base +50%). Se aplican límites totales: velocidad +100%, crítico 75% y bono de daño crítico adicional +200%. La estimación offline contempla velocidad y daño crítico esperado.

Mochila, ficha y detalles del mercado muestran los bonos y sus calidades. Los críticos aparecen en el registro de combate. La comparación de piezas incluye todas las estadísticas.

Las ventas entre jugadores y retiradas conservan los atributos exactos de la pieza. Cada compra del catálogo permanente genera una instancia nueva y tiradas nuevas; la ficha del catálogo indica expresamente que sus valores son de ejemplo. Los recibos del catálogo guardan los atributos realmente entregados. Los precios de venta y comisiones no cambian.


### Habilidades de clase 0.33
- Guerrero: Corte del Guardián, tajo cuerpo a cuerpo, daño ×1.8, arco luminoso y onda de impacto dorada.
- Arquero: Flecha perforante, disparo a distancia, daño ×2, flecha con estela verde e impacto.
- Mago: Estallido arcano, hechizo a distancia, daño ×2.2, círculo de runas, proyectil y explosión violeta.
- Tres habilidades por clase, desbloqueadas en niveles 3, 10 y 20; activación automática en su turno con al menos 10 maná. Recarga de 55 segundos desde el uso, independiente por clase y guardada en la partida. Viajar, morir, cambiar de héroe y recargar la página conservan el plazo. El tiempo real transcurre también en pausa, pero no permite atacar mientras está pausado.
- Efectos de ataques básicos y habilidades conservan su objetivo y completan su animación incluso cuando el golpe mata al mob o comienza la caminata. Se respeta la preferencia de movimiento reducido.


### Progresión de habilidades 0.34
Nivel máximo del personaje: **50**. Al alcanzar el límite se detiene la acumulación de EXP; partidas antiguas superiores se ajustan a 50 sin perder inventario ni monedas.

| Clase | Nv. 3 | Nv. 10 | Nv. 20 |
| --- | --- | --- | --- |
| Guerrero | Corte del Guardián ×1.8 | Doble tajo ×2.5 | Impacto del titán ×3.4 |
| Arquero | Flecha perforante ×2 | Disparo gemelo ×2.7 | Flecha astral ×3.6 |
| Mago | Estallido arcano ×2.2 | Lanza de hielo ×2.9 | Meteorito ×3.8 |

Cada habilidad cuesta 10 maná y tiene 55 segundos de recarga propia. El motor usa una habilidad disponible por turno de héroe, en orden de desbloqueo; sigue con ataques básicos si ninguna está disponible. Las recargas se guardan por clase y habilidad. La recarga antigua de cada clase migra a su primera habilidad. El panel muestra las tres piezas, sus requisitos, multiplicador y segundos restantes; sus efectos distinguen tajo doble, impacto, flechas gemelas/astrales, hielo y meteorito.
