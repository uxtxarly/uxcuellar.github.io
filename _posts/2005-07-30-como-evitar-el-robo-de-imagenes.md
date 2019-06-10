---
layout: post
title: !binary |-
  Q8OzbW8gZXZpdGFyIGVsIHJvYm8gZGUgaW3DoWdlbmVz
tags:
- micrographic
- textpattern
---
Hace unas cuantas semanas me llevé una sorpresa al revisar las estadísticas de visitas de micrographic. Resulta que las visitas estaban aumentando a un ritmo constante de un 15-20% desde hacía meses, pero el consumo de ancho de banda se había disparado desde el mes de abril hasta triplicarse en sólo dos meses. Lo lógico habría sido que este consumo hubiese aumentado de forma pareja a las visitas, pero indagando un poco en el origen de las visitas encontré al causante del desaguisado: Google Images. Por lo visto, de un día para otro el buscador de imágenes de Google se dio cuenta de que este blog existía y empezó a enviarme a centenares de personas que llegaban al blog en busca de las fotos de músicos que acompañaban a las letras de canciones que publiqué durante los exámenes de febrero. De todas formas, esto no justificaba un consumo de ancho de banda tan alto. Había algo más… Y fue ese el momento en el que aprendí lo que era el hotlinking.
<!--more-->
Os cuento. Entre los centenares de internautas que llegaban al blog vía Google Images había un buen puñado de foreros y usuarios de diarios para adolescentes como Xanga, LiveJournal o MSN Spaces. Esta gente estaba enlazando directamente alguna de las imágenes alojadas en micrographic, utilizándolas como avatares, firmas en foros, etc, etc. Todo esto, que puede parecer algo de lo más inocente, representa para mí que me estén chupando parte del ancho de banda que pago religiosamente cada mes a mi hosting, sin ni tan siquiera recibir unas míseras visitas al blog a cambio. Lo correcto sería que copiaran la imagen que les interesa y la subieran a su propio servidor (existen decenas de webs para alojar imágenes de forma gratuíta). Pues bien, esta práctica abusiva se denomina hotlinking. Y afortunadamente existe un antídoto contra estos foreros chupópteros: *.htaccess*

Modificando .htaccess (un pequeño archivo de texto que sirve para configurar el servidor donde tenemos alojado el blog) podemos conseguir que las imágenes de nuestro blog sólo se vean desde dentro de nuestro dominio. De esta forma, los enlaces externos a nuestras imágenes dejarán de funcionar. Estos serían los pasos a seguir, según se pudo leer hace un tiempo en Isopixel :

Comprobamos si tenemos un archivo .htaccess en nuestro servidor (carpeta www, donde está el index). Si no lo tenemos, sólo tenemos que crear un archivo de texto en el bloc de notas y llamarlo .htaccess. Copiamos estas líneas en él:

<code>
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http://PON-EL-NOMBRE-DE-TU-DOMINIO.com [NC]
RewriteCond %{HTTP_REFERER} !^http://www.PON-EL-NOMBRE-DE-TU-DOMINIO.com [NC]
RewriteRule .*\.(gif|jpg|jpeg|swf|png)$ – [NC,F]
</code>

Claro que también se puede tener más mala leche y configurar .htaccess para que en lugar de mostrar la imagen enlazada aparezca una imagen de 2000×2 píxeles (por ejemplo) que destroce la maquetación del blog o foro que te está robando la imagen. Sólo tendríamos que cambiar la última línea del ejemplo de arriba por esta otra:

<code>RewriteRule .*\.(gif|jpg)$ http://PON-EL-NOMBRE-DE-TU-DOMINIO/bad-image.gif [R,NC]</code>

siendo bad-image.gif la imagen con la que pensamos causar el pequeño sabotaje

Los usuarios de Textpattern debemos tener cuidado a la hora de manipular .htaccess porque nos podemos cargar el acceso a nuestro blog con bastante facilidad. Tal y como explican en Joshuaink (el blog con más amor dentro que una furgoneta llena de hippies: recomendado), debemos añadir dos líneas (la 2 y la 3) al .htaccess que nos viene por defecto con TXP de forma que quede así:

<code>
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http://(www\.)?PON-EL-NOMBRE-DE-TU-DOMINIO.com(/)?.*$ [NC]
RewriteRule .*\.(gif|jpe?g|png|bmp)$ [F,NC]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.+) – [PT,L]
RewriteRule ^(.*) index.php
</code>

De todas formas, esta solución no es perfecta porque impide que se puedan ver las imágenes del blog en bloglines, por ejemplo, y hace que los búscadores de imágenes se olviden de nuestro blog, y no es eso lo que nos interesa. Sólo buscamos parar los pies a algunos usuarios de Google Images, no a todos. Así pues, una solución más acertada sería tener un .htaccess así:

<code>
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http://(www\.)?tu-dominio.com(/)?.*$ [NC]
RewriteCond %{HTTP_REFERER} !^http://(www\.)?otro-dominio-permitido.org(/)?.*$ [NC]
RewriteCond %{HTTP_REFERER} !^http://(www\.)?bloglines.com(/)?.*$ [NC]
RewriteCond %{HTTP_REFERER} !google\. [NC]
RewriteCond %{HTTP_REFERER} !msn\. [NC]
RewriteCond %{HTTP_REFERER} !yahoo\. [NC]
RewriteCond %{HTTP_REFERER} !altavista\. [NC]
RewriteCond %{HTTP_REFERER} !ask\. [NC]
RewriteCond %{HTTP_REFERER} !archive\.org [NC] 
RewriteRule .*\.(gif|jpe?g|png|bmp)$ [F,NC]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.+) – [PT,L]
</code>
