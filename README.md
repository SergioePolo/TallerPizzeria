# TallerPizzeria

Buenas noches profesor Kevin.

Comparto el taller individual de creat un sistema de orden de pizzeria sencillo.

Para que sea más sencillo probarlo lo publique en GithubPages en el siguiente enclace https://sergioepolo.github.io/TallerPizzeria/

Yo me comunique ayer con la señorita Stefany comentandole que no podría atender la clase y me comentó que me compartirían otro taller el día de hoy.

Según entendí tenía la posiblidad de enviarlo antes de media noche, pido disculpas si no cumpli la hora y aunque no sea calificado pido su colaboración y en el caso de considerar mejorar para el código hacermelas saber.

Espero que tenga un buen fin se semana.

Cordialmente,
Sergio Enrique Polo Santanilla

## Comentarios del instructor - Kevin Pérez

Buen trabajo en general. El reto fue cumplido satisfactoriamente.

El HTML lo veo muy bien hecho. Definiste elementos con sus respectivos atributos y semánticamente bien organizados. No más comentarios de este archivo, bien logrado ahí.

Hiciste CSS, cosa que agrega valor al darle estilos a la página. Implementaste flexbox, seleccionaste varios elementos y seguiste una guía de colores. Todos esos elementos son buenas prácticas.

Respecto al JS, implementaste un arreglo de órdenes, abordaje que me parece bien propuesto y creaste elementos con `createElement`, cosas que me parecen muy bien hechas. En este mismo archivo veo algunos puntos de mejora:

1. Declaraste varias variables con `var`, cuando la recomendación es usar `let`. Asimismo, estás declarando variables que no van a ser **reasignadas**, o sea, que pudieron haber sido declaradas con `const`.
2. El objeto `order` lo reasignas, en vez de alterar sus propiedades, esto último siendo una mejor práctica. Algo así pudo haber sido un mejor abordaje de la construcción del objeto pedido: 
```
const order = { name: '', value: 0 };
order.name = inputName;
order.value = Number(inputValue);
```
3. Cada vez que se inserta un nuevo pedido, borras todos los anteriores, y vuelves a crearlos todos. Esto puede incurrir en problemas de performance si se insertan muchos pedidos. Asumo que implementas esto para poder mostrar el número de orden. Un mejor enfoque para hacer eso puede ser un contador fuera de la función, muy similar a como tienes el arreglo fuera de la misma.
4. La aplicación permite crear pedidos sin información

Algo a resaltar enormemente es que desplegaste la aplicación en GitHub Pages, cosa que agrega muchísimo valor.

Sergio, hiciste un excelentísimo trabajo. Los puntos de mejora, no le sustraen nada al hecho de que **la aplicación cumple con los requisitos solicitados satisfactoriamente**. Felicitaciones por el gran trabajo que hiciste.

Por último, aprecio muchísimo el hecho de que hayas caminado la milla extra entregando el trabajo aunque no fuera dentro del horario solicitado. El hecho de que lo entregaras y solicitaras una revisión muestra tu disposición de cumplir de cualquier manera algo que se te solicita, y eso lo valoro bastante. ¡Buen trabajo, Sergio!