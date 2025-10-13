# Juego de Triqui usando Next.js
## Jose Luis Jiménez Bayona - 1152384

**1. ¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para
interfaces web?**  
La ventaja de trabajar con React en lugar de solo usar JavaScript puro es que React permite elaborar componentes, los cuales permiten elaborar funciones que devuelven código JSX, por lo que solo se realizan componentes generales y estos se reutilizan en nuestra aplicación web, promoviendo la modularidad y evitando repetir código.  

**2. ¿Qué beneficios ofrece Next.js al trabajar sobre React?**  
Permite que cada carpeta sea una ruta diferente, mejora el rendimiento al renderizar en el servidor, dispone de una serie de herramientas listas para usar y permite dividir una página web en server components y client components.  

**3. ¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?**  
Es un sistema de enrutamiento dentro de la carpeta `/app` que permite organizar rutas. Su importancia está en que introduce una forma más moderna de trabajar con las rutas, ya que permite usar conceptos como layouts compartidos, que ayudan a evitar repetir código en diferentes páginas, y los React Server Components, que mejoran el rendimiento al ejecutar parte del código en el servidor en lugar del cliente.  

**4. ¿Qué diferencia hay entre client components y server components en Next.js?**  
* En Next.js los server components se procesan en el servidor antes de enviar el resultado al navegador. Esto hace que carguen más rápido, consuman menos recursos del cliente y sean ideales para tareas como obtener datos de una base de datos o mostrar contenido que no necesita interacción directa del usuario.
* Por otro lado, los client components se ejecutan en el navegador del usuario. Son necesarios cuando hay interactividad, como botones, formularios o menús dinámicos, porque ahí sí se requiere JavaScript en el cliente para que respondan a eventos.  

**5. ¿Por qué crees que en desarrollo profesional se usan repositorios públicos o
privados en GitHub en lugar de solo trabajar en carpetas locales?**  
En desarrollo profesional se usan repositorios en lugar de carpetas locales para poder llevar un control de las versiones de nuestro código y además, poder compartir nuestro trabajo con otras personas o trabajar en equipo. Los repositorios públicos se utilizan para código libre que cualquiera pueda ver, usar y modificar, por otro lado, los repositorios privados se usan en desarrollo de aplicaciones donde se quiere que solo una o un grupo de personas tenga acceso al código y pueda modificarlo.  

