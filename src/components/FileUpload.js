import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'

export default function FileUpload({ onFileUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0])
      }
    }
  })

  return (
    <div
      {...getRootProps()}
      className={`file-upload-zone ${isDragActive ? 'active' : ''}`}
    >
      <input {...getInputProps()} />
      <FiUploadCloud size={48} style={{ margin: '0 auto', color: '#4fb06d' }} />
      <p style={{ marginTop: '1rem', fontSize: '1.125rem', fontWeight: 500 }}>
        {isDragActive ? 'Drop your document here' : 'Drag & drop your event document'}
      </p>
      <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>
        or click to browse (PDF or DOCX)
      </p>
    </div>
  )
}