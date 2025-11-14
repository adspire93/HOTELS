import { Hotel } from '@/types/hotel';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5">
        <h3 className="text-xl font-bold text-white mb-2">{hotel.hotel_name}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
            <span className="text-yellow-300 mr-1">⭐</span>
            <span className="text-white font-semibold">{hotel.google_rating}</span>
          </div>
          <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
            <span className="text-white text-sm">{hotel.user_ratings_total.toLocaleString()} reviews</span>
          </div>
          {hotel.star_segment && (
            <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium">{hotel.star_segment}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="mb-4">
          <div className="flex items-start gap-2">
            <span className="text-slate-400 mt-1">📍</span>
            <div>
              <p className="text-sm text-slate-600">{hotel.full_address}</p>
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${hotel.google_place_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline mt-1 inline-block"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 border-t border-slate-200 pt-4">
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Contact Information</h4>

          {/* Primary Phone */}
          {hotel.primary_phone && (
            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <div>
                  <p className="text-xs text-slate-500">Primary Phone</p>
                  <a
                    href={`tel:${hotel.primary_phone}`}
                    className="text-sm font-medium text-slate-900 hover:text-blue-600"
                  >
                    {hotel.primary_phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(hotel.primary_phone, 'Phone number')}
                className="text-blue-600 hover:text-blue-800 text-xs font-medium"
              >
                Copy
              </button>
            </div>
          )}

          {/* Alternate Phones */}
          {hotel.alternate_phones && (
            <div className="flex items-start justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <span className="text-lg mt-0.5">📱</span>
                <div>
                  <p className="text-xs text-slate-500">Alternate Phones</p>
                  <p className="text-xs text-slate-700">{hotel.alternate_phones}</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(hotel.alternate_phones || '', 'Alternate phones')}
                className="text-blue-600 hover:text-blue-800 text-xs font-medium"
              >
                Copy
              </button>
            </div>
          )}

          {/* Primary Email */}
          {hotel.primary_email && (
            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📧</span>
                <div>
                  <p className="text-xs text-slate-500">Primary Email</p>
                  <a
                    href={`mailto:${hotel.primary_email}`}
                    className="text-sm font-medium text-slate-900 hover:text-blue-600 break-all"
                  >
                    {hotel.primary_email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(hotel.primary_email, 'Email')}
                className="text-blue-600 hover:text-blue-800 text-xs font-medium whitespace-nowrap"
              >
                Copy
              </button>
            </div>
          )}

          {/* Alternate Emails */}
          {hotel.alternate_emails && (
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-lg mt-0.5">✉️</span>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1">Alternate Emails</p>
                  <p className="text-xs text-slate-700 break-all">{hotel.alternate_emails}</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(hotel.alternate_emails, 'Alternate emails')}
                className="text-blue-600 hover:text-blue-800 text-xs font-medium w-full text-right"
              >
                Copy All
              </button>
            </div>
          )}

          {/* Travel Desk */}
          {(hotel.travel_desk_phone || hotel.travel_desk_email) && (
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <h5 className="text-xs font-semibold text-green-900 mb-2 flex items-center gap-1">
                <span>✈️</span> Travel Desk
              </h5>
              {hotel.travel_desk_phone && (
                <p className="text-xs text-green-800 mb-1">📞 {hotel.travel_desk_phone}</p>
              )}
              {hotel.travel_desk_email && (
                <p className="text-xs text-green-800">📧 {hotel.travel_desk_email}</p>
              )}
            </div>
          )}

          {/* Website */}
          {hotel.website && (
            <div className="flex items-center gap-2">
              <span className="text-lg">🌐</span>
              <a
                href={hotel.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline truncate"
              >
                Visit Website →
              </a>
            </div>
          )}

          {/* Notes */}
          {hotel.notes && (
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-xs text-amber-900">
                <span className="font-semibold">Note:</span> {hotel.notes}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-200">
        <div className="flex gap-2">
          <button
            onClick={() => {
              const contactInfo = `
Hotel: ${hotel.hotel_name}
Phone: ${hotel.primary_phone}
Email: ${hotel.primary_email}
Address: ${hotel.full_address}
Website: ${hotel.website}
              `.trim();
              copyToClipboard(contactInfo, 'Contact information');
            }}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Copy All Contact Info
          </button>
          <a
            href={`mailto:${hotel.primary_email}?subject=Partnership Inquiry - ${hotel.hotel_name}`}
            className="flex-1 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-300 transition-colors text-center"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
