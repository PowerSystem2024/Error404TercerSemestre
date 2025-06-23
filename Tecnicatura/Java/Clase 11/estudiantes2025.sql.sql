-- Comenzamos con CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)

-- Listar los estudiantes (read)
SELECT * FROM estudiantes.estudiantes2025;

-- Insertar estudiante
INSERT INTO estudiantes2025 (nombre, apellido, telefono, email) VALUES ("Juan", "Perez", "261454564", "juan@gmail.com");

-- Update (modificar)
UPDATE public.Estudiantes2025 SET nombre='Juan Carlos', apellido='Garcia', mail='juajd@gmail.com' WHERE id_estudiantes2025= 1;

-- Delete (eliminar)
DELETE FROM public.Estudiantes2025 WHERE id_estudiantes2025=3;

-- Para modificar el id_estudiantes2025 y comience en 1
ALTER TABLE estudiantes2025 AUTO_INCREMENT = 1;