import AddRoleForm from '../components/AddRoleForm';
import AddUserForm from '../components/AddUserForm';
import RoleList from '../components/RoleList';
import UserList from '../components/UserList';

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <h2 className="font-semibold">Agregar Rol</h2>
                <AddRoleForm />
            </div>
            <div>
                <h2 className="font-semibold">Agregar Usuario</h2>
                <AddUserForm />
            </div>
            <div>
                <h2 className="font-semibold">Vista General</h2>
                <RoleList />
                <UserList />
            </div>
        </div>
    );
}

export default Home;
