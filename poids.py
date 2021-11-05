import numpy as np

old = np.sqrt((0.7-0.31)**2 + (0.6-0.22)**2 + (0.9-0.1)**2)
print("old={:.2f}".format(old))  # old=0.97

# La formule de mise à jour du poids ci-dessous
# w1 (0.31, 0.22, 0.10)

# W(t+1) = W(t) + L(t) ( V(t) — W(t) )
# New Weights = Old Weights + Learning Rate (Input Vector1 — Old Weights)
learning_rate = 0.5  # pour la vitesse d'apprentissage
w11 = old + learning_rate * (0.31 - old)
w12 = old + learning_rate * (0.22 - old)
w13 = old + learning_rate * (0.1 - old)

# après entrainement j'obtient le vecteur w(0.64, 0.59, 0.53)
print('w({:.2f}, {:.2f}, {:.2f})'.format(w11, w12, w13))  # w(0.64, 0.59, 0.53)

# je calcule de nouveau
new = np.sqrt((0.7-0.68)**2 + (0.6-0.63)**2 + (0.9-0.57))
print("new={:.2f}".format(new))  # new=0.58
