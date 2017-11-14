# Mobile (10 points)

Cette partie de l'examen consiste en la réalisation d'une application mobile. Vous pouvez choisir la plateforme
de votre choix (Android ou iOS on s'entend. Windows Phone = 0)
L'application doit absolument être conçue avec un SDK natif (Xamarin, Cordova, React Native, etc. ne sont pas acceptés.), 
vous devrez donc utiliser Java (ou Kotlin) ou Swift (ou Objective C) 

Nous vous fournissons aussi le backend pour la réalisation de l'application, vous aurez donc uniquement à
réaliser la partie frontend.

### Mise en situation
La semaine dernière, votre ami Sébastien que vous n'avez pas vu depuis le primaire vous écrit sur Facebook 
pour vous faire part d'une offre d'affaire que vous ne pourrez refuser: 

![](https://i.imgur.com/gJw3NYB.png)

Vous acceptez donc son offre de 10% des parts de la compagnie DogzzClub pour réaliser l'application au complet, car anyway,
10% de 100 millions c'est beaucoup d'argent et Sébastien mérite bien 90% pour avoir eu l'idée et parce que son cours de 
marketing au HEC lui permettra de devenir le prochain Zuckerberg!

Eh oui, vous devrez faire Tinder mais pour les chiens! Pour vous simplifier la tâche, nous vous avons fait un API que
vous pourrez utiliser directement à partir du frontend.

![](https://im.ezgif.com/tmp/ezgif-1-9131f13b8d.gif)

Voici ce que vous devez faire en vous servant de l'API: 
- Faire une fenêtre qui affiche un flux de chiens (Un après l'autre). Les informations suivantes doivent être affichées 
pour chaque chien:

    - Son nom
    - Son âge
    - Sa photo
    
- Sous les informations du chien on doit retrouver deux boutons:
    - Like
    - Dislike
    
- Peu importe sur quel bouton on appuie, le chien affiché actuellement doit changer. Si on a appuyé sur le bouton like,
il faut regarder si le chien liké nous a liké aussi, si oui, nous devons afficher une alerte qui dit qu'il y a un match.

- Points bonus si c'est beau!

![](https://i.imgur.com/0yjULfe.gif)

#### API reference
Url de l'api: `http://dogzz.club:7777`

`GET /`

Retourne un chien aléatoire contenant les données suivantes: 

```json
{
  "name": "Max", // Nom du chien
  "age": 4, // Age du chien
  "likes_you": true, // Le chien vous a-t-il swipe right?
  "pic_url": "https://dog.ceo/api/img/poodle-miniature/n02113712_3212.jpg" // Lien vers une image du chien
}
```

