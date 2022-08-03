import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface User {
  id: number,
  name: string,
  email: string,
  cpf: string,
  locale: string,
  type:string,
  date: Date,
  eventDescription: string,
}

type UserInput = Omit<User, 'id'>

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  users: User[];
  createUser: (user: UserInput) => Promise<void>;
}

export const UsersContext = createContext<UserContextData>(
  {} as UserContextData
  );

export function UsersProvider({children}:UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/registration')
      .then(response => setUsers(response.data.users));
  }, []);

  async function createUser(userInput: UserInput) {
    const response = await api.post('/registration', userInput)
    const { user } = response.data;

    setUsers([...users, user]);
  
    };
  
   
  return(
    <UsersContext.Provider value={{users, createUser}}>
      {children}
    </UsersContext.Provider>
  )

}

