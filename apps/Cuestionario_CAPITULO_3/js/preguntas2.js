
const preguntas = [
    new Pregunta("1. Pregunta", "Elige la respuesta falsa:", [
        "El objetivo de un sistema de archivos es el gestionar los ficheros almacenados generalmente en un dispositivo físico como un disco duro, unidad SSD, pendrive, etc.",
        "Los sistemas de archivos son responsables de mantener la integridad de la información.",
        "El RAID por hardware es más eficiente que el RAID por software pero genera más carga de trabajo para el microprocesador.",
        "Striping en sistemas RAID se puede traducir como entrelazado."
    ], 2),
    new Pregunta("2. Pregunta", "Elige la respuesta falsa:", [
        "La caché generalmente utiliza tecnología SRAM(static RAM) la cual es más rápida que la tecnología utilizada en la memoria principal.",
        "RAID 5 tiene una escritura más lenta que RAID 0 o 1, dado que el sistema tiene que calcular la paridad para cada dato que escribe.",
        "FAT32 permite trabajar con archivos de hasta 4 GB.",
        "Windows ofrece un gestor de volúmenes lógicos llamado Logical Volume Manager (LVM)."
    ], 1),
    new Pregunta("3. Pregunta","Elige la respuesta falsa:",["El RAID por software es el sistema más económico, pero el menos eficiente.",
    "Los backups generalmente se programan por la noche o en el momento que el servicio no tiene demanda.",
    "En los cluster, ante la caída de uno de los miembros del equipo, los demás equipos del cluster se hacen cargo de las tareas del mismo.",
    "Un plan de recuperación del servicio forma parte del plan de contingencias de una empresa v.determina las acciones y medidas a realizar antes de que la amenaza se materialice."],
    1)
]