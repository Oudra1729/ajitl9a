import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/Common/SearchBar';
import ItemCard from '../components/Common/ItemCard';
import { dummyItems } from '../data/dummyData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // In a real app, you would navigate to search results or filter items
    console.log('Searching for:', query);
  };

  const recentItems = dummyItems.slice(0, 6); // Show 6 most recent items

  const stats = [
    { label: 'Items Found', value: '2,847', color: 'text-green-600' },
    { label: 'Happy Reunions', value: '1,923', color: 'text-blue-600' },
    { label: 'Active Users', value: '5,482', color: 'text-purple-600' },
    { label: 'Cities Covered', value: '156', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Lost Something?
              <span className="block text-yellow-400">We'll Help You Find It!</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join our community-driven platform to reunite lost items with their owners. 
              Post what you've lost, found, or help others find their belongings.
            </p>
            
            {/* Search Bar */}
            <div className="mb-8">
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Search for lost or found items..."
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/post-item"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                Post Lost/Found Item
              </Link>
              <Link
                to="/lost-items"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                Browse Lost Items
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Making a Difference Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform has successfully reunited thousands of lost items with their owners
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Posts
            </h2>
            <p className="text-lg text-gray-600">
              Latest lost and found items from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentItems.map((item) => (
              <ItemCard key={item.id} item={item} showType={true} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/lost-items"
              className="btn-primary inline-flex items-center"
            >
              View All Items
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Three simple steps to reunite with your belongings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post Your Item
              </h3>
              <p className="text-gray-600">
                Create a detailed post with photos and description of your lost or found item
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search & Match
              </h3>
              <p className="text-gray-600">
                Browse through posts or use our search feature to find matching items
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect & Reunite
              </h3>
              <p className="text-gray-600">
                Contact the item owner through our platform and arrange a safe meetup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;