import { Navbar } from "./_components/navbar";
import { Dashboard } from "./_components/dashboard";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <Dashboard children={children} />
    // <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    // </div>
   );
}
 
export default ProtectedLayout;