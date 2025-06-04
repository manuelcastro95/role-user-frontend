import { useState } from 'react';
import api from '../services/api';

const AddRoleForm = ({ onRoleAdded }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError('El nombre del rol es obligatorio.');
      setMensaje('');
      return;
    }

    try {
      await api.post('/roles', {
        nombre,
        descripcion,
      });

      

      setMensaje('Rol agregado exitosamente.');
      setError('');
      setNombre('');
      setDescripcion('');
      if (typeof onRoleAdded === 'function') onRoleAdded();
    } catch (err) {
      console.error(err);
      setError('Hubo un error al agregar el rol.');
      setMensaje('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mensaje && <p className="text-green-600">{mensaje}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div>
        <label className="block font-medium">Nombre del rol *</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Ej. Administrador"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Descripción</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Descripción opcional"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar Rol
      </button>
    </form>
  );
}

export default AddRoleForm;
