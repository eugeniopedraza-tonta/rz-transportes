import { useState } from "react";

const EmailComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string[]>([]);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);


  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isValidMXPhone = (phone: string) => {
    return /^(\+52)?\s?\d{10}$/.test(phone);
  }

  const handleSubmit = async () => {
    const errors: string[] = [];
    
    if (subject === "") errors.push("El asunto es requerido");
    if (message === "") errors.push("El mensaje es requerido");
    if (email === "") errors.push("El correo electrónico es requerido");

    if (!isValidEmail(email)) errors.push("El correo electrónico no es válido");
    if (!isValidMXPhone(phone)) errors.push("El teléfono no es válido");
    
    if (errors.length > 0) {
      setError(errors);
      return;
    }

    setError([]);
    setSuccess("");
    setLoading(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, email, phone, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setSuccess("¡Mensaje enviado correctamente!");
      setEmail("");
      setMessage("");
      setSubject("");
      setPhone("");
    } catch (err) {
      setError([err instanceof Error ? err.message : 'Error al enviar el mensaje']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl h-[85dvh] overflow-y-hidden flex flex-col justify-between w-full">
        {/* Header */}
        <div className="mb-8 text-start">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Contáctanos
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Déjanos tu información y te responderemos lo antes posible.
          </p>
        </div>

        {/* Form */}
          {/* Subject */}
          <div className="space-y-1.5">
            <label className="text-white/80 text-sm font-medium pl-1">Asunto</label>
            <input
              type="text"
              placeholder="¿En qué podemos ayudarte?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white/80 text-sm font-medium pl-1">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-white/80 text-sm font-medium pl-1">
                Teléfono <span className="text-white/40">(opcional)</span>
              </label>
              <input
                type="tel"
                placeholder="+52 81 1234 5678"
                maxLength={14}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-white/80 text-sm font-medium pl-1">Mensaje</label>
            <textarea
              placeholder="Cuéntanos más sobre tu proyecto o necesidad..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
            />
          </div>

          {/* Error Messages */}
          {error.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              {error.map((err, i) => (
                <p key={i} className="text-red-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  {err}
                </p>
              ))}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <p className="text-green-400 text-sm flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {success}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3.5 mt-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                Enviar mensaje
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
      </div>
  );
};

export default EmailComponent;
