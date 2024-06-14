// preguntas.js

const preguntas = [
    {
        numero: "1. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "El objetivo de un sistema de archivos es el gestionar los ficheros almacenados generalmente en un dispositivo físico como un disco duro, unidad SSD, pendrive, etc.",
            "Los sistemas de archivos son responsables de mantener la integridad de la información.",
            "El RAID por hardware es más eficiente que el RAID por software pero genera más carga de trabajo para el microprocesador.",
            "Striping en sistemas RAID se puede traducir como entrelazado."
        ],
        opcCorrecta: 2 // Indice la respuesta correcta
    },
    {
        numero: "2. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "La caché generalmente utiliza tecnología SRAM(static RAM) la cual es más rápida que la tecnología utilizada en la memoria principal.",
            "RAID 5 tiene una escritura más lenta que RAID 0 o 1, dado que el sistema tiene que calcular la paridad para cada dato que escribe.",
            "FAT32 permite trabajar con archivos de hasta 4 GB.",
            "Windows ofrece un gestor de volúmenes lógicos llamado Logical Volume Manager (LVM)."
        ],
        opcCorrecta: 1 // Indice la respuesta correcta
    },
    {
        numero: "3. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "El RAID por software es el sistema más económico, pero el menos eficiente.",
            "Los backups generalmente se programan por la noche o en el momento que el servicio no tiene demanda.",
            "En los cluster, ante la caída de uno de los miembros del equipo, los demás equipos del cluster se hacen cargo de las tareas del mismo.",
            "Un plan de recuperación del servicio forma parte del plan de contingencias de una empresa v.determina las acciones y medidas a realizar antes de que la amenaza se materialice."
        ],
        opcCorrecta: 1 // Indice la respuesta correcta
    },
    {
        numero: "4. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "La salvaguarda lógica consiste en la aplicación de barreras y procedimientos que resguarden el acceso a los datos y solo se permite acceder a ellos a las personas autorizadas para hacerlo.",
            "Unicode es una ampliación del código ASCII que puede utilizar hasta 4 bytes (32 bits) para representar cada carácter.",
            "HFS+ (Hierarchical File System Plus) es el sistema de archivos empleado por los sistemas operativos de Apple.",
            "En el backup incremental se copia solo los archivos que tienen el atributo de modificado activado. Una vez realizada la copia de seguridad ese atributo se desactiva."
        ],
        opcCorrecta: 1 // Indice la respuesta correcta
    },
    {
        numero: "5. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "La alta disponibilidad es una disposición de varios equipos los cuales realizan una tarea determinada compartiendo esfuerzos.",
            "La memoria caché es una memoria intermedia que se coloca entre un elemento rápido y otro más lento del equipo.",
            "En RAID 1 por cada disco presente en el sistema se tiene otro con la misma información de tal manera que, cuando un disco falla, el sistema puede seguir funcionando dado que la información permanece duplicada.",
            "NAS es muy útil para proporcionar el almacenamiento centralizado a ordenadores clientes en entornos con grandes cantidades de datos."
        ],
        opcCorrecta: 0 // Indice la respuesta correcta
    },
    {
        numero: "6. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "La pérdida o error en un disco de RAID 0 no implica la pérdida de la información en el sistema.",
            "Los registros del procesador son memorias muy veloces pero con poca capacidad.",
            "La memoria caché de los discos duros utiliza:la misma tecnología que en la memoria RAM tradicional.",
            "Los servidores SAN (Storage Area Network) son servidores de almacenamiento que dan servicio a través de una red y emplean acceso a través de fibra óptica no admitiendo enrutamientos."
        ],
        opcCorrecta: 0 // Indice la respuesta correcta
    },
    {
        numero: "7. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "Las particiones primarias suelen utilizarse para instalar los sistemas operativos.",
            "El servidor NAS (Network Attached Storage) es un tipo de servidor de almacenamiento que da servicio a través de una red mediante el uso de protocolos estándar de comunicaciones como TCP/IP.",
            "Una clonación de una partición es capaz también de clonar el sector de arranque permitiendo así duplicar equipos.",
            "Un disco se compone de un sector de arranque,una serie de particiones y opcionalmente espacio sin particionar."
        ],
        opcCorrecta: 2 // Indice la respuesta correcta
    },
    {
        numero: "8. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "LVM fue escrito originalmente por Heinz Mauelshagen en 1998.",
            "El término fiabilidad se refiere a la probabilidad de que un sistema funcione normalmente durante un período de tiempo dado.",
            "Las políticas de respaldo o salvaguarda se basan fundamentalmente en los sistemas RAID.",
            "Cuando hay un fallo en el sistema se pierde la información existente entre el último backup y el momento del fallo."
        ],
        opcCorrecta: 2 // Indice la respuesta correcta
    },
    {
        numero: "9. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "Si un equipo no tiene ninguna partición activa, al arrancar dará un fallo.",
            "Los sistemas SAN admiten grandes distancias de hasta 10 Km entre equipos.",
            "Se pueden clonar tanto los discos como las particiones.",
            "RAID previene sobre un borrado accidental de los datos, una corrupción de ficheros u otra desgracia parecida."
        ],
        opcCorrecta: 3 // Indice la respuesta correcta
    },
    {
        numero: "10. Pregunta",
        pregunta: "Elige la respuesta falsa:",
        opciones: [
            "RAID 5 es el más utilizado al ofrecer un mejor equilibrio coste-rendimiento-protección.",
            "Mientras que los grid son conjuntos de servidores independientes unos de otros, los cluster suelen ser grupos de servidores con gran dependencia unos de otros.",
            "Recovery time objective es la duración de tiempo que puede sufrir un sistema tras un desastre sin estar operativo antes de ser restablecido.",
            "La paridad es una información adicional que se calcula después de escribir los datos en disco."
        ],
        opcCorrecta: 3 // Indice la respuesta correcta
    }
]