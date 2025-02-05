import { useNavigate } from "react-router-dom"
import { Barcode } from "lucide-react"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#931717]/20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C_E1_BB_A6_X_C3_82M-7rzrxg4aGszWSkFhee0yD12ohLhMw0.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6) contrast(1.2)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-sm px-6 py-12 text-center">
        <div className="space-y-4">
          {["BỘC", "XÂM", "TRỨNG", "CARD"].map((text, index) => (
            <div
              key={index}
              className="neon-text distressed text-[#90ff59] font-bold text-5xl tracking-wider"
              style={{
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Start Button */}
        <button onClick={() => navigate("/page-two")} className="mt-16 group relative">
          <div className="absolute inset-0 bg-[#90ff59]/20 blur-md group-hover:bg-[#90ff59]/30 transition-colors" />
          <div className="relative px-8 py-3 border-2 border-[#90ff59] bg-black/50 hover:bg-black/70 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <Barcode className="w-6 h-6 text-[#90ff59]" />
              <span className="text-[#90ff59] font-mono tracking-[0.3em] neon-text">START</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

