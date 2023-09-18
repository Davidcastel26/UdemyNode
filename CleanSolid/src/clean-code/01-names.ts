(()=>{

    //Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flaggedToDelete: false },
        { id: 2, flaggedToDelete: false },
        { id: 3, flaggedToDelete: true },
        { id: 4, flaggedToDelete: false },
        { id: 5, flaggedToDelete: false },
        { id: 7, flaggedToDelete: true },
    ];

    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flaggedToDelete );

    class UserFiles { };
    class UserMixin { };
    class UserImplementation { };
    interface User { };

    //Mejor
    class User{};
    interface User{};

    const birthOfDay = new Date();

    const day: number = 23;

    const numDirectory: number = 33;

    const name: string = 'David';

    const lastName: string = 'Larios';

    const LastModificationDay: number = 12;

    const maxClassPerStudent: number = 6;



})();