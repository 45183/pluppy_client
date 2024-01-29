import "../Admin/User.css";
import UserTable from "./UserTable";
const UserList = () => {
  return (
    <div className="user">
      <div className="userManagement">
        <h3>회원관리</h3>
        <div className="user_container">
            <UserTable/>
        </div>
      </div>
    </div>
  );
};
export default UserList;
