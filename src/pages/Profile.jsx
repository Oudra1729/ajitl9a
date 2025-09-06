import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/Common/ItemCard';
import { currentUser, dummyItems } from '../data/dummyData';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posted');

  const userItems = dummyItems.filter(item => item.userId === currentUser.id);
  const lostItems = userItems.filter(item => item.type === 'lost');
  const foundItems = userItems.filter(item => item.type === 'found');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  const handleDeleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // In a real app, you would make an API call to delete the item
      alert('Item deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                {currentUser.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {currentUser.name}
                </h1>
                <p className="text-gray-600 mb-2">{currentUser.email}</p>
                <p className="text-sm text-gray-500">
                  Member since {formatDate(currentUser.joinDate)}
                </p>
              </div>
            </div>
            <button className="btn-secondary">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {userItems.length}
            </div>
            <div className="text-gray-600">Total Posts</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {lostItems.length}
            </div>
            <div className="text-gray-600">Lost Items</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {foundItems.length}
            </div>
            <div className="text-gray-600">Found Items</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('posted')}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'posted'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Posts ({userItems.length})
              </button>
              <button
                onClick={() => setActiveTab('lost')}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'lost'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Lost Items ({lostItems.length})
              </button>
              <button
                onClick={() => setActiveTab('found')}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'found'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Found Items ({foundItems.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'posted' && (
              <div>
                {userItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userItems.map((item) => (
                      <div key={item.id} className="relative">
                        <ItemCard item={item} showType={true} />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button
                            onClick={() => alert('Edit functionality would be implemented here')}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                            title="Edit item"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                            title="Delete item"
                          >
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No posts yet</h3>
                    <p className="text-gray-500 mb-4">
                      You haven't posted any lost or found items yet.
                    </p>
                    <Link to="/post-item" className="btn-primary">
                      Post Your First Item
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'lost' && (
              <div>
                {lostItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lostItems.map((item) => (
                      <div key={item.id} className="relative">
                        <ItemCard item={item} />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button
                            onClick={() => alert('Edit functionality would be implemented here')}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                          >
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">😢</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No lost items</h3>
                    <p className="text-gray-500">
                      You haven't posted any lost items.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'found' && (
              <div>
                {foundItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foundItems.map((item) => (
                      <div key={item.id} className="relative">
                        <ItemCard item={item} />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button
                            onClick={() => alert('Edit functionality would be implemented here')}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                          >
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🕵️</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No found items</h3>
                    <p className="text-gray-500">
                      You haven't posted any found items.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;