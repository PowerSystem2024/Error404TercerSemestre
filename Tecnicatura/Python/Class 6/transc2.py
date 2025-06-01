import psycopg2 as bd

conexion = bd.connect(
    host="127.0.0.1",
    database="Test_bd",
    user="postgres",
    password="admin",
    port='5432'
)

try:   
    #conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = 'INSERT  INTO persona(nombre, apellido, email) VALUES (%s,%s,%s)'
    valores = ('camilo', 'Espe', 'campes@gmail.com')
    cursor.execute(sentencia, valores)


    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('juano', 'juarez', 'jjjjzzz@gmail.com', 1)
    cursor.execute(sentencia, valores)
    
    conexion.commit()
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, Se hizo un rollback: {e}')
finally:
    conexion.close()

