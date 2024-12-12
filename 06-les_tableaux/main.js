//nous connaissons déjà les tableaux

let triptyk = ['Sacha', 'Patrick', 'Maxime', 'Gilles', 'Sebastien']

console.log(triptyk[0]) // Sacha

for (let i = 0; i < triptyk.length; i++) {
    console.log(triptyk[i])
}

//nous allons voir les matrices

//exemple de matrice 2d
let matrice = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//recupéré un element de la matrice
console.log(matrice[0][0]) // 1

//parcourir une matrice
console.log('je compte sur mes doigts');

for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
        console.log(`${matrice[i][j]} doigts`)
    }
}
console.log('j ai perdu un doigt');

//exemple de matrice 3d

let matrice3d = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [10,11,12],
        [13,14,15],
        [16,17,18]
    ],
    [
        [19,20,21],
        [22,23,24],
        [25,26,27]
    ]
]

//recupéré un element de la matrice
console.log(matrice3d[0][2][1]) // 8

//parcourir une matrice

console.log('je compte sur mes doigts');

for (let i = 0; i < matrice3d.length; i++) {
    for (let j = 0; j < matrice3d[i].length; j++) {
        for (let k = 0; k < matrice3d[i][j].length; k++) {
            console.log(`${matrice3d[i][j][k]} doigts`)
        }
    }
}

console.log('mon dieu je suis un alien');

//exercice rapide :a partir de la matrice et afficher les phrases suivantes
//Julie mange des chips et Julie boit un coca 
//Paul mange une meringue et Paul boit un jus d'orange

const matrix3D = [
    [
      ["Jean", "Marie", "Paul", "Julie", "Berangère", "Henri"],  // Prénoms
      ["une meringue", "du chocolat", "un tarte", "un gateau a la vanille", "des chips"],  // Friandises
      ["un coca", "un jus d'orange", "de l'eau"],  // Boissons
      ["mange", "boit"]  // Actions
    ]
  ];

    const prenomHomme = matrix3D[0][0][3];
    const prenomFemme = matrix3D[0][0][2];
    const friandiseHomme = matrix3D[0][1][4];
    const boissonHomme = matrix3D[0][2][0];
    const friandiseFemme = matrix3D[0][1][0];
    const boissonFemme = matrix3D[0][2][1];
    const actionManger = matrix3D[0][3][0];
    const actionBoire = matrix3D[0][3][1];

 console.log(`${prenomHomme} ${actionManger} ${friandiseHomme} et ${actionBoire} ${boissonHomme}`);
 console.log(`${prenomFemme} ${actionManger} ${friandiseFemme} et ${actionBoire} ${boissonFemme}`);
