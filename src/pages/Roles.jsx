import { useEffect, useState } from 'react';
import AddRoleForm from '../components/AddRoleForm';
import RoleList from '../components/RoleList';
import api from '../services/api';

const Roles = () => {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    try {
      const response = await api.get('/roles');
      setRoles(response.data);
    } catch (err) {
      console.error('Error al cargar los roles:', err);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Agregar Rol</h2>
        <AddRoleForm onRoleAdded={fetchRoles} />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Roles registrados</h2>
        <RoleList roles={roles} />
      </div>
    </div>
  );
};

export default Roles; 