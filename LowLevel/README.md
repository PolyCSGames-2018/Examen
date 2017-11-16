# Low level (10 points)

Cet exercice doit être fait sur Linux en C.

PANIQUE AU KREMLIN. Les hackers patriotiques russes ont perdus de leur efficacité et Trump est en retard dans les sondages pour 2020. Leur serveur d’entreposage de shellcode a été infecté par un virus écrit par un stagiaire et rien ne peut être récupéré. Ils doivent alors écrire leur shellcode à nouveau et ces derniers contiennent de nombreux bugs. Créer des segfaults sur les serveurs mails du nouveau candidat démocrate Mark Zuckerberg, c’est cool mais très peu efficace en termes d’espionnage. Vlad vous demande alors personnellement de créer un service permettant de vérifier les shellcodes en C fonctionnant sur Linux sans dépendances autres que Ptrace et pthread.

1. (2 points) Communication sur un socket permettant de recevoir le shellcode.
2. (2 points) Multithreading du traitement des requêtes avec pthread.
3. (2 points) Exécution du shellcode.
4. (2 points) Déboguage du shellcode avec ptrace.
5. (2 points) Détection d’un SIGSEGV (segfault) et réponse appropriée au client.
