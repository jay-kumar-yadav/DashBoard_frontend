export default function Stats() {
  const stats = [
    {
      title: 'Total Revenues',
      value: '$2,129,430',
      change: '+2.5%',
      icon: '💰',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Transactions',
      value: '1,520',
      change: '+1.7%',
      icon: '💳',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Total Likes',
      value: '9,721',
      change: '+1.4%',
      icon: '❤️',
      bgColor: 'bg-red-100',
    },
    {
      title: 'Total Users',
      value: '3,106',
      change: '+4.2%',
      icon: '👥',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className={`inline-flex items-center justify-center p-3 rounded-md ${stat.bgColor} mb-4`}>
            <span className="text-xl">{stat.icon}</span>
          </div>
          <p className="text-sm text-gray-500">{stat.title}</p>
          <p className="text-2xl font-bold mt-1">{stat.value}</p>
          <div className="mt-4">
            <span className="inline-flex items-center text-sm text-green-600">
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-2">from last week</span>
          </div>
        </div>
      ))}
    </div>
  );
}