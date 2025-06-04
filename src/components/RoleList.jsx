import React from 'react';

const RoleList = ({ roles = [] }) => {
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
