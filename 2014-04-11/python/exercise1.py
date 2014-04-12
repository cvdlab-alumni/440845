'''
Created on 11 Apr 2014

@author: MARGHERITA
'''
from pyplasm import *

floor0 = R([2,3])(PI/2)(CUBOID([30,12,2]))
grey71= [0.84,0.84,0.84]
floor0 = COLOR(grey71)(T(3)(-2)(floor0))

cGrosso= T([1,2,3])([1.5,15,1.5])(CUBOID([27,1,8.5]))
c= T([1,2,3])([2,15,2])(CUBOID([26,1,7.5]))
cG = T(3)(-2)(DIFFERENCE([cGrosso,c]))
grey69=[0.89,0.89,0.89]
cG = COLOR(grey69)(cG)  #cornicione

parz2 = STRUCT([floor0,cG])
#VIEW(parz2)

pianoSopra = CUBOID([24,2,6])
pianoSopra = T ([1,2,3])([3,19,1])(pianoSopra)
parz3 = STRUCT([pianoSopra, parz2])  #base, cornicione e pavimento della terrazza sopra
#VIEW(parz3)

Co1=T([1,2,3])([3,0,7])(CUBOID([1,2,2]))
Co2 = T(1)(6.5)(Co1)
Co3 = T(1)(16.5)(Co1)
Co4 = T(1)(23)(Co1)
basi = STRUCT([Co1,Co2,Co3,Co4])
parz4=STRUCT([parz3,basi])
#VIEW(parz4)

def disk2D(p): # point function
    u,v = p
    return [v*COS(u)*3.5, v*SIN(u)*3.5] # coordinate functions
domain2D = PROD([INTERVALS(2*PI)(32), INTERVALS(1)(3)])
                
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
#VIEW(est)
solidModel= STRUCT([est,parz9])  #tutto senza le scale
VIEW(solidModel)
