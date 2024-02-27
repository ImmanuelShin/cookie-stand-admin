import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function placeholderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Placeholder Page</title>
      </Head>

      <Header />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
          <h2 className="text-xl mb-4">Placeholder Page</h2>
          <p>Holding place.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

