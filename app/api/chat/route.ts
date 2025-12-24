import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY!;

const PRIMARY_MODEL = "xiaomi/mimo-v2-flash:free";
const FALLBACK_MODEL = "mistralai/mistral-7b-instruct:free";

const SYSTEM_PROMPT = `
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

async function callOpenRouter(model: string, messages: any[]) {
  console.log("🤖 Using model:", model);

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    throw new Error(`Model ${model} failed`);
  }

  return res.json();
}

export async function POST(req: Request) {
  try {
    const { message, history = [] } = await req.json();

    const messages = [{ role: "system", content: SYSTEM_PROMPT }, ...history, { role: "user", content: message }];

    // 1️⃣ Coba model utama
    let data;
    try {
      data = await callOpenRouter(PRIMARY_MODEL, messages);
    } catch (err) {
      console.warn("⚠️ Primary model failed, switching to fallback");
      data = await callOpenRouter(FALLBACK_MODEL, messages);
    }

    const reply = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({
      reply,
      model_used: data.model ?? "unknown",
    });
  } catch (error) {
    console.error("❌ AI Error:", error);
    return NextResponse.json({ error: "Maaf, sistem sedang sibuk." }, { status: 500 });
  }
}
