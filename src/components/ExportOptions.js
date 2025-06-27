import { FiDownload } from 'react-icons/fi'

export default function ExportOptions({ onDownloadJSON, parsedData }) {
  if (!parsedData || parsedData.parsing_error) {
    return null
  }

  return (
    <div className="custom-card">
      <h3 className="section-header">📥 Export Options</h3>
      <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
        Download the extracted data in various formats for use in other systems
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={onDownloadJSON} className="btn-primary">
          <FiDownload />
          Download JSON
        </button>
        <button className="btn-secondary" disabled>
          <FiDownload />
          Download CSV (Coming Soon)
        </button>
      </div>
    </div>
  )
}