'''
Created on 21 Mar 2014

@author: MARGHERITA
'''
from pyplasm import *

plum = [2.21,1.60,2.21]
pointsf0 = [[0,0],[0,12],[30,0], [30,12]]
floor0 = (JOIN(AA(MK)(pointsf0)))
#floor0 = COLOR(plum)(CUBOID([30,12]))
#VIEW(base)


p1= T([1,2,3])([2,2,1])(CUBOID([3,7.5]))
#VIEW(p1)
p2 = T([1,2,3])([8.5,2,1])(CUBOID([3,7.5]))
p3 = T([1,2,3])([18.5,2,1])(CUBOID([3,7.5]))
p4 = T([1,2,3])([25,2,1])(CUBOID([3,7.5]))
sGreen = [0,2.55,1.27]
floor1=COLOR(sGreen)(STRUCT([p1,p2,p3,p4]))
#VIEW(floor1)


l2 = COLOR(GREEN)(CUBOID([27,8.5]))
floor2= T([1,2,3])([1.5,1.5,15])(l2)
#VIEW(floor2)
turq = [1.73,2.34,2.34]
l3 = COLOR(turq)(CUBOID([26,7.5]))
floor3= T([1,2,3])([2,2,21])(l3)
#VIEW(floor3)
model2D = STRUCT([floor0,floor1,floor2, floor3])
VIEW(model2D)
