export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'Dashboard', icon: '📊' },
    { id: 'Transactions', icon: '💳' },
    { id: 'Schedules', icon: '📅' },
    { id: 'Users', icon: '👥' },
    { id: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-2xl font-bold text-indigo-600">Board.</h1>
        </div>
        <div className="mt-8 flex-grow flex flex-col">
          <nav className="flex-1 px-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md w-full text-left ${
                  activeTab === item.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.id}
              </button>
            ))}
          </nav>
          
          <div className="px-4 py-4">
            <div className="text-xs text-gray-500 mb-2">Help</div>
            <div className="text-xs text-gray-500">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}