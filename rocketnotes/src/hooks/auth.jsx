import { createContext, useContext } from "react"; // Context API

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ name: 'Manoel', email: 'manoel@email.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context
}

export { AuthProvider, useAuth }