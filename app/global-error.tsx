'use client'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  console.error(error)

  return (
    <html>
      <head>
        <style>{`
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
            padding: 2rem;
            background: #050807;
            color: #eef1ee;
            font-size: 14px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .error-container {
            width: 100%;
            max-width: 480px;
            text-align: center;
            padding: 2rem;
          }
          .error-icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: rgba(57, 255, 143, 0.1);
            border: 2px solid rgba(57, 255, 143, 0.3);
            color: #39ff8f;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 28px;
            margin: 0 auto 1.5rem;
          }
          .error-title {
            font-family: 'Syne', ui-sans-serif, system-ui, sans-serif;
            font-size: 1.75rem;
            font-weight: 800;
            margin: 0 0 0.75rem;
            letter-spacing: -0.03em;
          }
          .error-message {
            margin: 0 0 1rem;
            color: #6b7a70;
            line-height: 1.6;
          }
          .error-message code {
            background: rgba(57, 255, 143, 0.1);
            color: #39ff8f;
            padding: 0.15em 0.4em;
            border-radius: 4px;
            font-family: monospace;
          }
          .retry-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #39ff8f;
            color: #050807;
            font-weight: 600;
            font-size: 0.875rem;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.2s;
          }
          .retry-button:hover {
            background: #ffffff;
          }
          .error-details-wrapper {
            margin-top: 2rem;
            text-align: left;
          }
          .error-details summary {
            list-style: none;
            cursor: pointer;
            color: #6b7a70;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          .error-details summary::-webkit-details-marker {
            display: none;
          }
          .error-stack {
            margin-top: 1rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(57, 255, 143, 0.1);
            border-radius: 8px;
            overflow: auto;
            max-height: 200px;
            font-size: 11px;
            line-height: 1.5;
            color: #6b7a70;
          }
        `}</style>
      </head>
      <body>
        <div className="error-container">
          <div className="error-icon">!</div>
          <h1 className="error-title">Algo salió mal</h1>
          <p className="error-message">
            Ocurrió un error inesperado en <code>{pathname || '/'}</code>.
            <br />
            {error.message || 'Por favor, intentá de nuevo.'}
          </p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Recargar página
          </button>
          {error.stack && (
            <div className="error-details-wrapper">
              <details className="error-details">
                <summary>Ver detalles técnicos</summary>
                <pre className="error-stack">{error.stack}</pre>
              </details>
            </div>
          )}
        </div>
      </body>
    </html>
  )
}
