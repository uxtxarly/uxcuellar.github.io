---
layout: post
title: El spam en textpattern
tags:
- micrographic
- textpattern
---
Llevo unas semanas de tranquilidad absoluta en lo que se refiere al tema del spam. He pasado del bombardeo diario de spam en WordPress a no recibir ni un solo online-poker desde que migré a Textpattern. Quiere decir eso que los uuarios de Textpattern estamos inmunizados? Pues mucho me temo que no. Supongo que será algo circunstancial y temporal, y que no podré bajar la guardia. Cuando menos me lo espere, volverán a dar la lata…

De todas formas, tenemos las espaldas bien cubiertas. TXP cuenta con un filtro antispam que consta de tres blacklists, tres listas negras con IPs de spammers que se contrastan con las IPs de nuestros lectores, distiguiendo así el spam de los comentarios válidos por la procedencia del remitente. El problema es que alguna de estas listas negras es demasiado quisquillosa y puede llegar a banear a algún lector despistado e inocente. En micrographic pasó con Bakunin, Burdon y Richard, y en Nordic Design pasó que el propio Álex Nordic no podía comentar en su blog. Solución? De momento, desactivar por completo el filtro antispam. Llevo más de dos semanas sin antispam y la calma sigue reinando por aquí, así que de momento se queda tal y como está. Eso sí, el día que vuelva el spam (que volverá, seguro), no me quedará más remedio que volver a activar el filtro. Tal vez la solución entonces sea añadir al mensaje de baneo “your ip is blacklisted…” una nota para que el afectado se ponga en contacto conmigo y pueda colgar yo mismo el comentario… No sé. En todo caso, espero que pasen varios meses antes de tener que tomar esa decisión. De momento, estos serían los pasos a seguir para desactivar el filtro antispam en TXP:

* editar el archivo lib/txplib_misc.php
* en la línea 482 cambiar esto 
$checks = array(‘bl.spamcop.net’,’list.dsbl.org’,’sbl.spamhaus.org’);
por esto: $checks = array();
* listo

ACTUALIZACIÓN: Teskmon me avisa de que en la nueva versión 1.0rc4 de TXP la edición de blacklists viene integrada en el interfaz (admin > preferencias > preferencias avanzadas)
