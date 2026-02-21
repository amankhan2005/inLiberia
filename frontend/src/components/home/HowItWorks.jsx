 import Container from "../common/Container";

import SectionTitle from "../common/SectionTitle";



export default function HowItWorks() {

  return (

    <Container className="py-16">

      <SectionTitle title="How It Works" />



      <div className="grid md:grid-cols-3 gap-6">

        <div>

          Signup

        </div>



        <div>

          Post Property

        </div>



        <div>

          Get Investors

        </div>

      </div>

    </Container>

  );

}