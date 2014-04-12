'''
Created on 11 Apr 2014

@author: MARGHERITA
'''
from pyplasm import *
'''
Created on 11 Apr 2014

@author: MARGHERITA
'''

#import exercise2
facciata = T(1)(2)(CUBOID([26,21]))

def disk2D(p): # point function
    u,v = p
    return [v*COS(u)*3.5, v*SIN(u)*3.5] # coordinate functions
domain2D = PROD([INTERVALS(2*PI)(32), INTERVALS(1)(3)]) # 2D domain decompos

cerchioArcoGrande=( MAP(disk2D)(domain2D))
cagTras = T([1,2])([15,8])(cerchioArcoGrande)
int = DIFFERENCE([facciata,cagTras])
#VIEW(int)

def disk2DP(p): # point function
    u,v = p
    return [v*COS(u)*1.75, v*SIN(u)*1.75] # coordinate functions

cerchioArchiPiccoli=( MAP(disk2DP)(domain2D))
cerchioSx = T([1,2])([6.75,7])(cerchioArchiPiccoli)
cerchioDx = T([1,2])([23.25,7])(cerchioArchiPiccoli)
int2 = DIFFERENCE([int,cerchioSx,cerchioDx])
#VIEW(int2)
rettSx= T(1)(5)(CUBOID([3.5,7]))
rettDx= T(1)(21.5)(CUBOID([3.5,7]))
rettCentro =T(1)(11.5) (CUBOID([7,8]))
south=(DIFFERENCE([int2,rettSx,rettDx,rettCentro]))

facciata3D =  PROD([south,Q(7.5)])
facciata3D= (facciata3D)
#VIEW(facciata3D)   #ARCO

floor0 = R([2,3])(PI/2)(CUBOID([30,12,2]))

grey71= [0.84,0.84,0.84]
floor0 = COLOR(grey71)(T(3)(-2)(floor0))
#VIEW(floor0)


parz1 = STRUCT([floor0,facciata3D])
#VIEW(COLOR(WHITE)(parz1))

cGrosso= T([1,2,3])([1.5,15,1.5])(CUBOID([27,1,8.5]))
c= T([1,2,3])([2,15,2])(CUBOID([26,1,7.5]))
cG = T(3)(-2)(DIFFERENCE([cGrosso,c]))
grey69=[0.89,0.89,0.89]
cG = COLOR(grey69)(cG)
#VIEW(cG)  #cornicione
parz2 = STRUCT([floor0,facciata3D,cG])
#VIEW(parz2)
taglia = T([1,2,3])([3,19,1])(CUBOID([24,4,6]))
parz3 = DIFFERENCE([parz2,taglia])
#VIEW(parz3)

Co1=T([1,2,3])([3,0,7])(CUBOID([1,2,2]))
Co2 = T(1)(6.5)(Co1)
Co3 = T(1)(16.5)(Co1)
Co4 = T(1)(23)(Co1)
basi = STRUCT([Co1,Co2,Co3,Co4])
parz4=STRUCT([parz3,basi])
#VIEW(parz4)
def disketto(p): # point function
    u,v = p
    return [v*COS(u)*0.5, v*SIN(u)*0.5] # coordinate functions
cerchioColonnina=( MAP(disketto)(domain2D))
colonnina =  R([2,3])(PI/2)(PROD([cerchioColonnina,Q(10)]))
colonnina1 = T([1,2,3])([3,2,8])(colonnina)
colonnina2 = T([1,2])([6.95])(colonnina1)
colonnina3 = T([1,2])([16.95])(colonnina1)
colonnina4 = T([1,2])([23.45])(colonnina1)
colonnina1= T(1)(0.5)(colonnina1)
colonne = T(2) (10)(STRUCT([colonnina1,colonnina2,colonnina3,colonnina4]))
grey27 =[0.69,0.69,0.69]
colonne = COLOR(grey27)(colonne)
#VIEW(colonnina)
parz5 = STRUCT([parz4,colonne])
#VIEW(parz5)

cap1 = T([1,2,3])([3,12,7.5])(CUBOID([1,2.9,1]))
cap2 = T(1)(6.65)(cap1)
cap3 = T(1)(16.65)(cap1)
cap4 = T(1)(23.15)(cap1)
cap = STRUCT([cap1,cap2,cap3,cap4])
COLOR(grey27)(cap)
parz6 = STRUCT([parz5,cap])
#VIEW(parz6)

cub1 = T([1,2,3])([3,16,7.5])(CUBOID([1.5,1,1]))
cub2 = T(1)(6.65)(cub1)
cub3 =  T(1)(16.65)(cub1)
cub4 =  T(1)(23.15)(cub1)
cubi = STRUCT([cub1,cub2,cub3,cub4])
COLOR(grey27)(cubi)
parz7 = STRUCT([parz6,cubi])
#VIEW(parz7)
colonnine = T([1,2])([0.25,16])(S(2)(0.3)(colonne))
COLOR(grey27)(colonnine)
parz8 = STRUCT([parz7,colonnine])
#VIEW(parz8)

cGr= T([1,2,3])([1.5,20,1.5])(CUBOID([27,2,8.5]))
cc= T([1,2,3])([2,20,2])(CUBOID([26,2,7.5]))
cGG = T(3)(-2)(DIFFERENCE([cGr,cc]))
parz9 = STRUCT([parz8,cGG])
#VIEW(parz9)  #colonne solo da una parte
est = T(3)(-8.5)(STRUCT([basi, colonne,cap,cubi,colonnine]))
COLOR(grey27)(est)
#VIEW(est)  #colonne esterne
solidModel= STRUCT([est,parz9])  #tutto senza le scale
#VIEW(solidModel)


lato = CUBOID([7.5,2])
grigioTopo = [0.84, 0.84, 0.84]
lato = COLOR(grigioTopo)(T([1,2])([2,7])(lato))
lato = R ([1,3])(PI/2)(lato)
lato = T([1,3])([2,-2])(lato)
latoOpposto = T (1)(26)(lato)
lati = STRUCT([lato, latoOpposto])

arco = STRUCT([solidModel, lato, latoOpposto])

viola = [2.05,0.96,1.44]
arco = COLOR(viola)(arco)
strada = T(2)(-2)(CUBOID([30,0.8,120]))
strada = COLOR (grigioTopo)(strada)
prova = (STRUCT([strada, arco]))
#VIEW(prova)
darkTurq = [1.21,2.05,2.05]
richBlue = [0.89,0.89,1.71]
strada = COLOR(richBlue)(strada)
palazzo = COLOR(darkTurq)(T ([1,2,3])([40,-2, 20])(CUBOID ([20,10,20])))
palazzo2 = T (3)(30)(palazzo)
palazzo3 = T (3)(60)(palazzo)
provaConCase = STRUCT([palazzo,palazzo2,palazzo3,prova])
#VIEW(provaConCase)
traversa = CUBOID([60,0.5,10])
traversa = COLOR(richBlue)(T([2,3])([-2,25])(traversa))
traversa2 = T(3)(30)(traversa)
traversa3 = T(3)(30)(traversa2)
provaTrav = STRUCT([traversa,traversa2,traversa3,provaConCase])
c = (STRUCT([traversa,traversa2,traversa3,palazzo,palazzo2,palazzo3]))

cSx = S(1)(-1)(c)
cSx= T(1)(30)(cSx)
case = T(3)(20)(STRUCT([c,cSx]))
p = STRUCT([prova,case])
#VIEW(provaTrav)
prato = COLOR(GREEN)(CUBOID([100, 0.5, 150]))
strada = COLOR(richBlue)(strada)
prato = T ([1,2,3])([-35, -2.5, -30])(prato)
conP=(STRUCT([p,prato]))

marciapiede1 = T([2,3])([-2,10])(CUBOID([4,1,35]))
marciapiede2 = T(1)(26)(marciapiede1)
marciapiede3 = T([2,3])([-2,55])(CUBOID([4,1,20]))
marciapiede4 = T(3)(30)(marciapiede3)
marciapiede5 = T(1)(26)(marciapiede3)
marciapiede6 = T(1)(26)(marciapiede4)
marciapiedePs = T([2,3])([-2,115])(CUBOID([4,1,5]))
marciapiedeDs = T (1)(26)(marciapiedePs)
marciapiedi = STRUCT([marciapiede1,marciapiede2,marciapiede3,marciapiede4,marciapiede5, marciapiede6,marciapiedePs,marciapiedeDs])
conM = STRUCT([marciapiedi,conP])
mp1 = T([1,2,3])([-10,-2,45])(CUBOID([14,1,2]))
mp2 = T(3)(8)(mp1)
mp3 = T (1)(36)(mp1)
mp4 = T (3)(8)(mp3)
mp5 = T (3)(30)(mp1)
mp6 = T (3)(38)(mp1)
mp7 = T (3)(30)(mp5)
mp8 = T (3)(38)(mp5)

mp9 = T(3)(30)(mp3)
mp10 = T (3)(8)(mp9)
mp11 = T (3)(30)(mp9)
mp12 = T(3) (8)(mp11)
#VIEW(conM)
marciapiedini = STRUCT([mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12])
tutto = STRUCT([marciapiedini, conM])
#VIEW(marciapiedini)
#VIEW(tutto)


lampione = CYLINDER([0.5,18])(30)
lampione = T([1,2,3])([2,30,-16])(lampione)
lampione = R([2,3])(PI/2)(lampione)
lampadina = COLOR(YELLOW)(SPHERE(2)([30,30]))
palo = CYLINDER([0.6,25])(30)
palo = T([1,2,3])([2,117,-23])(palo)
palo =  R([2,3])(PI/2)(palo)
f = CUBOID([10,15,0.5])
arancione = [2.55,1.40,0]
f = COLOR(arancione)(T ([1,2,3])([2,8,116.5])(f))
#VIEW(lampadina)
lampadina = T([1,2,3])([2,16.75,30])(lampadina)
l = STRUCT([lampadina,lampione])
#VIEW(l)
ldx = T (1)(26)(l)
#VIEW(lampione)
coppiaL = STRUCT([l,ldx])
coppia2 = T(3)(36)(coppiaL)
coppia3 = T (3)(30)(coppia2)
lampioni = STRUCT([coppiaL,coppia2,coppia3])
p = STRUCT([lampioni, tutto])
#VIEW(p)  #es 3 + lampioni

cono = CONE([2,12])(30)
verde = [0,1.39,0.69]
marrone = [0.92,0.51,0.23]
cono = COLOR(verde)(cono)
tronco = COLOR(marrone)(T(3)(-3)(CYLINDER([1,3])(30)))
albero = STRUCT([cono, tronco])
vaso = COLOR(marrone)(CUBOID([4,4,4]))
a = [T(1)(15),albero]
v = [T(1)(15),vaso]
alberi = STRUCT(NN(6)(a))

vasi = STRUCT(NN(6)(v))

#VIEW(alberi)
alberi = T (1)(-37)(alberi)

alberi = MAP([S1,S3,S2])(alberi)
alberi = T(2)(4)(alberi)
alberi = COLOR(verde)( T (3)(-20)(alberi))
vasi = T([1,2,3])([-39,-2,-22])(vasi)
q = STRUCT([alberi,vasi])
#VIEW(albero)


panca = CUBOID([9,1,5])
panca = T(2)(2)(panca)
piede = CUBOID([1,2,1])
piedeOpp = T(1)(6)(piede)
piedi = STRUCT([piede,piedeOpp])
piedi = T([1,3])([1,2])(piedi)

panchina= STRUCT([panca, piedi])
panchina = T(3)(-11)(panchina)
panchina = T(1)(-20)(panchina)
panchina2 = T (1)(60)(panchina)
panchinaLunga = T([1,3])([55,-115])(S([1,2])( [4,1.5])(panchina))
bronzo = [2.05 ,   1.27 ,   0.50]
panchinaLunga = COLOR(bronzo)(panchinaLunga)
panchinaLunga2 = T(1)(45)(panchinaLunga)

#VIEW(panchina)

pointsTutto = [[1,0],[2,0],[1,6],[2,3.5],[3.5,3],[3.5,4],[5,3.5],[5,0],[6,0],[6,6]]
pointsSopra = [[1,6],[3.5,4],[6,6]]
pointsSottoSx=[[2,0],[2,3.5],[3.5,3]]
pointsSottoDx=[[3.5,3],[5,3.5],[5,0]]
pointsSottoCentro=[[3.5,3],[2,0],[5,0]]
quadrato = (JOIN(AA(MK)(pointsTutto)))
sopra = (JOIN(AA(MK)(pointsSopra)))
sottoSx =  (JOIN(AA(MK)(pointsSottoSx)))
sottoDx =  (JOIN(AA(MK)(pointsSottoDx)))
sottoCentro =  (JOIN(AA(MK)(pointsSottoCentro)))
emme = DIFFERENCE([quadrato,sopra,sottoSx,sottoDx,sottoCentro])
emme3D = PROD([emme,Q(2)])
verdeKermit = [1.24,2.52,0]
emme3D =(COLOR(verdeKermit)(emme3D))

emme3D = R([2,3])(PI/2)(emme3D)
emme3D = T(2)(0)(emme3D)
emme3D = T(3)(10)(emme3D)
emme3D = T(1)(-20)(emme3D)
emme3D = R([1,3])(PI)(emme3D)
emme3D = T([1,3])([-23,20])(emme3D)
emme3D = S([1,3])([2,2])(emme3D)
emme2= T(1)(56)(emme3D)

def disk3D(p): 
    u,v = p
    return [v*COS(u), v*SIN(u), 0.3*v]

domainstella3D = PROD([INTERVALS(8*PI)(10), INTERVALS(1)(2)]) 
stella = (((MAP(disk3D)(domainstella3D) )))
cel = [2.40 ,   2.48   , 2.55]
stella = (COLOR(cel)(stella)) #stella a 5 punte in 3D
stella = T (1)(-10.5)(stella)
stella = S([1,2,3])([3,3,3])(stella)
stella = R([2,3])(PI/2)(stella)
st = [T(3)(6),stella]
stf =[T(1)(6),stella]
stelle = STRUCT(NN(24)(st))
stlinea = STRUCT(NN(15)(stf))
stelle = T(3)(-30)(stelle)
stelle = T(1)(-1)(stelle)
stelleO = T(1)(94.7)(stelle)
stlinea = T(3)(-26.5)(stlinea)
stlinea = T(1)(-2)(stlinea)
#VIEW(stella)

r = STRUCT([q,p,palo,f,panchina,panchina2,emme3D,emme2,stelle,stelleO,stlinea])
#VIEW(r)
bordo = T([1,2,3])([-34.5,-2,-33.25])(CUBOID([100,3,3]))
conB = STRUCT([r,bordo])
#VIEW(conB)
reale = [0.65 ,   1.05 ,   2.25]
pavP =COLOR(reale)( T([1,2,3])([-34.5,-2,-133])(CUBOID([100,1,100])))
conPP= STRUCT([pavP,conB])
#VIEW(conPP)   #con pavimento dietro

def H(a):
    return MAT( [[1,0,0],[0,1,a],[0,0,1]])

acquamarina = [1.27,2.55,2.12]
base =COLOR(acquamarina)( CUBOID([30,120,0.1]))
piedeTrave= CUBOID([5,1,1])
#VIEW(piedeTrave)
secondoPiedeTrave = T(2)(59)(piedeTrave)
piediTrave=COLOR(RED)(STRUCT([piedeTrave,secondoPiedeTrave]))
#VIEW(piediTrave)
camoscio = [2.40,2.20,1.30]
asse =COLOR(camoscio)( T([1,2,3])([2,5,12])(CUBOID([1,50,2])))

gambaTrave2D = H(0.7)(CUBOID([1,18]))
gambaTrave = PROD([gambaTrave2D, Q(1)])
gambaTrave = R([1,3])(PI/2)(gambaTrave)
gambaTrave = T(1)(3)(gambaTrave)
gambaOpposta = R ([1,3])(PI)(gambaTrave)
gambaOpposta = T (3)(13.5)(gambaOpposta)
gambaOpposta = T(2)(42)(gambaOpposta)
gambaOpposta = T(1)(5)(gambaOpposta)
sostegno2D = H(0.95)(CUBOID([1,4.7]))
sostegno = PROD([sostegno2D, Q(1)])
sostegnoDX = R ([1,3])(PI/2)(sostegno)
sostegnoDX = T ([1,2,3])([13,80,7.2])(sostegnoDX)
sostegnoSX = T (2)(120)(S(2)(-1)(sostegnoDX))
#VIEW(sostegno)

gambe = COLOR(RED)(STRUCT([gambaTrave,gambaOpposta]))
prova = STRUCT([gambe,sostegnoDX])
#VIEW(prova)
ins = STRUCT([piediTrave,asse,gambe])
ins = T(2)(30)(ins)
ins = T (1)(10)(ins)
celeste = [1.53, 2.03, 2.55]
tappetoneSotto = COLOR(celeste)(T([1,2])([2.5,35])(CUBOID([20,49,2])))
ceruleo = [0,1.23,1.67]
tappetoSx = COLOR(ceruleo)(T(1)(2.85)(CUBOID([18,30,1.5])))
sostegni = STRUCT([sostegnoSX, sostegnoDX])
trave = STRUCT([base,ins,tappetoneSotto,tappetoSx,sostegni])
trave = R([1,2])(PI/2)(trave)
trave = R([2,3])(PI/2)(trave)
trave = R([1,2])(PI)(trave)
trave = T([1,2,3])([-40,2,-110])(trave)
trave = S([1,2,3])([0.5,0.5,0.5])(trave)
#VIEW(trave)
conTrave=STRUCT([conPP,trave])
#VIEW(conTrave)


baseP = CUBOID([14,2,1])
baseOpp = T(2)(24)(baseP)
basi = COLOR(RED)(STRUCT([baseP,baseOpp]))
#VIEW(basi)
basso1 = T(2)(1)(CYLINDER([0.6,17])(30))
basso2 = T(2)(24)(basso1)
bassi = COLOR(RED)(T(1)(1.5)(STRUCT([basso1,basso2])))
alto1 = T(2)(1)(CYLINDER([0.6,25.75])(30))
alto2 = T(2)(24)(alto1)
alti = COLOR(RED)(T(1)(11.7)(STRUCT([alto1,alto2])))
staggio = R([2,3])(PI/2)(CYLINDER([0.4,25])(30))
staggio = T (3)(16.5)(staggio)
staggio = T(2)(25.45)(staggio)
staggio = COLOR(camoscio)(T(1)(1.5)(staggio))
staggioAlto= COLOR(camoscio)(T([1,3])([10.25, 8.5])(staggio))
tappetone = COLOR(ceruleo)( T([1,2])([-8,2.5])(CUBOID ([38,21,2])))
baseUB = COLOR(acquamarina)(CUBOID ([60,30,0.1]))
baseUB= T([1,2])([-20,-2])(baseUB)
parallele = T(2)(140)(STRUCT([basi,bassi,alti,staggio,staggioAlto,tappetone,baseUB]))

parallele = R([1,2])(PI/2)(parallele)
parallele = R([2,3])(PI/2)(parallele)
parallele = R([1,2])(PI)(parallele)
parallele = T([1,2,3])([-70,2,-180])(parallele)
parallele = S([1,2,3])([0.5,0.5,0.5])(parallele)
conUB = STRUCT([conTrave,parallele])
#VIEW(conUB)
tatami = T([1,2,3])([-27,2,-110])( COLOR(RED)(CUBOID([40,1.5,40])))
intBianco =T([1,2,3])([-26.25,2,-109])( COLOR(WHITE)(CUBOID([38,1.5,38])))
conT = STRUCT([conUB,tatami,intBianco,panchinaLunga,panchinaLunga2])
VIEW(conT)