'''
Created on 16 May 2014

@author: MARGHERITA
'''
from pyplasm import *
import sys
sys.path.insert(0, 'C:\Users\MARGHERITA\lar-cc\lib\py') 
from simplexn import *
from larcc import *
from lar2psm import *
from largrid import *
from scipy import *
from morph import *
from mapper import *
from splines import *
from sysml import *
sys.path.insert(0,'C:\Users\MARGHERITA\Desktop\CORSI MAGISTRALE\GRAFICA C')
from myfont import *
from architectural import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])
master = assemblyDiagramInit([7,5,2])([[.3,5,.1,2,.1,3.5,.3],[.3,6,.1,3,.3],[2.7,.3]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)  #ha numerato le celle

toRemove = [13,33,17,37, 53, 57]  #toglie queste celle
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toMerge = 33
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])

bagni = assemblyDiagramInit([3,1,1])([[.95,.1,.95],[3],[3]])

master = diagram2cell(bagni,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toMerge = 47
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])

cucina = assemblyDiagramInit([1,3,1])([[3.5],[2.9,.2,2.9],[3]])

master = diagram2cell(cucina,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toMerge = 10
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])

porta = assemblyDiagramInit([3,1,1])([[1.75,1.5,1.75],[.3],[3]])

master = diagram2cell(porta,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [68,14,61,63,48,11,29,66,64]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]

m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toMerge = 2
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) #ha riempito solo la cella 10

finestre = assemblyDiagramInit([1,3,2])([[.3],[2,2,2],[1.5,1.5]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre))))
master = diagram2cell(finestre,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [65,61]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 52
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

finestre2 = assemblyDiagramInit([1,3,2])([[.3],[1,1,1],[1.5,1.5]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre2))))
master = diagram2cell(finestre2,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [66]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 16
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta2 = assemblyDiagramInit([1,3,1])([[.3],[2.25,1.5,2.25],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta2))))
master = diagram2cell(porta2,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [68]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 41
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta3 = assemblyDiagramInit([3,1,1])([[1,1.5,1],[.3],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta2))))
master = diagram2cell(porta3,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [69]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 10
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta4 = assemblyDiagramInit([3,1,1])([[2,1.25,1.75],[.3],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta4))))
master = diagram2cell(porta4,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [70]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 18
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta5 = assemblyDiagramInit([1,3,1])([[0.1],[1,1,1],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta5))))
master = diagram2cell(porta5,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [71]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 29
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porte = assemblyDiagramInit([1,5,1])([[0.1],[1,1,1,1,1],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta5))))
master = diagram2cell(porte,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [72,74]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 32
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta6 = assemblyDiagramInit([1,3,1])([[.1],[1,1,1],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta5))))
master = diagram2cell(porta6,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [74]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 42
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

f = assemblyDiagramInit([1,5,2])([[.3],[1,2,1,2,1],[1.5,1.5]])
#VIEW(SKEL_1(STRUCT(MKPOLS(f))))
master = diagram2cell(f,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [77,81]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 11
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

u = assemblyDiagramInit([3,1,2])([[1,2,1],[.3],[1.7,1.3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(f))))
master = diagram2cell(u,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [84]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47

salmon = [2.55,2.28,1.96]
m = COLOR(salmon)(STRUCT(MKPOLS(master)))
sienna = [2.05,1.04,0.57]
base = COLOR(sienna)(CUBOID([11.3,9.7,.1 ]))
app = ( STRUCT([base, m]) )
appInv = T([1,2]) ([11.3,-3])(R([1,2])(PI)(app))
appSpecchiato = T(1)(22.6)(S(1)(-1)(app))
apps = STRUCT([app,appInv])
#VIEW(apps)
b = COLOR(sienna)(T(2)(-12.7)(CUBOID([16,22.4, .1])))
rett = COLOR(sienna)(T([1,2])([11.3, -3])(CUBOID([4.7,3,.1])))
rett2 = COLOR(sienna)(T([1,2,3])([11.3, -3,6])(CUBOID([1.55,3,.1])))

c = COLOR(sienna)(DIFFERENCE([b,rett]))
piano = STRUCT([c, apps])
#VIEW(piano)
appsVerticale = T(3)(3)(piano)
duepiani =STRUCT([piano,appsVerticale])
#VIEW(duepiani)
soffitto = COLOR(sienna)(T(3)(6)(c))
chiusa = STRUCT([soffitto,duepiani])
#VIEW(chiusa)
turq = [1.73,2.34,2.34]
spirale =COLOR(turq)(T([1,2])([13,-2])(STRUCT(MKPOLS(spiralStair(0.2, 2.15, 0.5, 0.1, 4.6, 2.7, 50)))))
conScala= STRUCT([spirale,chiusa,rett,rett2])
#VIEW(conScala)

p1 = CUBOID([.15,.15,6])
p2 = T([1,2])([15.8,9.4])(p1)
p1 = T([1,2])([15.9,-12.5])(p1)
conP = STRUCT([conScala,p1,p2])
#VIEW(conP)

dom = larDomain([32])
control_M1 = [[1,4], [2,6],[3,2]]
control_M2 = [[3,2], [4,5],[5,2]]
control_M3 = [[5,2], [6,5],[7,2]]

mapping1 = larBezierCurve(control_M1)
mapping2 = larBezierCurve(control_M2)
mapping3 = larBezierCurve(control_M3)

m1 = larMap (mapping1)(dom)
m2 = larMap (mapping2)(dom)
m3 = larMap (mapping3)(dom)

emme = STRUCT(MKPOLS(m1) + MKPOLS(m2) + MKPOLS(m3))
#VIEW(emme)
emme3D = T([1,3])([4,3])(COLOR(RED)(PROD([emme, Q(2)])))
emmeG = S([1,2,3])([2,2,2])(emme3D)
emmeG = R([2,3])(PI/2)(emmeG)
emmeG = T([1,2,3])([-2,4,2])(emmeG)
emmeG = R([1,2])(3*PI/2)(emmeG)
emmeG = T(1)(10)(emmeG)
emmeG = T(2)(14)(emmeG)

#VIEW(emmeG)
conM = STRUCT([emmeG, conP])
#VIEW(conM)

pezzo = SKEL_1(CUBOID([1,.1,1.7]))
pezzi2 =  [T(1)(1), pezzo]
ringh = STRUCT(NN(16)(pezzi2))
ringh3 = STRUCT(NN(22)(pezzi2))
ringh3 = T([1,2,3])([-1,-12.5,6])(ringh3)
ringh3 = R([1,2])(PI/2)(ringh3)
ringh3 = T([1,2])([-12.5,-12.3])(ringh3)
rp = STRUCT(NN(9)(pezzi2))
rp = T([1,2,3])([-1,-12.5,6])(rp)
rp = R([1,2])(PI/2)(rp)
rp = T([1,2])([3.4,-12.3])(rp)
rp2 = T(2)(13)(rp)
rsotto= T(3)(-3)(STRUCT([rp,rp2]))
#VIEW(ringh)

rlato = STRUCT(NN(5)(pezzi2))
rlato = T([1,2,3])([10,-12.5,3])(rlato)
rlato2 = T(2)(22)(rlato)
rlati = STRUCT([rlato,rlato2])
rlatiS = T(3)(-3)(rlati)



ringh = T([1,2,3])([-1,-12.5,6])(ringh)
ringh2 = T (2) (22)(ringh)
conR = STRUCT([ringh, conM,ringh2,ringh3,rp,rp2,rsotto,rlati,rlatiS])
VIEW(conR)


