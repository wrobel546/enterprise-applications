import CustomersTable from "@/app/customers/_components/CustomersTable";
import NewCustomerForm from "@/app/customers/_components/NewCustomerForm";

export const dynamic = "force-dynamic";

export default function CustomersPage() {
  return (
    <main>
      <NewCustomerForm />
      <CustomersTable />
    </main>
  );
}
