# 1. Les modules et packages

Les modules de type packages sont des modules créés et fournis par la communauté. Ils peuvent être gratuits ou payants. Leur objectif est de faciliter le travail des développeurs dans la création de leurs applications.

En somme, il est inutile de réinventer la roue à chaque fois.

## Types de packages

- **Packages libraries** : Ce sont de simples outils mis à disposition. Par exemple :
  - `react`
  - `pdfjs`
  - `date-fns`

- **Packages frameworks** : Plus lourds, ils servent de base pour structurer une application. Par exemple :
  - `tailwind`
  - `vite`
  - `nextJS`

---

# 2. Installation

## Pré-requis : installer Node.js

Si ce n’est pas encore fait, commencez par installer Node.js. Cela permettra la gestion des packages et d’autres fonctionnalités.

### Instructions :
- **Windows** : Téléchargez et installez Node.js depuis [le site officiel](https://nodejs.org/en/download/prebuilt-installer).
- **Mac** : Utilisez les commandes disponibles sur [la page dédiée](https://nodejs.org/en/download/package-manager).

---

# 3. Initialisation d’un nouveau projet

Pour l'exemple, nous allons construire un projet `vite` en Vanilla JS.

## Étapes :

### 1. Vérification de l'installation de Node.js
Dans VS Code, ouvrez le terminal et tapez la commande suivante :
```bash
node -v
```
**Réponse attendue :** `v18.20.5`

### Création d'un projet Vite.js

Nous allons nous rendre sur la page officielle de Vite.js, puis cliquer sur **Get Started**. Je vous invite à lire la documentation pour en comprendre les détails. Pour l'instant, nous allons suivre une méthode simple. 

Nous pouvons installer Vite avec une commande `npm`. Voici les étapes à suivre :

---

#### Étape 1 : Créer un nouveau projet

Tapez la commande suivante dans votre terminal : 

```bash
npm create vite@latest
```

- Cela signifie que nous créons un **nouveau projet Vite**. Le suffixe `@latest` garantit que nous utilisons la **dernière version disponible**.
- L'invite de commande demandera si elle peut installer la dernière version.  
  - **On tape :** `y`

---

### Paramètres de configuration du projet

Après cette étape, plusieurs paramètres seront demandés. Voici les plus importants :

1. **Nom du projet**  
   - **Exemple :** `23-exercice`  
   - Si le dossier existe déjà, trois propositions vous seront faites. À vous de choisir la bonne.

2. **Nom du package**  
   - Laissez la valeur par défaut en appuyant simplement sur **Entrée**.

3. **Sélectionner un framework**  
   - Utilisez les flèches **haut/bas** pour choisir la technologie souhaitée.  
   - Sélectionnez **Vanilla** pour ce cas, ce qui installera les packages liés.

4. **Choisir un langage**  
   - Sélectionnez **JavaScript**.

---

### Accéder au projet

Une fois le projet créé, déplacez-vous dans le dossier correspondant : 

```bash
cd 23-exercice
```

# Structure d'un projet avec Vite et TailwindCSS

Regardons de plus près dans le dossier sur VS Code.

## Organisation des dossiers

Nous avons deux dossiers : 

- **Public** : souvent utilisé pour les images et les icônes.
- **Src** : c'est ici que nous aurons :
  - Notre point d’entrée de l’application avec le fichier `main.js`.
  - Le point d’entrée de notre CSS avec le fichier `style.css`.

Le reste des fichiers est sans importance.

## Fichiers dans la racine du projet

- **`.gitignore`** : très important, il permet, lors d’un projet utilisant Git, de protéger celui-ci en ignorant les fichiers et dossiers inutiles lors d’un `push`.
- **`index.html`** : notre bon vieux fichier de base.
- **`package.json`** :
  - Contient au début des informations sur le projet.
  - Contient une clé `scripts` :
    - Elle est très importante car elle permet de lancer l’application via des commandes dans la console.
    - Vous pouvez également y ajouter des scripts personnalisés pour vous faciliter la vie.
  - Liste tous les packages nécessaires à votre application.

## Installation de TailwindCSS

### Étapes à suivre

1. Vérifiez que vous êtes dans le bon dossier : `23-exercice`.
2. Rendez-vous sur le site officiel de TailwindCSS.
3. Suivez les étapes dans **Get Started** > **Framework Guides** > **Vite**.
4. À partir du point 2 des instructions :
   - Exécutez : `npm install -D tailwindcss postcss autoprefixer`.
   - Ensuite : `npx tailwindcss init -p`.

### Résultats de l’installation

Dans VS Code, de nouveaux fichiers et un nouveau dossier seront ajoutés :

- **`node_modules`** : contient tous les packages installés mentionnés dans le `package.json`.
  - ⚠️ **Ne jamais modifier manuellement ce dossier** sous peine de casser l’application.
- **`postcss.config.js`** : on peut l’ignorer.
- **`tailwind.config.js`** :
  - Modifiez ce fichier en suivant les instructions du point 3 sur le site.
- **`style.css`** :
  - Copiez le contenu des instructions du point 4. (⚠️ Bien que les instructions mentionnent `index.css`, il s'agit de `style.css` dans ce projet.)

## Finalisation de l'installation et lancement de l'application

Maintenant, retournons dans le terminal et terminons l'installation avec les commandes suivantes :

1. Exécutez `npm install` pour installer les packages manquants.
2. Lancez l'application avec `npm run dev`.

Cela lancera votre application et vous invitera à ouvrir votre navigateur à l'adresse mentionnée sous **local** :
- **Sous Windows** : `Ctrl + Click gauche`
- **Sous Mac** : `Cmd + Click gauche`

Si vous voyez le message **"Hello Vite"**, cela signifie que votre projet est fonctionnel !

## Modification du projet

### Arrêt du projet

1. Pour arrêter votre projet, retournez dans la console et appuyez sur `Ctrl + C` (Windows ou Mac).

### Modifications dans VS Code

1. Ouvrez votre projet dans **VS Code**.
2. Dans le dossier `src`, supprimez les fichiers inutiles (`counter` et `javascript`).
3. Créez deux nouveaux dossiers : `js` et `css`.
4. Déplacez `main.js` dans le dossier `js` et `style.css` dans le dossier `css`.
5. Renommez ensuite le dossier `src` en `assets`.

### Modification de `index.html`

1. Ouvrez `index.html` et dans le `<head>`, ajoutez les lignes suivantes :

    ```html
    <link rel="stylesheet" href="./assets/css/style.css" />
    <script src="./assets/js/main.js" type="module" defer></script>
    ```

2. Supprimez le script et la div dans le `<body>`.

### Modifications dans `main.js` et `style.css`

1. Dans `main.js`, supprimez tout le contenu et remplacez-le par :

    ```javascript
    const body = document.querySelector('body');
    body.innerHTML = '<h1 class="bg-pink-600">My new vite and Tailwind project!</h1>';
    ```

2. Dans `style.css`, supprimez tout sauf les trois premières lignes.

### Modification dans `tailwind.config.js`

1. Ouvrez `tailwind.config.js` et remplacez `src` par `assets`.

### Relance du projet

1. Retournez dans le terminal et relancez le projet avec :

    ```bash
    npm run dev
    ```

Voilà, votre projet est maintenant modifié selon vos envies !

si vous voulez reutilisez a loisir ce projet vous pouvez soit l'envoyer sur votre git soit copier/coller
si vous le faite via git a chaque foi que vous allez le cloner vous devrez avant de lancer votre project faire

```bash
npm install
```

Je vous invite a installer eslint qui permet de voir les erreurs lint dans votre code.


