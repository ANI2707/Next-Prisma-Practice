
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast'

interface ProviderProps{
  children:ReactNode;
}
const Providers = ({children}:ProviderProps) => {
  return (
    <div>
      
        <Toaster/>

          {children}
        
        
    </div>
  );
};

export default Providers;