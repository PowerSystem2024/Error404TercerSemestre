# =============================================================================
# Interfaz de usuario por consola
# =============================================================================

from models import UsuarioModel, LibroModel, PrestamoModel, SolicitudModel
from servicios import BibliotecaService

# LUCAS

class SistemaBiblioteca:
    def __init__(self):
        self.usuario_actual = None

    # =========================== MENÚS ============================

    def mostrar_menu(self, titulo, opciones):
        print(f"\n{'=' * 50}\n{titulo.center(50)}\n{'=' * 50}")
        for clave, descripcion in opciones.items():
            print(f"{clave}. {descripcion}")
        print("-" * 50)

    def mostrar_menu_principal(self):
        opciones = {
            "1": "Iniciar sesión",
            "2": "Registrar nuevo usuario",
            "3": "Salir"
        }
        self.mostrar_menu("SISTEMA DE GESTIÓN DE BIBLIOTECA", opciones)

    def mostrar_menu_usuario(self):
        nombre = self.usuario_actual.get('nombre', 'Usuario')
        print(f"\n¡Bienvenido, {nombre}!")
        opciones = {
            "1": "Buscar libros",
            "2": "Ver libros disponibles",
            "3": "Solicitar préstamo",
            "4": "Ver mis préstamos",
            "5": "Devolver libro",
            "6": "Crear solicitud de libro",
            "0": "Cerrar sesión"
        }
        if self.usuario_actual.get('rol') == 'administrador':
            opciones["7"] = "Panel de Administrador"
        self.mostrar_menu("MENÚ DE USUARIO", opciones)

    def mostrar_menu_admin(self):
        opciones = {
            "1": "Agregar nuevo libro",
            "2": "Ver todos los usuarios",
            "3": "Ver préstamos activos",
            "4": "Ver solicitudes pendientes",
            "5": "Gestionar solicitudes",
            "0": "Volver al menú principal"
        }
        self.mostrar_menu("PANEL DE ADMINISTRADOR", opciones)

    # =========================== ACCIONES ============================

    def iniciar_sesion(self):
        username = input("Usuario: ")
        password = input("Contraseña: ")
        usuario = UsuarioModel.autenticar_usuario(username, password)
        if usuario:
            self.usuario_actual = usuario
            print(f"¡Bienvenido, {usuario['nombre']}!")
        else:
            print("Credenciales incorrectas")

    def registrar_usuario(self):
        print("\n--- REGISTRO DE USUARIO ---")
        username = input("Nombre de usuario: ")
        password = input("Contraseña: ")
        nombre = input("Nombre completo: ")
        
        usuario = UsuarioModel.crear_usuario(username, password, nombre)
        if usuario:
            print("Usuario registrado exitosamente")
        else:
            print("Error al registrar usuario")


    def buscar_libros(self):
        termino = input("Ingrese término de búsqueda: ")
        libros = LibroModel.buscar_libros(termino)
        self.mostrar_libros(libros)

    def ver_libros_disponibles(self):
        libros = LibroModel.obtener_libros_disponibles()
        self.mostrar_libros(libros)

    def mostrar_libros(self, libros):
        if libros:
            for libro in libros:
                print(f"ID: {libro['id']} | {libro['titulo']} - {libro['autor']}")
                print(f"   Género: {libro.get('genero', 'N/A')} | Disponibles: {libro['copias_disponibles']}/{libro.get('copias_totales', '?')}")
                print("-" * 50)
        else:
            print("No se encontraron libros")

    def solicitar_prestamo(self):
        self.ver_libros_disponibles()
        try:
            id_libro = int(input("\nIngrese ID del libro a solicitar: "))
            mensaje = BibliotecaService.prestar_libro(self.usuario_actual['id'], id_libro)
            print(mensaje)
        except ValueError:
            print("ID inválido")

    def ver_mis_prestamos(self):
        prestamos = PrestamoModel.obtener_prestamos_activos(self.usuario_actual['id'])
        self.mostrar_prestamos(prestamos)

    def devolver_libro(self):
        prestamos = PrestamoModel.obtener_prestamos_activos(self.usuario_actual['id'])
        self.mostrar_prestamos(prestamos)
        if prestamos:
            try:
                id_prestamo = int(input("\nIngrese ID del préstamo a devolver: "))
                mensaje = BibliotecaService.devolver_libro(id_prestamo)
                print(mensaje)
            except ValueError:
                print("ID inválido")

    def mostrar_prestamos(self, prestamos):
        if prestamos:
            for prestamo in prestamos:
                print(f"ID: {prestamo['id']} | Libro: {prestamo['libros']['titulo']} - Autor: {prestamo['libros']['autor']}")
                print(f"Fecha préstamo: {prestamo['fecha_prestamo']} | Vencimiento: {prestamo['fecha_vencimiento']}")
                print("-" * 30)
        else:
            print("No hay préstamos para mostrar")

    def crear_solicitud_libro(self):
        self.buscar_libros()
        try:
            id_libro = int(input("\nIngrese ID del libro para solicitar: "))
            if SolicitudModel.crear_solicitud(self.usuario_actual['id'], id_libro):
                print("Solicitud creada exitosamente")
            else:
                print("Error al crear la solicitud")
        except ValueError:
            print("ID inválido")

    # =========================== ADMINISTRADOR ============================

    def agregar_libro_admin(self):
        print("\n--- AGREGAR NUEVO LIBRO ---")
        titulo = input("Título: ")
        autor = input("Autor: ")
        genero = input("Género: ")
        isbn = input("ISBN: ")
        try:
            copias = int(input("Número de copias: "))
            if LibroModel.agregar_libro(titulo, autor, genero, isbn, copias):
                print("Libro agregado exitosamente")
            else:
                print("Error al agregar libro")
        except ValueError:
            print("Número de copias inválido")

    def ver_todos_usuarios(self):
        usuarios = UsuarioModel.obtener_todos_usuarios()
        if usuarios:
            for usuario in usuarios:
                print(f"ID: {usuario['id']} | {usuario['username']} - {usuario['nombre']} | Rol: {usuario['rol']}")
                print("-" * 40)
        else:
            print("No hay usuarios registrados")

    def ver_prestamos_activos_admin(self):
        prestamos = PrestamoModel.obtener_prestamos_activos()
        if prestamos:
            for prestamo in prestamos:
                print(f"ID: {prestamo['id']} | Usuario: {prestamo['usuarios']['nombre']} | Libro: {prestamo['libros']['titulo']}")
                print(f"Vencimiento: {prestamo['fecha_vencimiento']}")
                print("-" * 40)
        else:
            print("No hay préstamos activos")

    def ver_solicitudes_pendientes(self):
        solicitudes = SolicitudModel.obtener_solicitudes_pendientes()
        if solicitudes:
            for solicitud in solicitudes:
                print(f"ID: {solicitud['id']} | Usuario: {solicitud['usuarios']['nombre']} | Libro: {solicitud['libros']['titulo']}")
                print(f"Fecha: {solicitud['fecha_solicitud']}")
                print("-" * 40)
        else:
            print("No hay solicitudes pendientes")

    def gestionar_solicitudes(self):
        self.ver_solicitudes_pendientes()
        try:
            id_solicitud = int(input("\nIngrese ID de solicitud a gestionar: "))
            accion = input("Seleccione acción (1. Aprobar | 2. Rechazar): ")
            estado = "aprobada" if accion == "1" else "rechazada" if accion == "2" else None
            if not estado:
                print("Opción inválida")
                return
            if SolicitudModel.actualizar_estado_solicitud(id_solicitud, estado):
                print(f"Solicitud {estado} exitosamente")
            else:
                print("Error al actualizar solicitud")
        except ValueError:
            print("ID inválido")

    def menu_administrador(self):
        while True:
            self.mostrar_menu_admin()
            opcion = input("Seleccione una opción: ")
            acciones = {
                "1": self.agregar_libro_admin,
                "2": self.ver_todos_usuarios,
                "3": self.ver_prestamos_activos_admin,
                "4": self.ver_solicitudes_pendientes,
                "5": self.gestionar_solicitudes
            }
            if opcion == "0":
                break
            accion = acciones.get(opcion)
            if accion:
                accion()
            else:
                print("Opción inválida")

    # =========================== EJECUCIÓN ============================

    def ejecutar(self):
        print("Iniciando Sistema de Gestión de Biblioteca...")
        while True:
            try:
                if not self.usuario_actual:
                    self.mostrar_menu_principal()
                    opcion = input("Seleccione una opción: ")
                    if opcion == "1":
                        self.iniciar_sesion()
                    elif opcion == "2":
                        self.registrar_usuario()
                    elif opcion == "3":
                        print("¡Hasta luego!")
                        break
                    else:
                        print("Opción inválida")
                else:
                    self.mostrar_menu_usuario()
                    opcion = input("Seleccione una opción: ")
                    acciones = {
                        "1": self.buscar_libros,
                        "2": self.ver_libros_disponibles,
                        "3": self.solicitar_prestamo,
                        "4": self.ver_mis_prestamos,
                        "5": self.devolver_libro,
                        "6": self.crear_solicitud_libro,
                        "7": self.menu_administrador if self.usuario_actual.get('rol') == 'administrador' else None
                    }
                    if opcion == "0":
                        print("Sesión cerrada")
                        self.usuario_actual = None
                    elif acciones.get(opcion):
                        acciones[opcion]()
                    else:
                        print("Opción inválida")
            except KeyboardInterrupt:
                print("\n\nSaliendo del sistema...")
                break
            except Exception as e:
                print(f"Error inesperado: {e}")
                input("Presione Enter para continuar...")

if __name__ == "__main__":
    sistema = SistemaBiblioteca()
    sistema.ejecutar()
