import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'A creative Todo app using Next.js and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 max-w-4xl mx-auto p-4">
        <header>
          <h1 className="text-primary text-3xl font-bold mb-6">Todo App</h1>
        </header>
        {children}
      </body>
    </html>
  );
}