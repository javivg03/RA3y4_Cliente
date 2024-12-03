// Lista completa de métodos de Arrays con descripción y lógica
const examples = [
    // Método 1
    {
        method: "Array.prototype.at()",
        description: "Accede al elemento en una posición específica (soporta índices negativos).",
        example: `let array = [10, 20, 30, 40];
let result = array.at(-1); // Devuelve 40`,
        execute: () => {
            let array = [10, 20, 30, 40];
            return array.at(-1); // Liskov Substitution: Devuelve un valor según la posición solicitada sin alterar la funcionalidad
        }
    },
    // Método 2
    {
        method: "Array.prototype.concat()",
        description: "Combina dos o más arrays.",
        example: `let array1 = [10, 20];
let array2 = [30, 40];
let result = array1.concat(array2);`,
        execute: () => {
            let array1 = [10, 20];
            let array2 = [30, 40];
            return array1.concat(array2); // Single Responsibility: La función tiene solo una responsabilidad: concatenar arrays.
        }
    },
    // Método 3
    {
        method: "Array.prototype.copyWithin()",
        description: "Copia una parte del array dentro del mismo array.",
        example: `let array = [10, 20, 30, 40];
array.copyWithin(0, 2);`,
        execute: () => {
            let array = [10, 20, 30, 40];
            return array.copyWithin(0, 2); // Open/Closed: El método se puede extender para modificar el array, pero no modifica el diseño de la clase Array.
        }
    },
    // Método 4
    {
        method: "Array.prototype.entries()",
        description: "Crea un iterador con pares índice-valor.",
        example: `let array = ['a', 'b', 'c'];
let iterator = array.entries();`,
        execute: () => {
            let array = ['a', 'b', 'c'];
            return Array.from(array.entries()); // Liskov Substitution: Funciona igual para cualquier tipo de array.
        }
    },
    // Método 5
    {
        method: "Array.prototype.every()",
        description: "Verifica si todos los elementos cumplen una condición.",
        example: `let array = [10, 20, 30];
let result = array.every(num => num > 5);`,
        execute: () => {
            let array = [10, 20, 30];
            return array.every(num => num > 5); // Interface Segregation: Funciona de acuerdo a la interfaz de "arrays", no a otras funciones adicionales.
        }
    },
    // Método 6
    {
        method: "Array.prototype.fill()",
        description: "Rellena el array con un valor.",
        example: `let array = [1, 2, 3];
array.fill(0);`,
        execute: () => {
            let array = [1, 2, 3];
            return array.fill(0); // Single Responsibility: Su única tarea es llenar el array con el valor proporcionado.
        }
    },
    // Método 7
    {
        method: "Array.prototype.filter()",
        description: "Crea un nuevo array con los elementos que cumplen una condición.",
        example: `let array = [10, 20, 30, 40];
let result = array.filter(num => num > 20);`,
        execute: () => {
            let array = [10, 20, 30, 40];
            return array.filter(num => num > 20); // Open/Closed: Permite modificar el filtro sin cambiar la funcionalidad básica.
        }
    },
    // Método 8
    {
        method: "Array.prototype.find()",
        description: "Encuentra el primer elemento que cumple una condición.",
        example: `let array = [10, 20, 30];
let result = array.find(num => num > 15);`,
        execute: () => {
            let array = [10, 20, 30];
            return array.find(num => num > 15); // Liskov Substitution: La función sigue funcionando correctamente para cualquier tipo de valor en el array.
        }
    },
    // Método 9
    {
        method: "Array.prototype.findIndex()",
        description: "Encuentra el índice del primer elemento que cumple una condición.",
        example: `let array = [10, 20, 30];
let result = array.findIndex(num => num > 15);`,
        execute: () => {
            let array = [10, 20, 30];
            return array.findIndex(num => num > 15); // Interface Segregation: Cumple su función de encontrar el índice sin depender de otras interfaces.
        }
    },
    // Método 10
    {
        method: "Array.prototype.flat()",
        description: "Aplana un array hasta una profundidad especificada.",
        example: `let array = [1, [2, [3, 4]]];
let result = array.flat(2);`,
        execute: () => {
            let array = [1, [2, [3, 4]]];
            return array.flat(2); // Dependency Inversion: La funcionalidad se enfoca en la estructura del array, no depende de implementaciones externas.
        }
    },
    // Método 11
    {
        method: "Array.prototype.flatMap()",
        description: "Mapea cada elemento y aplana el resultado.",
        example: `let array = [1, 2, 3];
let result = array.flatMap(x => [x, x * 2]);`,
        execute: () => {
            let array = [1, 2, 3];
            return array.flatMap(x => [x, x * 2]); // Single Responsibility: Mapea y aplana el resultado en un solo paso.
        }
    },
    // Método 12
    {
        method: "Array.prototype.forEach()",
        description: "Ejecuta una función para cada elemento del array.",
        example: `let array = [10, 20, 30];
array.forEach(num => console.log(num));`,
        execute: () => {
            let array = [10, 20, 30];
            let result = [];
            array.forEach(num => result.push(num)); // Single Responsibility: Recorre el array sin alterar otras partes del código.
            return result;
        }
    },
    // Método 13
    {
        method: "Array.prototype.includes()",
        description: "Comprueba si un array incluye un valor específico.",
        example: `let array = [10, 20, 30];
let result = array.includes(20); // true`,
        execute: () => {
            let array = [10, 20, 30];
            return array.includes(20); // Liskov Substitution: Funciona igual independientemente del tipo de elementos en el array.
        }
    },
    // Método 14
    {
        method: "Array.prototype.indexOf()",
        description: "Devuelve el índice de la primera aparición de un valor.",
        example: `let array = [10, 20, 30];
let result = array.indexOf(20); // 1`,
        execute: () => {
            let array = [10, 20, 30];
            return array.indexOf(20); // Interface Segregation: No requiere métodos adicionales para devolver el índice de un valor.
        }
    },
    // Método 15
    {
        method: "Array.prototype.isArray()",
        description: "Determina si un valor es un array.",
        example: `let result = Array.isArray([10, 20, 30]); // true`,
        execute: () => {
            return Array.isArray([10, 20, 30]);
        }
    },
    // Método 16
    {
        method: "Array.prototype.join()",
        description: "Une todos los elementos de un array en un string.",
        example: `let array = ['a', 'b', 'c'];
let result = array.join('-'); // "a-b-c"`,
        execute: () => {
            let array = ['a', 'b', 'c'];
            return array.join('-');
        }
    },
    // Método 17
    {
        method: "Array.prototype.keys()",
        description: "Crea un iterador con las claves del array.",
        example: `let array = ['a', 'b', 'c'];
let iterator = array.keys();`,
        execute: () => {
            let array = ['a', 'b', 'c'];
            return Array.from(array.keys());
        }
    },
    // Método 18
    {
        method: "Array.prototype.lastIndexOf()",
        description: "Devuelve el índice de la última aparición de un valor.",
        example: `let array = [10, 20, 30, 20];
let result = array.lastIndexOf(20); // 3`,
        execute: () => {
            let array = [10, 20, 30, 20];
            return array.lastIndexOf(20);
        }
    },
    // Método 19
    {
        method: "Array.prototype.map()",
        description: "Crea un nuevo array aplicando una función a cada elemento.",
        example: `let array = [10, 20, 30];
let result = array.map(num => num * 2);`,
        execute: () => {
            let array = [10, 20, 30];
            return array.map(num => num * 2);
        }
    },
    // Método 20
    {
        method: "Array.prototype.pop()",
        description: "Elimina y devuelve el último elemento del array.",
        example: `let array = [10, 20, 30];
let result = array.pop(); // 30`,
        execute: () => {
            let array = [10, 20, 30];
            return array.pop();
        }
    },
    // Método 21
    {
        method: "Array.prototype.push()",
        description: "Añade uno o más elementos al final del array.",
        example: `let array = [10, 20];
array.push(30); // [10, 20, 30]`,
        execute: () => {
            let array = [10, 20];
            array.push(30);
            return array;
        }
    },
    // Método 22
    {
        method: "Array.prototype.reduce()",
        description: "Reduce el array a un único valor aplicando una función acumulativa.",
        example: `let array = [1, 2, 3];
let result = array.reduce((sum, num) => sum + num, 0); // 6`,
        execute: () => {
            let array = [1, 2, 3];
            return array.reduce((sum, num) => sum + num, 0);
        }
    },
    // Método 23
    {
        method: "Array.prototype.reduceRight()",
        description: "Aplica una función acumulativa, pero recorriendo el array de derecha a izquierda.",
        example: `let array = [1, 2, 3];
let result = array.reduceRight((sum, num) => sum + num, 0); // 6`,
        execute: () => {
            let array = [1, 2, 3];
            return array.reduceRight((sum, num) => sum + num, 0);
        }
    },
    // Método 24
    {
        method: "Array.prototype.reverse()",
        description: "Invierte el orden de los elementos del array.",
        example: `let array = [1, 2, 3];
array.reverse(); // [3, 2, 1]`,
        execute: () => {
            let array = [1, 2, 3];
            return array.reverse();
        }
    },
    // Método 25
    {
        method: "Array.prototype.shift()",
        description: "Elimina y devuelve el primer elemento del array.",
        example: `let array = [10, 20, 30];
let result = array.shift(); // 10`,
        execute: () => {
            let array = [10, 20, 30];
            return array.shift();
        }
    },
    // Método 26
    {
        method: "Array.prototype.slice()",
        description: "Devuelve una copia superficial de una porción del array.",
        example: `let array = [10, 20, 30, 40];
let result = array.slice(1, 3); // [20, 30]`,
        execute: () => {
            let array = [10, 20, 30, 40];
            return array.slice(1, 3);
        }
    },
    // Método 27
    {
        method: "Array.prototype.some()",
        description: "Verifica si al menos un elemento cumple una condición.",
        example: `let array = [10, 20, 30];
let result = array.some(num => num > 25); // true`,
        execute: () => {
            let array = [10, 20, 30];
            return array.some(num => num > 25);
        }
    },
    // Método 28
    {
        method: "Array.prototype.sort()",
        description: "Ordena los elementos de un array en su lugar.",
        example: `let array = [30, 10, 20];
array.sort(); // [10, 20, 30]`,
        execute: () => {
            let array = [30, 10, 20];
            return array.sort();
        }
    },
    // Método 29
    {
        method: "Array.prototype.splice()",
        description: "Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos.",
        example: `let array = [10, 20, 30, 40];
array.splice(2, 1, 25); // [10, 20, 25, 40]`,
        execute: () => {
            let array = [10, 20, 30, 40];
            array.splice(2, 1, 25);
            return array;
        }
    },
    // Método 30
    {
        method: "Array.prototype.toLocaleString()",
        description: "Devuelve una cadena representando los elementos del array, formateados según la configuración regional.",
        example: `let array = [10, 20, 30];
let result = array.toLocaleString(); // "10,20,30"`,
        execute: () => {
            let array = [10, 20, 30];
            return array.toLocaleString();
        }
    },
    // Método 31
    {
        method: "Array.prototype.toString()",
        description: "Devuelve una cadena representando los elementos del array.",
        example: `let array = [10, 20, 30];
let result = array.toString(); // "10,20,30"`,
        execute: () => {
            let array = [10, 20, 30];
            return array.toString();
        }
    },
    // Método 32
    {
        method: "Array.prototype.unshift()",
        description: "Añade uno o más elementos al principio del array.",
        example: `let array = [20, 30];
array.unshift(10); // [10, 20, 30]`,
        execute: () => {
            let array = [20, 30];
            array.unshift(10);
            return array;
        }
    },
    // Método 33
    {
        method: "Array.prototype.values()",
        description: "Crea un iterador con los valores del array.",
        example: `let array = ['a', 'b', 'c'];
let iterator = array.values();`,
        execute: () => {
            let array = ['a', 'b', 'c'];
            return Array.from(array.values());
        }
    },
    // Método 34
    {
        method: "Array.from()",
        description: "Crea una nueva instancia de un array a partir de un objeto iterable.",
        example: `let string = "hello";
let array = Array.from(string); // ['h', 'e', 'l', 'l', 'o']`,
        execute: () => {
            let string = "hello";
            return Array.from(string);
        }
    },
    // Método 35
    {
        method: "Array.isArray()",
        description: "Verifica si un objeto es un array.",
        example: `let result = Array.isArray([10, 20, 30]); // true`,
        execute: () => {
            return Array.isArray([10, 20, 30]);
        }
    },
    // Método 36
    {
        method: "Array.of()",
        description: "Crea una nueva instancia de un array con los elementos pasados como argumentos.",
        example: `let array = Array.of(10, 20, 30); // [10, 20, 30]`,
        execute: () => {
            return Array.of(10, 20, 30);
        }
    },
    // Método 37
    {
        method: "Array.prototype.flat()",
        description: "Crea un nuevo array con todos los elementos de sub-array concatenados.",
        example: `let array = [1, [2, 3], [4, 5]];
let result = array.flat(); // [1, 2, 3, 4, 5]`,
        execute: () => {
            let array = [1, [2, 3], [4, 5]];
            return array.flat();
        }
    },
    // Método 38
    {
        method: "Array.prototype.flatMap()",
        description: "Primero mapea cada elemento usando una función, luego aplana el resultado.",
        example: `let array = [1, 2, 3];
let result = array.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]`,
        execute: () => {
            let array = [1, 2, 3];
            return array.flatMap(x => [x, x * 2]);
        }
    },
    // Método 39
    {
        method: "Array.prototype.from()",
        description: "Crea una nueva instancia de un array a partir de un objeto iterable, como un conjunto.",
        example: `let set = new Set([10, 20, 30]);
let array = Array.from(set); // [10, 20, 30]`,
        execute: () => {
            let set = new Set([10, 20, 30]);
            return Array.from(set);
        }
    }
];

// Función para generar contenido dinámico
const generateExamples = () => {
    const examplesContainer = document.getElementById('examples');

    examples.forEach((example, index) => {
        const exampleDiv = document.createElement('div');
        exampleDiv.className = 'method-section';

        exampleDiv.innerHTML = `
            <div class="method-header">
                <h5>${example.method}</h5>
            </div>
            <p>${example.description}</p>
            <pre>${example.example}</pre>
            <button class="btn btn-primary" id="execute-${index}">Ejecutar</button>
            <p class="mt-2"><strong>Resultado:</strong> <span id="result-${index}"></span></p>
        `;

        examplesContainer.appendChild(exampleDiv);

        document
            .getElementById(`execute-${index}`)
            .addEventListener('click', () => {
                const result = example.execute();
                document.getElementById(`result-${index}`).textContent = JSON.stringify(result);
            });
    });
};

// Ejecutar la función cuando cargue el DOM
document.addEventListener('DOMContentLoaded', generateExamples);