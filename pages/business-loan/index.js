import Banner from "../../components/businessLoan/Banner";
import BusinessProperties from "../../components/businessProperties/BusinessProperties";
import Filter from "../../components/common/Filter";

const BusinessLoan = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner />

      {/* Filter start here */}
      <Filter />

      {/* Business Properties */}
      <BusinessProperties />
    </>
  );
};

export default BusinessLoan;
