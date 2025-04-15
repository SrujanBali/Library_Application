import "./Page_CSS/UserInfo.css";
import usericon from "../assets/User.png";
import { useAuth0 } from "@auth0/auth0-react";

function UserInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="user-container">
        <div className="loading-message">
          <div className="spinner"></div>
          <h1>Loading user info...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="user-container">
      {isAuthenticated ? (
        <div className="user-image">
          {user?.picture ? (
            <img src={user.picture} alt="User Image" referrerPolicy="no-referrer" />
          ) : (
            <img src={usericon} alt="Default Image" />
          )}
        </div>
      ) : (
        <div className="error-message">
          <h1>You are not Logged In. Access Denied</h1>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
