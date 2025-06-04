import { useEffect, useState } from 'react';
import api from '../services/api';

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get('/roles');
                setRoles(response.data);
            } catch (err) {
                console.error('Error al cargar los roles:', err);
            }
        };

        fetchRoles();
    }, []);

    return (
        <div className="mt-4">
            <h3 className="font-bold mb-2">Roles registrados</h3>
            <ul className="list-disc list-inside">
                {roles.map((rol) => (
                    <li key={rol._id || rol.id}>{rol.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default RoleList;
