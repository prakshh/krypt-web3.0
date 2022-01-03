import { Welcome, Navbar, Services, Transactions, Footer } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Services />
      <Footer />
    </div>
  )
}

export default App
