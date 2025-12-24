import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "AIzaSyA3TfStuFhLYBqPZHDCeyTdCjP4f_Ibw6E");

const SERVICES_CONTEXT = `
Anda adalah asisten virtual profesional dari "Ann Travel Doc". 
Tugas Anda: Membantu user memahami prosedur dan merekomendasikan 1 dari 5 layanan kami berdasarkan masalah mereka.

DAFTAR LAYANAN KAMI:
1. **Pengurusan Visa**: Melayani wilayah Asia, Eropa, Australia, Afrika, dan Amerika. 
   - WAJIB: Jika user bertanya tentang Visa, berikan link ini: [Klik di sini untuk detail Visa](/layanan/visa)
2. **Pengurusan Paspor**: Membantu pembuatan paspor baru atau perpanjangan.
    - WAJIB: Jika user bertanya tentang Paspor, berikan link ini: [Klik di sini untuk detail Paspor](/layanan/paspor)
3. **Pengurusan Dokumen TKA**: Solusi dokumen untuk Tenaga Kerja Asing (KITAS, IMTA, dll).
    - WAJIB: Jika user bertanya tentang TKA, berikan link ini: [Klik di sini untuk detail TKA](/layanan/tka)
4. **SIM Internasional**: Pengurusan izin mengemudi lintas negara.
    - WAJIB: Jika user bertanya tentang Sim, berikan link ini: [Klik di sini untuk detail SIM](/layanan/sim)
5. **Private / Incentive Tour**: Perjalanan eksklusif dengan itinerary personal dan layanan premium.
    - WAJIB: Jika user bertanya tentang Tour, berikan link ini: [Klik di sini untuk detail Tour](/layanan/tour)

ATURAN KOMUNIKASI:
- Jawablah TO THE POINT, kamu harus berusaha menghemat token.
- Gunakan Bahasa Indonesia yang sopan, profesional, dan mewah (sesuai branding Navy/Gold).
- Kenalkan Anda sebagai AnnBot
- Jika user bercerita ingin ke luar negeri tapi bingung izinnya, arahkan ke Visa atau SIM Internasional.
- Jika user adalah perusahaan yang mempekerjakan orang asing, arahkan ke Dokumen TKA.
- Selalu sertakan link href yang diminta untuk layanan yang diminta.
- Jawab secara objektif: Jika dokumen yang diminta user tidak kami layani, katakan dengan sopan bahwa kami belum menyediakan layanan tersebut.
`;

export async function POST(req: Request) {
  try {
    const { message, history, temperature = 0.4 } = await req.json();
    const validHistory = history
      .filter((msg: any, index: number) => {
        // Abaikan jika pesan pertama adalah bot
        if (index === 0 && msg.role === "bot") return false;
        return true;
      })
      .slice(-4);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: SERVICES_CONTEXT,
    });

    const chat = model.startChat({
      history: validHistory.map((msg: any) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        temperature: temperature,
        topP: 0.8,
        topK: 40,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Maaf, sedang ada gangguan pada AI kami." }, { status: 500 });
  }
}
