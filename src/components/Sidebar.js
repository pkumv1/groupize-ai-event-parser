export default function Sidebar({ apiKey, setApiKey, apiKeyVerified, verifyApiKey, parsingStats }) {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo">
          <span className="logo-text">groupize</span>
          <span className="logo-ai">.ai</span>
        </div>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.8 }}>
          Event Intelligence Platform
        </p>
      </div>
      
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.9 }}>API Configuration</h3>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            placeholder="Enter Groq API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}
          />
        </div>
        <button
          onClick={verifyApiKey}
          className="btn-primary"
          style={{ width: '100%' }}
        >
          {apiKeyVerified ? '✓ Verified' : 'Verify API Key'}
        </button>
      </div>
      
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.9 }}>Parsing Statistics</h3>
        <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ opacity: 0.7 }}>Attempts:</span>
            <span style={{ float: 'right', fontWeight: 600 }}>{parsingStats.attempts}</span>
          </div>
          <div>
            <span style={{ opacity: 0.7 }}>Successful:</span>
            <span style={{ float: 'right', fontWeight: 600, color: '#4fb06d' }}>{parsingStats.successes}</span>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: 'auto' }}>
        <div style={{ opacity: 0.6, fontSize: '0.75rem', textAlign: 'center' }}>
          <p>Powered by Aime 🤖</p>
          <p style={{ marginTop: '0.25rem' }}>AI for meetings & events</p>
        </div>
      </div>
    </div>
  )
}