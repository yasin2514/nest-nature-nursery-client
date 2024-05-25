import CountUp from "react-countup";
import bg from "../../assets/banner-6.jpg";
import Container from "../../components/ui/Container";
const InformationSection = () => {
  return (
    <div
      className=" bg-fixed h-[70vh] flex items-center justify-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.60)),url(${bg})`,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 items-center w-full rounded-lg py-10 text-white bg-black bg-opacity-80">
          <Section value={"1050"} title={"Total Plants"} />
          <Section value={"510"} title={" Delivery Plants"} />
          <Section value={"150"} title={"Total Clients"} />
          <Section value={"160"} title={"Plant Category"} />
        </div>
      </Container>
    </div>
  );
};

const Section = ({value,title}) => {
  return (
    <div className="text-center space-y-5 ">
      <CountUp
        className="text-5xl font-bold text-green-500"
        end={value}
        duration={2.75}
      />
      <h4 className="text-2xl font-bold uppercase">{title}</h4>
    </div>
  );
};


export default InformationSection;
