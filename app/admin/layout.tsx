import { Dashboard } from "./_components/dashboard";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <Dashboard children={children} />;
};

export default ProtectedLayout;
