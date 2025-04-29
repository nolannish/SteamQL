import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <nav className="mt-2">
          <a href="#" className="mx-3 hover:underline">Home</a>
          <a href="#" className="mx-3 hover:underline">About</a>
          <a href="#" className="mx-3 hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">About This Page</h2>
        <p>This is a basic page built using Create React App and styled with Tailwind CSS. It’s easy to expand and customize!</p>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10 p-4">
        &copy; 2025 My Website
      </footer>
    </div>
  );
}

export default App;
