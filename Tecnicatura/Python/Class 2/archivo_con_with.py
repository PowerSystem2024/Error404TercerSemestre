from manejoDeArchivos import manejoDeArchivos
#manejo de contexto with: sintaxis simplificada, abre y cierra el archivo
with open('prueba.txt','r', encoding='utf8') as archivo:
    print(archivo.read())
#No hace falta ni el try, ni el finally, en el contexto de with lo que se ejecuta de manera automatica, utiliza diferentes metodos: __enter__ este es el que abre, ahora el siguiente metodo es el que cierra: __exit__
#Evita fugas de recursos, Si ocurre un error, el archivo igual se cierra (eso no pasa si olvidás usar close()).

with manejoDeArchivos('prueba.txt') as archivo:
    print(archivo.read())
