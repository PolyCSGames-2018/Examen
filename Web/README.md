# Web (10 points)
Cette partie de l’examen consiste en la réalisation d’une application web. Vous êtes libres d’utiliser les technologies 
de votre choix pour le frontend (Angular, Vue, React, etc.) et pour le backend (Node.js, ASP.Net, PHP, etc.). 
La seule restriction est que vous devez fournir un README expliquant comment faire rouler votre application et sur quels 
ports les différentes parties roulent. Sans instructions, nous ne pouvons pas corriger votre application.

Vu qu'on est nice, on vous fournit une base de backend Node.js et une base de frontend Angular, vous êtes libres de les utiliser
ou non. On vous fournit aussi dans le backend des données en exemple qui peuvent être utilisées pour la réalisation de l'application, 
elles se trouvent dans le dossier `data`. Toutes les données peuvent être sauvegardées en mémoire, pas besoin de bases de données.
 
## Mise en situation:
 
Votre oncle Mario est le gérant d’un restaurant de poulet rôti au centre ville de Montréal: Le PouletAvion. 
Avec les commandes de poulet se multipliant, il sent le besoin de faire un système de gestion des livraisons. 
Sachant que vous êtes un grand programmeur, il vous confie la création de ce système et vous acceptez car vous croyez en 
l’avenir de son restaurant et son bon poulet.
 
Voici les features que vous devez implémenter pour la première version de cette application web, on vous suggère de les faire en ordre.:

- (3.5 points) On doit pouvoir voir la liste de **toutes les commandes** qui ont déjà été passées au restaurant classées en **ordre décroissant** 
de la date de la commande. Cette liste doit afficher au minimum les champs "Date et heure", "Adresse", "Coût total de la commande"
et "Nom du livreur assigné". 

![](https://i.imgur.com/E1Zl6Fq.png)

- (0.5 points) Une commande ayant un livreur déjà assigné doit avoir un fond d'une autre couleur que les commandes sans 
livreur assigné.

![](https://i.imgur.com/G562iuD.png)

- (3.5 points) Lorsqu'on clique sur une commande dans la liste, on a l'option de modifier les détails de cette commande et les sauvegarder.
    - (1.5 points) On peut ajouter ou retirer dynamiquement un item de la commande. On doit choisir un item parmi la liste d'items disponibles 
    avec une liste déroulante et spécifier la quantité. Le sous-total pour cet item se calculera automatiquement.
    - (1 point) On peut choisir un livreur parmi la liste de livreur avec une liste déroulante ou le laisser non-assigné.
    - (1 point) On peut modifier l'adresse de livraison.
    - (1 point) Un bouton "Sauvegarder" nous permet de sauvegarder les changements.

![](https://i.imgur.com/2FPktHO.png)
    
- (2.5 points) On doit pouvoir uploader une image de la commande et l'assigner à celle-ci à partir du menu de modification de la commande.
Si une image a été assignée à une commande, on doit la voir et avoir l'option de la remplacer.

![](https://i.imgur.com/enfqXfL.png)


 
 
 
