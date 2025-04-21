archivo = open('prueba.txt', 'r', encoding='utf8')
#r = read,a = append, w = write, x = exclusive creation(crea un archivo nuevo, pero lanza un error si ya existe.)
#print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10))
print(archivo.readline())
print(archivo.readline())

#vamos a iterar el archivo, cada una de las lineas
#for linea in archivo:
    #print(linea): iteramos todos los elementos del archivo
#print (archivo.readlines()[11]) # accedemos al archivo como si fuera una lista

#anexamos información, copiamos a otro

archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo2.close()
archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos')