import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          {currentUser && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {currentUser.name?.charAt(0) || 'U'}
              </div>
              <span className="text-sm text-gray-700">{currentUser.name}</span>
            </div>
          )}
          
          <button
            onClick={logout}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}