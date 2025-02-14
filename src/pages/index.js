import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => (
  <div>
    <Header />
    <main className="container mx-auto p-4">
      {/* Featured Articles */}
      <section>
        <h2 className="text-xl font-bold mb-4">Featured Articles</h2>
        {/* Map through featured articles */}
      </section>
      {/* Latest News */}
      <section>
        <h2 className="text-xl font-bold mb-4">Latest News</h2>
        {/* Map through latest news */}
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
