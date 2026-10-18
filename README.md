# UTP – Useful Tools Pack

Boîte à outils web pour iPad, pour le terrain (câblage et télécom, CERN IT-FCS-DO) :
- **Rapports** : rapports photo annotés en PDF (A4 paysage, police ISOCPEUR, cadre, légende et cartouche IT-FCS-DO).
- **Plans quadrillés** : quadrillage d'un plan d'étage à partir d'une unité de grille, avec textes et mesures, en PDF A4.

L'accueil est organisé en onglets : « Rapports » et « Plans quadrillés ».

**Ouvrir l'app :** https://cacolax.github.io/Rapport.io/

---

## Fonctionnalités

**Rapports**
- Plusieurs rapports dans « Mes rapports », avec nouvelle version (incrément du numéro).
- Bouton **Importer** (plusieurs fichiers `.rapport`, `.plan` ou `.utp` à la fois) et mode **Sélectionner** (Tout sélectionner, Exporter la sélection) dans chaque onglet.
- Informations du cartouche : titre, n° de bâtiment, nom, date, version.
- Légende avec comptage automatique des symboles placés, et quantités modifiables à la main.
- Section « Commentaires » en texte enrichi : gras, italique, barré, couleurs.

**Pages**
- Page 1 : photos du bâtiment et plans. Le bouton GIS ouvre la Planothèque CERN, et le bouton Coller insère la capture d'écran du plan.
- Pages suivantes : photos avec un commentaire sous chacune.
- Mise en page automatique selon le nombre et l'orientation des photos (1 / 2 / 2+1 / 2×2), avec des sauts de page manuels.

**Annotation des photos (« Modifier »)**
- Tracé libre, ligne, flèche, polyligne (flèches au début ou à la fin, courbure, lissage), rectangle et cercle (remplissage de 0 à 100 %), texte.
- Formes 3D : pavé et cylindre, ajustables par poignées.
- Symboles de la légende et repères photo (numéro + direction de prise de vue).
- Traits pleins, tirets ou pointillés, couleurs favorites, tailles.
- Menu « Angle » (5° à 90°) et touche Maj (30°) pour tracer des traits droits.
- Aperçu transparent du trait en cours.
- Zoom (pincement à deux doigts), sélection et modification des formes déjà placées, retour arrière.
- Recadrer et pivoter une photo (outil « Recadrer »), les annotations suivent.

**PDF**
- Aperçu avant génération.
- « Modifier le PDF » : annotation directe des pages générées, avec les mêmes outils.
- Nom du fichier : `B<bâtiment>_Rapport_technique_v<version>`.

**Plans quadrillés**
- Import d'un plan PDF (1re page) ou image, par exemple une capture de la Planothèque.
- Unité de grille : 2 points sur le plan + la longueur en cm (ex. une porte = 70 cm).
- Origine, fin de l'axe Y (vertical, ou « Axe libre » pour un plan penché), puis extension en X en direct.
- Réglages : colonnes, lignes, ajustement fin de la case, dépassement des lignes (aucun, ½ ou 1 case).
- Texte ISOCPEUR (couleur, taille en pt) pour un titre ou des repères.
- Retour (annuler) et loupe au doigt pour viser précisément.
- Mesure en polyligne avec le total en m ou cm, affichable ou non dans le PDF.
- PDF A4 (orientation automatique) : grille vectorielle bleue, numérotation, débord d'une case, plan penché remis droit.

**Hors ligne**
- Installable sur l'écran d'accueil de l'iPad. Une fois chargée, l'app fonctionne sans réseau.
- Un bandeau « Nouvelle version disponible – Recharger » apparaît après chaque mise à jour.

---

## Utilisation sur iPad

1. Ouvrir le lien dans Safari.
2. Toucher Partager, puis « Sur l'écran d'accueil ».
3. Lancer l'app depuis son icône.

### Données et sauvegarde

- Les rapports restent **uniquement sur l'appareil** : stockage local du navigateur, rien n'est envoyé sur un serveur.
- L'app installée et Safari ont chacun leur propre mémoire.
- **Les fichiers exportés sont la sauvegarde** : `.rapport` (un rapport), `.plan` (un plan quadrillé), `.utp` (plusieurs éléments). Exporter régulièrement, et toujours avant de supprimer ou réinstaller l'app (« Sélectionner » → « Tout sélectionner » → « Exporter »).
- Pour passer d'un appareil à un autre : exporter, puis « Importer » sur l'autre appareil. Un élément déjà présent n'est remplacé que si le fichier est plus récent.

---

## Structure du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'application (HTML, CSS, JavaScript). La police ISOCPEUR et les logos y sont intégrés. |
| `sw.js` | Service worker pour le hors ligne. Contient `VERSION` et la liste des fichiers mis en cache. |
| `manifest.webmanifest` | Nom, icônes et affichage de l'app installée. |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | Icônes de l'app. |
| `jspdf.umd.min.js` | Génération du PDF (jsPDF 2.5.1). |
| `pdf.min.js`, `pdf.worker.min.js` | Lecture du PDF pour l'aperçu et « Modifier le PDF » (pdf.js 3.11.174). |
| `fonts/` | Polices de l'interface : Archivo, Source Sans 3, IBM Plex Mono. |

Le site est publié par GitHub Pages depuis la branche `main`.

---

## Mettre à jour l'app

1. Modifier `index.html`.
2. **Incrémenter `VERSION` dans `sw.js`**, sinon les iPad ne voient pas la mise à jour. Si un nouveau fichier est ajouté, l'ajouter aussi à la liste `FILES`.
3. Faire un commit sur `main` avec un message qui décrit le changement.
4. Attendre 1 à 2 minutes, le temps que GitHub Pages se mette à jour.
5. Dans l'app, toucher « Recharger » dans le bandeau.

Pour tester en local : `python3 -m http.server`, puis ouvrir `http://localhost:8000`.

---

## Versions

Version actuelle : **1.0.0**, affichée dans l'en-tête de l'app.
Numérotation MAJEUR.MINEUR.CORRECTIF : le détail de chaque version est dans le [journal des versions](CHANGELOG.md) et dans les [Releases GitHub](https://github.com/Cacolax/Rapport.io/releases).

Pour publier une version : mettre à jour `APP_VERSION` dans `index.html`, `VERSION` dans `sw.js` et `CHANGELOG.md`, puis créer l'étiquette `vX.Y.Z`.

---

Développé par Lucas Correia (CERN IT-FCS-DO), avec l'aide de Claude.
