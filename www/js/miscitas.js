
angular.module('miscitas', [])



.service('Miscitas', [function(){
    
    var citas = [
    {
        'especialidad':'cardiologia',
        'especialista':'Dr Roberto Carlos',
        'hora':'9:30',
        'dia':'16 de enero',
        '$id':1
    },
    {
        'especialidad':'gastroenterologia',
        'especialista':'Dr Jose Alberto',
        'hora':'9:30',
        'dia':'20 de enero',
        '$id':2
    },
    {
        'especialidad':'Otorrino',
        'especialista':'Dra Lindo Mira',
        'hora':'4:30',
        'dia':'21 de enero',
        '$id':3
    },
    {
        'especialidad':'cardiologia',
        'especialista':'Dr Roberto Carlos',
        'hora':'9:30',
        'dia':'22 de enero',
        '$id':4
    },
    {
        'especialidad':'Podologo',
        'especialista':'Dr Pez Uñento',
        'hora':'12:30',
        'dia':'23 de enero',
        '$id':5
    }
    
    ];
    
    var miscitas = {
        'citas': citas
    }
    return miscitas;

}]);
