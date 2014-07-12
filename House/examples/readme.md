Code organization :

index: pagina html di avvio. Parte la casa con la TrackBall. 
E' possibile aprire sulle porte cliccando, e spegnere le luci dai controls della GUI.
Nella pagina di avvio è possibile cliccare sul bottone "View with Pointer Lock Controls" per caricare un'altra pagina dove si effettua una visita della casa tramite Pointer Lock

Dentro la cartella di assets chiamata oggetti, ci sono i seguenti file javascript:
house: carica l'OBJ della casa importato da LAR
houseTrack.js: carica la casa che viene caricata nella pagina di avvio
shape: metodo parametrico per creare muri con textures 3d tramite shape, usato per i muri esterni
floor: metodo parametrico per creare muri tramite BoxGometry, usato per pavimenti e carte da parati
porta: metodo parametrico per creare porte, con perno in modo che sia possibile aprirle
esterne: carica i muri esterni
int : carica le carte da parati per le stanze
pavimenti: carica i pavimenti
window: carica le finestre
doors: carica le porte
lights: carica le luci
forniture: carica i mobili 

Nella cartella sounds è presente il file mp3 del suono usato nello spegnimento della luce
Nella cartella textures sono presenti le textures usate per le porte e i muri
Nella cartella models sono presenti i file OBJ degli oggetti usati come mobili e della casa importata da LAR

Graphic techniques
STATIC TEXTURES: per pareti interne e pavimenti (2D) e esterne (3D)
AUDIO: per accendere e spegnere le luci
SPOTLIGHT: presenti in ogni stanza e all'esterno della casa
GUI CONTROLS: per accendere e spegnere le luci
OBJ + MTL IMPORT for room detailing
OBJECT PICKING: si possono aprire le porte cliccandoci 
TWEEN: utilizzato per animazioni della palla e della porta
POINTER LOCK CAMERA
TRACKBALL

