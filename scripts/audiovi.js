
var filme = document.querySelector('.filme');


function transmitir(titulo) {
    switch (titulo) {
        case 'Dia Mau':
            filme.src='Videos/DiaMau.mp4';
            break;
        case 'Dark Calling':
            filme.src='Videos/DarkCalling.mp4';
            break;
        case 'Generico TV':
            filme.src='Videos/GenericoTV.mp4';
            break;
        case 'Casa Assombrada':
            filme.src='Videos/HouseAnimation.mp4';
            break;
        case 'King Quest':
            filme.src='Videos/KingQuest.mp4';
            break;
        case 'La Petite Mort':
            filme.src='Videos/LaPetiteMort.mp4';
            break;
        case 'Lisboa Misteriosa':
            filme.src='Videos/LisboaMisteriosa.mp4';
            break;
        case 'Lisbon Village Festival':
            filme.src='Videos/LisbonVillageFestival.mp4';
            break;
    }
}
;

