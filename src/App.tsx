function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Altave Front 🚀</h1>
      </div>
    </header>
  )
}

function Button({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 active:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="mx-auto max-w-xl p-8 rounded-xl shadow-lg bg-white text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Bem-vindo ao Projeto</h2>
            <p className="text-gray-600">Exemplo inicial com React + TypeScript + Tailwind.</p>
            <div className="flex gap-4 justify-center">
              <Button label="Entrar" />
              <Button label="Cadastrar" />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-200 text-gray-600 p-4 text-center text-sm">
        © {new Date().getFullYear()} Altave Front. Todos os direitos reservados.
      </footer>
    </div>
  )
}