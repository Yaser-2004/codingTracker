export const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 pb-36">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">
          <div>
            <h3 className="font-bold text-lg">CODINGSS</h3>
            <p className="text-gray-400 text-sm">Collaboration platform for modern teams.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">COMPANY</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Product</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">FEATURES</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Screen Sharing</li>
              <li>iOS & Android Apps</li>
              <li>File Sharing</li>
              <li>User Management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">CONTACT US</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>gmail.com</li>
              <li>phone number</li>
              <li>xyz place name</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Stay Up to Date</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Subscribe to get more updates</li>
            </ul>
            <input type="email" placeholder="Email" className="p-2 mt-2 rounded bg-gray-700 text-white w-full" />
          </div>
        </div>
      </footer>
    );
  };