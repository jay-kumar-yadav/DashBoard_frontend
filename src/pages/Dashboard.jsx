import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Stats from '../components/Stats';
import TopProducts from '../components/TopProducts';
import NewProfileForm from '../components/NewProfileForm';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showNewProfile, setShowNewProfile] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="container mx-auto px-6">
            {activeTab === 'Dashboard' && (
              <>
                <Stats />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Top products</h3>
                    <TopProducts />
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Current User</h3>
                      <button 
                        onClick={() => setShowNewProfile(true)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        Add New Profile
                      </button>
                    </div>
                    
                    {showNewProfile ? (
                      <NewProfileForm onCancel={() => setShowNewProfile(false)} />
                    ) : (
                      <div className="text-center py-10 text-gray-500">
                        No profile added yet
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            
            {activeTab !== 'Dashboard' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold">{activeTab} Page</h2>
                <p className="mt-2 text-gray-600">This is the {activeTab.toLowerCase()} page content.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}