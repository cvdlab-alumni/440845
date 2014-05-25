'''
Created on 21 May 2014

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
#VIEW(hpc)  #scheletro con celle numerate

#voglio fare i 2 bagni dividendo il 37

toRemove = [13,33,17,37, 53, 57]  #toglie queste celle
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)  #mostra scatola 3d con scomparti e aperta xke ha tolto quelle celle 

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toMerge = 33
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) #ha riempito solo la cella 33

bagni = assemblyDiagramInit([3,1,1])([[.95,.1,.95],[3],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(bagni))))
master = diagram2cell(bagni,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toMerge = 47
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) #ha riempito solo la cella 47

cucina = assemblyDiagramInit([1,3,1])([[3.5],[2.9,.2,2.9],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(cucina))))
master = diagram2cell(cucina,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toMerge = 10
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) #ha riempito solo la cella 10

porta = assemblyDiagramInit([3,1,1])([[1.75,1.5,1.75],[.3],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta))))
master = diagram2cell(porta,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [68,14,61,63,48,11,29,66,64]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

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
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 52
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

finestre2 = assemblyDiagramInit([1,5,2])([[.3],[1,.45,.1,.45,1],[1.5,1.5]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre2))))
master = diagram2cell(finestre2,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [66,70]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
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

toRemove = [71]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 31
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta3 = assemblyDiagramInit([1,5,1])([[.3],[1,1,2,1,1],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(porta3))))
master = diagram2cell(porta3,master,toMerge) #ha unito quello piccolo con quello grande iniziale
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [72,74]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

toMerge = 46
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

finestre3 = assemblyDiagramInit([1,9,2])([[.3],[1,.45,.1,.45,2,.45,.1,.45,1],[1.5,1.5]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre3))))
master = diagram2cell(finestre3,master,toMerge) 
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [76,80,84,88]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera 

toMerge = 10
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta4 = assemblyDiagramInit([3,1,1])([[2,1,2],[.3],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre3))))
master = diagram2cell(porta4,master,toMerge) 
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [87]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera 

toMerge = 18
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta5 = assemblyDiagramInit([1,3,1])([[.3],[1,1,1],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre3))))
master = diagram2cell(porta5,master,toMerge) 
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [88]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera 

toMerge = 32
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

porta6 = assemblyDiagramInit([1,3,1])([[.3],[1,1,1],[3]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre3))))
master = diagram2cell(porta6,master,toMerge) 
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [89]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera 

toMerge = 11
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell])) 

finestraU = assemblyDiagramInit([5,1,2])([[1,.95,.1,.95,1],[.3],[1.5,1.5]])
#VIEW(SKEL_1(STRUCT(MKPOLS(finestre3))))
master = diagram2cell(finestraU,master,toMerge) 
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [92,96]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc) #rinumera

salmon = [2.50,1.28,1.14]
base = CUBOID([11.3,9.7,.1 ])
#VIEW(base)
app = COLOR(salmon)( STRUCT([base, m]) )
#VIEW(app) 

dav1 = T([1,2,3])([1.3,9.7,1.2])(CUBOID([3,.2,.2]))
dav2 = T([1,2,3])([-0.2,0.3,1.2])(CUBOID([.2,2.1,.2]))
dav3 = T(2)(4)(dav2)
dav4 = T([1,2,3])([11.3,1,1.2])(CUBOID([.2,1.7,.2]))
dav5 = T(2)(2.95)(dav4)
dav6 = T(2)(3.1)(dav5)
salmon2 = [2.55,1.40,1.05]
fuxia = [2.55,0.20,1.47]
rosaChiaro =[2.55,1.82,1.93]
davs = COLOR(rosaChiaro)(STRUCT([dav1,dav2 ,dav3,dav4,dav5,dav6]))
conD = STRUCT([davs,app])
#VIEW(conD)

baseG = COLOR(salmon2)(T([1,2,3])([-0.15,-0.15,-0.2])(CUBOID([11.6,10,0.2])))
conB = STRUCT([conD,baseG])
#VIEW(conB)
rosaCupo =[1.71,1.30,2.55]
zerbino = COLOR(rosaCupo)(T([1,2,3])([2.05,0.2,0.15])(CUBOID([1.5,0.6,0.1])))
conZ = STRUCT([conB,zerbino])
VIEW(conZ)

'''
conZ2 =  [T(1)(13.8), conZ]
case = T(1)(-11.3)(STRUCT(NN(4)(conZ2)))

#VIEW(case)

stradina = T([1,2,3])([4.45,-2.2,-0.2])(CUBOID([1.8,3,0.2]))
stradina2 = T(1)(13.8)(stradina)
stradina3 = T(1)(13.8)(stradina2)
stradina4 = T(1)(13.8)(stradina3)

stradine = STRUCT([stradina,stradina2,stradina3,stradina4])

strada = T([1,2,3])([0,-6.7,-0.2])(CUBOID([56,4.5,0.2]))
conS = STRUCT([case,stradine,strada])
#VIEW(conS)
prato=COLOR(GREEN)( T([1,2,3])([0,-6.7,-0.25])(CUBOID([56,18,0.15])))
conP = STRUCT([conS,prato])
VIEW(conP)
'''