'''
Created on 11 Apr 2014

@author: MARGHERITA
'''
from pyplasm import *
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
pp = STRUCT([marciapiedini, conM])
#VIEW(marciapiedini)
VIEW(pp)

