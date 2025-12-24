import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Selamat Datang di Website Kami</h1>
      <p className="mt-4 text-gray-600">Lihat di pojok kanan bawah untuk mencoba chatbot.</p>

      {/* Panggil komponen di sini */}
      <Chatbot />
    </main>
  );
}
