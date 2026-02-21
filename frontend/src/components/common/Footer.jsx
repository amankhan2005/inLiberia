 // src/components/common/Footer.jsx

import Container from "./Container";



export default function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300 mt-16">

      <Container className="py-10">

        

        <div className="grid md:grid-cols-3 gap-8">

          

          <div>

            <h3 className="text-white font-semibold mb-3">

              inLiberia

            </h3>

            <p>

              Find and invest in verified properties

              across Liberia.

            </p>

          </div>



          <div>

            <h3 className="text-white font-semibold mb-3">

              Links

            </h3>



            <ul className="space-y-2">

              <li>

                <a href="#">Browse</a>

              </li>

              <li>

                <a href="#">Categories</a>

              </li>

            </ul>

          </div>



          <div>

            <h3 className="text-white font-semibold mb-3">

              Contact

            </h3>



            <p>Email: support@inliberia.com</p>

          </div>



        </div>



        <div className="border-t border-gray-700 mt-8 pt-4 text-center">

          © 2026 inLiberia

        </div>



      </Container>

    </footer>

  );

}