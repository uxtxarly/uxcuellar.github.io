---
layout: post
title: Plugins en textpattern
tags:
- micrographic
- textpattern
---
Al igual que ocurre con MT o WP, la mejor forma de adaptar Textpattern a las necesidades particulares de cada uno es mediante el uso de plugins, pequeñas extensiones del CMS que añaden funcionalidades extra.

El lugar donde se deben buscar los plugins para TXP es textpattern.org. Allí encontraremos prácticamente de todo, y podremos dejar comentarios en caso de que surjan dudas. Una vez descargado el plugin sólo queda instalarlo, y ese proceso en TXP no puede ser más sencillo. Los plugins vienen en forma de archivos de texto que abriremos para copiar todo su contenido. Lo siguiente será entrar en la sección de plugins de TXP (sección admin / plugins), pegar el texto en la casilla “instalar plugins” y hacer clic en el botón “subir”. En la siguiente pantalla se nos pedirá confirmación, y después volveremos a la pantalla de gestión de plugins donde deberemos comprobar que el plugin está activado. En algunos casos hay que seguir algún paso más, así que conviene leer el “read me” que suele acompañar a cada plugin.

La instalación de plugins no tiene más secretos, así que paso a detallar qué plugins estoy usando ahora mismo en micrographic:

* rss_suparchive, de Rob Sable. Genera un listado de los posts escritos, clasificados cronológicamente o por categorías. Podéis ver el resultado en la sección archivo. Es un plugin muy configurable que permite mostrar esa información de formas muy distintas.
* rss_live_search, de Rob Sable. Una casilla de búsqueda que se diferencia de las convencionales en que te va mostrando los posibles resultados a tu búsqueda mientras escribes, en un listado que se sitúa por debajo de la casilla. Podéis ver este plugin en acción en la sección buscar.
* zem_contact, de Threshold State. Genera un formulario de contacto por correo electrónico, muy útil en las típicas secciones de “contacto” o “colofón”.
* glx_admin_ping, de Johan Nilsson. Se encarga de enviar un ping a los portales de bitácoras más importantes cada vez que publicas un post y de esta forma se consigue aparecer en sus listados de blogs recientemente actualizados.
* mkp_version, de Michael Pate. Muestra la versión de TXP que se tiene instalada en ese momento.
* mem_online_users, de Michael Manfre. Muestra el número de lectores que están accediendo al blog en ese instante.
* glx_gravatar, de Johan Nilsson. Muestra un icono identificativo (gravatar) para cada lector que deja un comentario en el blog.
* mic_technorati_cosmos, de Michele Campeotto. Una de las pocas carencias de TXP es la ausencia de trackback. Esto se puede solucionar mediante el añadido de un plugin (que no he probado) o mediante esta solución alternativa. Este plugin muestra el “technorati cosmos” de cada artículo, es decir, una lista con los blogs que hacen referencia a ese artículo en concreto según el buscador de blogs Technorati. De esta forma, se consigue emular la funcionalidad del trackback simplificando el proceso (todo es automático) y evitando el molesto spam.
* upm_img_popper, de Mary. Facilita la inserción de imágenes en un post mediante una ventana pop-up que permite previsualizar todas las imágenes que hayamos subido al servidor.

Además, estoy probando un plugin bastante útil: vdh_flickr integra tus fotos de flickr dentro de tu blog de una forma bastante elegante, respetando títulos, anotaciones y tags. El resultado es una especie de híbrido entre galería y fotoblog. Podéis ver el resultado aquí
