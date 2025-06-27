import { FiFileText, FiCpu } from 'react-icons/fi'

export default function AnalysisControls({ file, extractedText, onExtractText, onAnalyze, isLoading }) {
  return (
    <div className="custom-card">
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Document: {file.name}</h4>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Size: {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={onExtractText}
          disabled={isLoading}
          className="btn-secondary"
          style={{ flex: 1 }}
        >
          <FiFileText />
          Extract Text
        </button>
        
        <button
          onClick={onAnalyze}
          disabled={isLoading}
          className="btn-primary"
          style={{ flex: 1 }}
        >
          <FiCpu />
          Analyze with Aime
        </button>
      </div>
      
      {extractedText && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#e8f5e9', borderRadius: '6px' }}>
          <p style={{ fontSize: '0.875rem', color: '#2e7d32' }}>
            ✓ Text extracted successfully ({extractedText.length} characters)
          </p>
        </div>
      )}
    </div>
  )
}