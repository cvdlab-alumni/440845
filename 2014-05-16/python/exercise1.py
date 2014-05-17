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
VIEW(hpc)

toRemove = [84]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)  #ha tolto la cella 47
m = STRUCT(MKPOLS(master))

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc) #rinumera

salmon = [2.50,1.28,1.14]
base = CUBOID([11.3,9.7,.1 ])
#VIEW(base)
app = COLOR(salmon)( STRUCT([base, m]) )
VIEW(app) 













