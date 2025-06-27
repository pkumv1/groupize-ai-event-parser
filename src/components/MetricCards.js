export default function MetricCards({ totals }) {
  const metrics = [
    { label: 'Meeting Rooms', value: totals.meeting_room_rental_total || 0, color: '#3f51b5' },
    { label: 'Sleeping Rooms', value: totals.sleeping_room_total || 0, color: '#f44336' },
    { label: 'Food & Beverage', value: totals.food_beverage_total || 0, color: '#ff9800' },
    { label: 'Audio/Visual', value: totals.audio_visual_total || 0, color: '#9c27b0' },
    { label: 'Service Charge', value: totals.service_charge || 0, color: '#607d8b' },
    { label: 'Grand Total', value: totals.grand_total || 0, color: '#4fb06d' },
  ]

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      {metrics.map((metric, idx) => (
        <div key={idx} className="metric-card">
          <div className="metric-label">{metric.label}</div>
          <div className="metric-value" style={{ color: metric.color }}>
            ${metric.value.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}