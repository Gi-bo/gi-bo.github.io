app = {
    types:{
        'x': 'empty',
        'o': 'mine',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four'
    },


    init: function() {
        let caseList;

//on transforme la première ligne de ground1 en array

        for (
            let groundIndex = 0;
            groundIndex < ground1.length;
            groundIndex++
        )
        {
            let groundRow = ground1[groundIndex];
            console.log (groundRow);

            let caseList = Array.from(groundRow);
            console.log (caseList);
        

            //on attribue une classe à chaque case (caseUnit) en fonction de ground1
        for (
            let caseIndex = 0;
            caseIndex < caseList.length;
            caseIndex++
        )
        {
            let caseUnit = caseList[caseIndex];
            console.log (caseUnit);

            let caseClass = app.types[caseUnit];
            console.log (caseIndex, caseUnit, caseClass);

            // on créé l'élément du DOM caseElement
            let caseElement = document.createElement('button');
            caseElement.classList.add(caseClass);
            caseElement.classList.add('col-1');
            
            //on sélectionne l'élément #row1 pour y mettre l'élément caseElement
            rowElement = document.querySelector('.row');
            rowElement.appendChild(caseElement);
            caseElement.addEventListener('click', app.addNewClass);
            
        }
    }

},

addNewClass: function(event){
    //si la case cliquée a la classe 'empty'...
    if (event.currentTarget.className == 'empty col-1'){
    //alors on lui ajoute la classe 'clickedEmpty' et on retire l'écouteur
        console.log('ouf');
        event.currentTarget.removeEventListener('click', app.addNewClass)
        event.currentTarget.classList.add('clickedEmpty');
    
    }else if (event.currentTarget.className == 'one col-1'){
            //alors on lui ajoute la classe 'clickedEmpty' et on retire l'écouteur
                console.log('ouf');
                event.currentTarget.removeEventListener('click', app.addNewClass);
                (event.currentTarget).innerHTML = '1';
                event.currentTarget.classList.add('clickedEmpty');
        
    }else if (event.currentTarget.className == 'two col-1'){
        //alors on lui ajoute la classe 'clickedEmpty' et on retire l'écouteur
            console.log('ouf');
            event.currentTarget.removeEventListener('click', app.addNewClass);
            (event.currentTarget).innerHTML = '2';
            event.currentTarget.classList.add('clickedEmpty');
    
    }else if (event.currentTarget.className == 'three col-1'){
        //alors on lui ajoute la classe 'clickedEmpty' et on retire l'écouteur
            console.log('ouf');
            event.currentTarget.removeEventListener('click', app.addNewClass);
            (event.currentTarget).innerHTML = '3';
            event.currentTarget.classList.add('clickedEmpty');

    }else if (event.currentTarget.className == 'four col-1'){
        //alors on lui ajoute la classe 'clickedEmpty' et on retire l'écouteur
            console.log('ouf');
            event.currentTarget.removeEventListener('click', app.addNewClass);
            (event.currentTarget).innerHTML = '4';
            event.currentTarget.classList.add('clickedEmpty');

    //si la case cliquée a la classe 'mine'...
    } else if (event.currentTarget.className == 'mine col-1'){
    //alors on lui ajoute la classe 'clickedMine' et on lui retire l'écouteur et on ouvre un pop-up avec le message "perdu !!"
        console.log('perdu');
        event.currentTarget.removeEventListener('click', app.addNewClass)
        event.currentTarget.classList.add('clickedMine');

        window.alert('PERDU !!');
    }
}





}

let ground1=
[
    'x112o112o1xx',
    '12o3221o311x',
    'o423o1112o21',
    'o4o2221x113o',
    '2o211o11112o',
    '222x1111o111',
    '2o421xx111xx',
    '2ooo211111xx',
    '34422o11o111',
    'oo1x1122211o',
    '442xx12o1x11',
    'oo1xx1o21xxx'
];

app.init();