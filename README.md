# Portfolio — maquette fidèle (version locale)

Reproduction HTML/CSS/JS du visuel validé, sans dépendance externe.

## Démarrage
Dans le dossier `portfolio-fidele` :

```bash
python3 -m http.server 8095 --bind 127.0.0.1
```

Ouvrir **http://127.0.0.1:8095/index.html** dans Chrome (saisir l'adresse manuellement).

Si le port 8095 est déjà occupé, arrêter l'ancien serveur avec Ctrl+C, ou lancer sur 8096.

## À finaliser avant publication
- Remplacer les miniatures illustratives par des captures réelles des deux applications.
- Raccorder les statistiques CPU/RAM/disponibilité à une source serveur sécurisée. Aucun chiffre n'est inventé.
- Compléter les liens GitHub/CI ProductPulse, CV et parcours.
- Les services privés sont montrés comme vitrine, sans liens publics vers les interfaces d'administration.
