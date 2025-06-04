import { useEffect, useState } from 'react';
import AddUserForm from '../components/AddUserForm';
import UserList from '../components/UserList';
import api from '../services/api';

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    try {
      const response = await api.get('/users');
      setUsuarios(response.data);
    } catch (err) {
      console.error('Error al cargar los usuarios:', err);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Agregar Usuario</h2>
        <AddUserForm onUserAdded={fetchUsuarios} />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Usuarios registrados</h2>
        <UserList usuarios={usuarios} />
      </div>
    </div>
  );
};

export default Users; 