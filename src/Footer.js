// Footer.js
function Footer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '41vh' }}>
  <main style={{ flex: 1 }}>
    {/* Page content here */}
  </main>

  <footer
    className="text-center text-white py-3"
    style={{ background: 'linear-gradient(to right,rgb(89, 99, 242),rgb(77, 175, 159))' }}
  >
    <div className="container">
      <p className="mb-0">© 2025 VivS Infotech. All rights reserved</p>
    </div>
  </footer>
</div>
  );
}

export default Footer;
