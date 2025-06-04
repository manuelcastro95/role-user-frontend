import { useEffect, useState } from 'react';
import api from '../services/api';

const UserList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await api.get('/users');
                setUsuarios(response.data);
            } catch (err) {
                console.error('Error al cargar los usuarios:', err);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div className="mt-4">
            <h3 className="font-bold mb-2">Usuarios registrados</h3>
            <ul className="list-disc list-inside">
                {usuarios.map((usuario) => (
                    <li key={usuario._id || usuario.id}>
                        {usuario.nombres} {usuario.apellidos} — {usuario.rol?.nombre || 'Sin rol'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
