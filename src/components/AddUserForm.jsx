import { useEffect, useState } from 'react';
import api from '../services/api';

const AddUserForm = ({ onUserAdded }) => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [identificacion, setIdentificacion] = useState('');
    const [email, setEmail] = useState('');
    const [rolId, setRolId] = useState('');
    const [roles, setRoles] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get('/roles');
                setRoles(response.data);
            } catch (err) {
                console.error('Error al cargar roles:', err);
            }
        };

        fetchRoles();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombres || !apellidos || !identificacion || !email || !rolId) {
            setError('Todos los campos son obligatorios.');
            setMensaje('');
            return;
        }

        try {
            await api.post('/users', {
                nombres,
                apellidos,
                identificacion,
                email,
                rolId,
            });

            setMensaje('Usuario creado correctamente.');
            setError('');
            setNombres('');
            setApellidos('');
            setIdentificacion('');
            setEmail('');
            setRolId('');
            if (typeof onUserAdded === 'function') onUserAdded();
        } catch (err) {
            console.error(err);
            setError('Hubo un error al crear el usuario.');
            setMensaje('');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {mensaje && <p className="text-green-600">{mensaje}</p>}
            {error && <p className="text-red-600">{error}</p>}

            <input
                type="text"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                placeholder="Nombres"
                className="w-full border px-3 py-2 rounded"
            />
            <input
                type="text"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                placeholder="Apellidos"
                className="w-full border px-3 py-2 rounded"
            />
            <input
                type="text"
                value={identificacion}
                onChange={(e) => setIdentificacion(e.target.value)}
                placeholder="Identificación"
                className="w-full border px-3 py-2 rounded"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="w-full border px-3 py-2 rounded"
            />
            <select
                value={rolId}
                onChange={(e) => setRolId(e.target.value)}
                className="w-full border px-3 py-2 rounded"
            >
                <option value="">Seleccione un rol</option>
                {roles.map((rol) => (
                    <option key={rol._id || rol.id} value={rol._id || rol.id}>
                        {rol.nombre}
                    </option>
                ))}
            </select>

            <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Agregar Usuario
            </button>

        </form>
    );
}

export default AddUserForm;
