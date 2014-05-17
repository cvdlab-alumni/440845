'''
Created on 17 May 2014

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
VIEW(hpc)  #scheletro con celle numerate

diagram = assemblyDiagramInit([3,1,1])([[.95,.1,.95],[2],[3]])
#celle = [13,33,17, 53, 57, 16,37,56,12,32,52]
celle = [36]
toMerge = 36


def rimuoviCelle(listaCelle,master):
    master = master[0],[cell for k,cell in enumerate(CV) if not (k in listaCelle)]
    hpc = SKEL_1(STRUCT(MKPOLS(master)))
    hpc = rinumera(master, hpc)
    return hpc


def rinumera(master,hpc):
    hpc = cellNumbering(master,hpc)(range(len(master[1])),CYAN,2)
    VIEW(hpc)
    return hpc

def merge(toMerge, diagram,master):
    cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
    master = diagram2cell(diagram,master,toMerge) #ha unito quello piccolo con quello grande iniziale
    hpc = SKEL_1(STRUCT(MKPOLS(master)))
    hpc = rinumera(master, hpc)
    return hpc
   
hpc = rimuoviCelle(celle,master)
hpc = merge(toMerge, diagram,master)

pair = [T(1)(11.3), hpc]
houseRow = STRUCT(NN(6)(pair))
VIEW(houseRow)  #6 case sull'asse x , i numeretti sono sempre gli stessi




