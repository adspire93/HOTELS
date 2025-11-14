'use client';

import { useState, useEffect, useMemo } from 'react';
import { Hotel } from '@/types/hotel';
import StatsCard from '@/components/StatsCard';
import HotelCard from '@/components/HotelCard';
import SearchBar from '@/components/SearchBar';

export default function Dashboard() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState<number>(0);
  const [filterStarSegment, setFilterStarSegment] = useState<string>('all');

  useEffect(() => {
    fetch('/hotels-data.json')
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.error('Error loading hotel data:', err));
  }, []);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const matchesSearch = hotel.hotel_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           hotel.full_address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = filterRating === 0 || hotel.google_rating >= filterRating;
      const matchesStarSegment = filterStarSegment === 'all' || hotel.star_segment === filterStarSegment;

      return matchesSearch && matchesRating && matchesStarSegment;
    });
  }, [hotels, searchTerm, filterRating, filterStarSegment]);

  const stats = useMemo(() => {
    const totalHotels = hotels.length;
    const avgRating = hotels.reduce((sum, hotel) => sum + hotel.google_rating, 0) / totalHotels || 0;
    const hotelsWithEmail = hotels.filter(h => h.primary_email).length;
    const hotelsWithPhone = hotels.filter(h => h.primary_phone).length;
    const avgReviews = hotels.reduce((sum, hotel) => sum + hotel.user_ratings_total, 0) / totalHotels || 0;

    return {
      totalHotels,
      avgRating: avgRating.toFixed(1),
      hotelsWithEmail,
      hotelsWithPhone,
      avgReviews: Math.round(avgReviews),
      filteredCount: filteredHotels.length
    };
  }, [hotels, filteredHotels]);

  const starSegments = useMemo(() => {
    const segments = new Set(hotels.map(h => h.star_segment));
    return Array.from(segments);
  }, [hotels]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Hyderabad Hotels Sales Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">Lead list and contact information for all hotels</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Hotels"
            value={stats.totalHotels}
            icon="🏨"
            color="bg-blue-500"
          />
          <StatsCard
            title="Average Rating"
            value={stats.avgRating}
            icon="⭐"
            color="bg-yellow-500"
            suffix="/5"
          />
          <StatsCard
            title="With Email Contact"
            value={stats.hotelsWithEmail}
            icon="📧"
            color="bg-green-500"
            subtitle={`${((stats.hotelsWithEmail / stats.totalHotels) * 100).toFixed(0)}% coverage`}
          />
          <StatsCard
            title="With Phone Contact"
            value={stats.hotelsWithPhone}
            icon="📞"
            color="bg-purple-500"
            subtitle={`${((stats.hotelsWithPhone / stats.totalHotels) * 100).toFixed(0)}% coverage`}
          />
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">Search Hotels</label>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Minimum Rating</label>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={0}>All Ratings</option>
                <option value={4.5}>4.5+ Stars</option>
                <option value={4.0}>4.0+ Stars</option>
                <option value={3.5}>3.5+ Stars</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Star Segment</label>
              <select
                value={filterStarSegment}
                onChange={(e) => setFilterStarSegment(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Segments</option>
                {starSegments.map(segment => (
                  <option key={segment} value={segment}>{segment}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold text-blue-600">{stats.filteredCount}</span> of {stats.totalHotels} hotels
            </p>
            {(searchTerm || filterRating > 0 || filterStarSegment !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterRating(0);
                  setFilterStarSegment('all');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.google_place_id} hotel={hotel} />
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No hotels found matching your criteria</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-600">
            Hyderabad Hotels Lead List - Sales Dashboard &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
