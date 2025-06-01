import psycopg2 as bd

conexion = bd.connect(
    host="127.0.0.1",
    database="Test_bd",
    user="postgres",
    password="admin",
    port='5432'
)

try:   
    with conexion:
        with conexion.cursor as cursor:
            sentencia = 'INSERT  INTO persona(nombre, apellido, email) VALUES (%s,%s,%s)'
            valores = ('camilo', 'Espe', 'campes@gmail.com')
            cursor.execute(sentencia, valores)


            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('juano', 'juarez', 'jjjjzzz@gmail.com', 1)
            cursor.execute(sentencia, valores)

except Exception as e:
    print(f'Ocurrio un error, Se hizo un rollback: {e}')
finally:
    conexion.close()

print('Termina la transaccion')