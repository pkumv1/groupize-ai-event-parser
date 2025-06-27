'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import DataTable from './DataTable'

export default function DataTabs({ data }) {
  if (!data || data.parsing_error) {
    return null
  }

  return (
    <div className="custom-card" style={{ marginBottom: '2rem' }}>
      <Tabs>
        <TabList>
          <Tab>🏢 Event Info</Tab>
          <Tab>🗺️ Meeting Rooms ({data.meeting_rooms?.length || 0})</Tab>
          <Tab>🏨 Sleeping Rooms ({data.sleeping_rooms?.length || 0})</Tab>
          <Tab>🍽️ F&B ({data.food_beverage?.length || 0})</Tab>
          <Tab>🎥 Audio/Visual ({data.audio_visual?.length || 0})</Tab>
          <Tab>💵 Financial Terms</Tab>
        </TabList>

        <TabPanel>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Event Information</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <p><strong>Organization:</strong> {data.event_info?.organization || 'N/A'}</p>
                <p><strong>Event Name:</strong> {data.event_info?.event_name || 'N/A'}</p>
                <p><strong>Venue:</strong> {data.event_info?.venue || 'N/A'}</p>
              </div>
              <div>
                <p><strong>Customer:</strong> {data.event_info?.customer || 'N/A'}</p>
                <p><strong>Contact:</strong> {data.event_info?.contact_person || 'N/A'}</p>
                <p><strong>Dates:</strong> {data.event_info?.event_dates || 'N/A'}</p>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <DataTable
            data={data.meeting_rooms || []}
            columns={[
              { key: 'date', label: 'Date' },
              { key: 'time', label: 'Time' },
              { key: 'function', label: 'Function' },
              { key: 'location', label: 'Location' },
              { key: 'capacity', label: 'Capacity' },
              { key: 'room_rental', label: 'Rental', format: 'currency' }
            ]}
          />
        </TabPanel>

        <TabPanel>
          <DataTable
            data={data.sleeping_rooms || []}
            columns={[
              { key: 'check_in_date', label: 'Check In' },
              { key: 'check_out_date', label: 'Check Out' },
              { key: 'room_type', label: 'Room Type' },
              { key: 'number_of_rooms', label: 'Rooms' },
              { key: 'nightly_rate', label: 'Rate', format: 'currency' },
              { key: 'total_room_cost', label: 'Total', format: 'currency' }
            ]}
          />
        </TabPanel>

        <TabPanel>
          <DataTable
            data={data.food_beverage || []}
            columns={[
              { key: 'date', label: 'Date' },
              { key: 'time', label: 'Time' },
              { key: 'product_name', label: 'Item' },
              { key: 'attendees', label: 'Attendees' },
              { key: 'per_person_cost', label: 'Per Person', format: 'currency' },
              { key: 'total_cost', label: 'Total', format: 'currency' }
            ]}
          />
        </TabPanel>

        <TabPanel>
          <DataTable
            data={data.audio_visual || []}
            columns={[
              { key: 'date', label: 'Date' },
              { key: 'equipment_name', label: 'Equipment' },
              { key: 'quantity', label: 'Qty' },
              { key: 'unit_cost', label: 'Unit Cost', format: 'currency' },
              { key: 'total_cost', label: 'Total', format: 'currency' },
              { key: 'location', label: 'Location' }
            ]}
          />
        </TabPanel>

        <TabPanel>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Financial Terms</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <p><strong>Tax Rate:</strong> {data.financial_terms?.tax_rate || 0}%</p>
                <p><strong>Service Charge:</strong> {data.financial_terms?.service_charge_rate || 0}%</p>
                <p><strong>VAT Rate:</strong> {data.financial_terms?.vat_rate || 0}%</p>
              </div>
              <div>
                <p><strong>F&B Minimum:</strong> ${data.financial_terms?.food_beverage_minimum || 0}</p>
                <p><strong>Currency:</strong> {data.financial_terms?.currency || 'USD'}</p>
                <p><strong>VAT Applicable:</strong> {data.vat_details?.vat_applicable ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}