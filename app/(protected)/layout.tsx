import { Navbar } from "./_components/navbar";
import { Dashboard } from "./_components/dashboard";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div className='h-full'>
      <Dashboard children={children} />
    </div>
   );
}
 
export default ProtectedLayout;