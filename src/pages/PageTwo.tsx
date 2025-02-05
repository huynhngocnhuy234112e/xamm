import { useNavigate } from "react-router-dom"

export default function PageTwo() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-[#90ff59]">
      <h1 className="text-4xl font-bold mb-8 neon-text">Trang 2</h1>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 border-2 border-[#90ff59] hover:bg-[#90ff59]/20 transition-colors"
      >
        Quay về trang chủ
      </button>
    </div>
  )
}

