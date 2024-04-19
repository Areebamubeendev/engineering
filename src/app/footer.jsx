// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 w-full text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
            {/* Address */}
            <div>
              <h3 className="text-lg font-bold mb-2">Main Address:</h3>
              <p>Unit 1: Road Peer near Christian Graveyard, Lahore</p>
              <p>Unit 2: Salampat Pura, Lahore</p>
              <p>Unit 3: Sunder Industrial Estate, Lahore</p>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Information:</h3>
              <p>Email: amjad_eng666@yahoo.com</p>
              <p>Phone 1: +923219474620</p>
              <p>Phone 2: +923009474620</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  