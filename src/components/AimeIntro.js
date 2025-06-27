export default function AimeIntro() {
  return (
    <div className="aime-intro" style={{ marginBottom: '2rem' }}>
      <div className="aime-badge">
        <span style={{ fontSize: '1.25rem' }}>🤖</span>
        <span>aime</span>
        <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>AI for meetings & events planner</span>
      </div>
      <p style={{ color: '#2c3e50', lineHeight: 1.6 }}>
        Hi! I'm <strong>Aime</strong>, your AI assistant powered by Groupize.ai. 
        I'll help you extract and analyze information from your event documents quickly and accurately. 
        Just upload a PDF or Word document, and I'll handle the rest!
      </p>
    </div>
  )
}