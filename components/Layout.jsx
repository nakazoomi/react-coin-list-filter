import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <>
      <div className="layout">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="favicon.ico" />
          <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        </Head>
        {children}
      </div>
    </>
  );
};

export default Layout;
