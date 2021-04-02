import { useAuth } from '@/utils/auth';
import EmptyState from '@/components/EmptyState';
import ProductSkeleton from '@/components/ProductSkeleton';
import ProductTable from '@/components/ProductTable';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import DashboardShell from '@/components/DashboardShell';

const Dashboard = () => {
 const auth = useAuth();
 const { data } = useSWR('/api/brands', fetcher);

 if (!data) {
  return (
   <DashboardShell>
    <ProductSkeleton />
   </DashboardShell>
  );
 }

 return (
  <DashboardShell>
   {data.brands ? <ProductTable brands={data.brands} /> : <EmptyState />}
  </DashboardShell>
 );
};

export default Dashboard;
