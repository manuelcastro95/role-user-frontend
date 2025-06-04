# 🖥️ Frontend - Sistema de Gestión de Usuarios y Roles

Este frontend forma parte del sistema de gestión de usuarios y roles, desarrollado con **React + Vite**. Permite a los usuarios:

- Agregar nuevos roles al sistema
- Registrar nuevos usuarios siempre que existan roles disponibles
- Visualizar los usuarios registrados y los roles disponibles

## 📚 Descripción del problema

En los sistemas de control de usuarios, es fundamental gestionar roles y asignaciones de manera sencilla. Esta interfaz permite:

- Crear roles como "Administrador", "Editor" o "Invitado"
- Crear usuarios seleccionando un rol existente
- Visualizar de forma clara todos los roles y usuarios en el sistema

> ⚠️ La creación de usuarios solo está habilitada si existen roles previamente.

## 🚀 Tecnologías utilizadas

- React
- Vite
- Axios
- Tailwind CSS
- React Hooks (`useState`, `useEffect`)

## 🧱 Estructura del proyecto

usuarios-roles-frontend/
├── components/
│ ├── AddRoleForm.jsx
│ ├── AddUserForm.jsx
│ ├── RoleList.jsx
│ └── UserList.jsx
├── pages/
│ └── Home.jsx
├── services/
│ └── api.js
├── App.jsx
├── main.jsx
├── .env
└── README.md


---

## ⚙️ Configuración e instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/manuelcastro95/role-user-frontend
   cd role-user-frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura la URL del backend:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

## 📋 Funcionalidades principales

### 📌 Agregar Rol
- Nombre obligatorio
- Descripción opcional

### 🧑‍💼 Agregar Usuario
- Requiere que exista al menos un rol

### 👁️ Vista general
- Lista de usuarios con su rol
- Lista de roles disponibles

## 🌐 Conexión con el backend

Todas las peticiones HTTP se realizan mediante Axios y están configuradas en `src/services/api.js`, consumiendo la API REST del backend:

| Método | Endpoint        | Descripción                |
|--------|----------------|----------------------------|
| GET    | `/api/roles`   | Obtener todos los roles    |
| POST   | `/api/roles`   | Crear nuevo rol            |
| GET    | `/api/users`   | Obtener todos los usuarios |
| POST   | `/api/users`   | Crear nuevo usuario        |

## 🗃️ Git Flow

Este repositorio usa Git Flow con las siguientes ramas:

- `main`: versión estable
- `develop`: entorno de desarrollo
- `feature/crear-rol`: funcionalidad de roles
- `feature/crear-usuario`: funcionalidad de usuarios
- `feature/vista-general`: listado de usuarios y roles

## 🔗 Enlaces relacionados

- [Repositorio Backend](https://github.com/manuelcastro95/role-user-backend)