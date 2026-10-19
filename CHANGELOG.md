# Journal des versions – UTP (Useful Tools Pack)

Numérotation **MAJEUR.MINEUR.CORRECTIF** (versionnage sémantique) :
- **Correctif** (1.0.**1**) : petite correction, rien de nouveau pour l'utilisateur.
- **Mineur** (1.**1**.0) : nouvelle fonction, compatible avec l'existant.
- **Majeur** (**2**.0.0) : gros changement ou fichiers anciens plus compatibles.

La version installée s'affiche dans l'en-tête de l'app (ex. « v1.0.0 »).

---

## En développement (prochaine version)

- Barre CERN officielle (Signed in as / Sign out via le SSO) et en-tête UTP sur bandeau bleu avec badge TEST / PROD.
- Plans quadrillés : supprimer / restaurer des cases (menu « Cases ») pour des grilles en L ou découpées ; lignes et plan suivent le contour.

---

## 1.0.0 – 18 octobre 2026

Première version officielle sous le nom **UTP – Useful Tools Pack**.

**Accueil**
- Onglets « Rapports » et « Plans quadrillés », recherche, compteurs.
- Importer plusieurs fichiers (`.rapport`, `.plan`, `.utp`), mode Sélectionner / Tout sélectionner / Exporter.
- Stockage protégé sur l'appareil, fonctionnement hors ligne, bandeau de mise à jour.

**Rapports**
- PDF A4 paysage au cartouche CERN IT-FCS-DO, police ISOCPEUR, légende avec comptage automatique des symboles.
- Bâtiments et plans (GIS + Coller), photos commentées, mise en page automatique, sauts de page, noms de page.
- Champ Étage et bouton « Plan quadrillé » qui recherche le plan dans SharePoint Building maps.
- « Modifier » : tracé libre, ligne, flèche, polyligne (courbes, lissage), rectangle, cercle, texte en pt, repères photo, formes 3D, symboles, traits pointillés, angles calés (menu Angle, touche Maj), aperçu du trait, recadrer / pivoter.
- « Modifier le PDF », commentaires en texte enrichi, versions de rapport.

**Plans quadrillés**
- Unité de grille par 2 points + longueur, origine, axes (vertical ou libre), grille en direct.
- Colonnes, lignes, ajustement fin, dépassement des lignes, textes ISOCPEUR, mesures en polyligne.
- Loupe au doigt, Retour (annuler), PDF A4 ajusté au contenu.

---

## 0.x – « Rapport technique » (septembre – octobre 2026)

Phase de développement. Les anciennes publications (v1 à v24 dans l'historique GitHub) correspondent à cette phase : premières versions du rapport photo, puis ajout progressif des outils, du plan quadrillé et du nom UTP.
