import { useEffect, useState } from 'react';
import ListingSummary from '../Listing Summary/ListingSummary';
import GetAllProperties from '../../../Moderator/Services/GetAllProperties';
import GetAllPayments from '../../../../../Components/Services/GetAllPayments';
import PageTitle from '../../../../../Features/PageTitle/PageTitle';

export default function AdminHome() {
  const [totalPayments, setTotalPayments] = useState(0);
  const [apartment, setTotalApartment] = useState(0);
  const [villa, setTotalVilla] = useState(0);
  const [office, setTotalOffice] = useState(0);
  const [home, setTotalHome] = useState(0);

  const { properties, isLoading: isPropertiesLoading } = GetAllProperties();
  const { payments, isLoading: isPaymentsLoading } = GetAllPayments();

  useEffect(() => {
    if (!isPaymentsLoading) {
      const totalPayments = payments.reduce((prev, curr) => {
        if (curr.amount !== undefined) {
          return prev + curr.amount;
        } else if (curr.price !== undefined) {
          return prev + curr.price;
        } else {
          return prev;
        }
      }, 0);

      setTotalPayments(totalPayments);
    }

    if (!isPropertiesLoading) {
      const villa = properties.filter(property => {
        return property.propertyType === 'villa';
      });
      const home = properties.filter(property => {
        return property.propertyType === 'home';
      });
      const apartment = properties.filter(property => {
        return property.propertyType === 'apartment';
      });
      const office = properties.filter(property => {
        return property.propertyType === 'office';
      });

      setTotalApartment(apartment);
      setTotalHome(home);
      setTotalOffice(office);
      setTotalVilla(villa);
    }
  }, [isPaymentsLoading, payments, isPropertiesLoading, properties]);

  return (
    <div>
      <PageTitle title="Property Hunter || Admin Home"></PageTitle>
      <ListingSummary
        totalPayments={totalPayments}
        apartment={apartment}
        villa={villa}
        office={office}
        home={home}
        isPropertiesLoading={isPropertiesLoading}
        properties={properties}
      />
    </div>
  );
}
