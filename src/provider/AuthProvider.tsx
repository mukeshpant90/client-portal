import React from "react";
import { adalConfig, authContext } from "../config/AdalConfig";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: () => void;
  logout: () => void;
}
const AuthContext = React.createContext<IAuthContextType | undefined>(undefined);
const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<any | null>(null);

  React.useEffect(() => {
    const token = authContext.getCachedToken(adalConfig.clientId);
    const userProfile = authContext.getCachedUser();
    setIsAuthenticated(!!token);
    setUser(userProfile);
  }, []);

  const login = () => {
    authContext.login();
  };

  const logout = () => {
    authContext.logOut();
  };

  const authValue: IAuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  console.log(context, "asdasdsa");
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
