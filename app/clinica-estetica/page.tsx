export const metadata = {
  title: "Lumière Estética — Exemplo de Clínica de Estética & Agendamento Integrado",
  description:
    "Exemplo de site exclusivo para clínicas de estética, dermatologia e salões de beleza com agendamento online e integração WhatsApp.",
};

export default function ClinicaEsteticaPage() {
  return (
    <div style={{ width: "100%", height: "100dvh", minHeight: "100vh", margin: 0, padding: 0, overflow: "hidden", background: "#FAF6F0" }}>
      <iframe
        src="/clinica-estetica-lumiere.html"
        title="Lumière Estética - Demonstração Clínica de Estética"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
