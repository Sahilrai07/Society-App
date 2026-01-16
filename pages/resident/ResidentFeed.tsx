
import React from 'react';

const ResidentFeed: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const posts = [
    {
      id: '1',
      user: 'Priya Patel',
      flat: 'A-101',
      time: '2h ago',
      content: 'Lost my house keys near the swimming pool area. If anyone finds them, please let me know!',
      type: 'Help',
      likes: 12,
      comments: 4,
      avatar: 'https://i.pravatar.cc/100?img=20'
    },
    {
      id: '2',
      user: 'Rahul V.',
      flat: 'D-405',
      time: '5h ago',
      content: 'Any recommendations for a good local internet provider? Current one is quite laggy today.',
      type: 'General',
      likes: 8,
      comments: 15,
      avatar: 'https://i.pravatar.cc/100?img=15'
    },
    {
      id: '3',
      user: 'Committee Office',
      flat: 'Admin',
      time: '1d ago',
      content: 'Thank you everyone who attended the Diwali Gala! Photos will be up in the gallery soon.',
      type: 'Announcement',
      likes: 84,
      comments: 2,
      avatar: 'https://i.pravatar.cc/100?img=11'
    }
  ];

  return (
    <div className="animate-in slide-in-from-right duration-300 min-h-screen bg-slate-50">
      <header className="p-6 bg-white border-b border-slate-100 sticky top-0 z-40 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center active:scale-90 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Society Feed</h1>
        </div>
        <button className="size-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
          <span className="material-symbols-outlined">add_comment</span>
        </button>
      </header>

      <div className="p-5 space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-200 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={post.avatar} className="size-10 rounded-2xl object-cover" alt={post.user} />
                <div>
                  <h4 className="text-sm font-black text-slate-900">{post.user}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.flat} • {post.time}</p>
                </div>
              </div>
              <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-lg ${
                post.type === 'Announcement' ? 'bg-purple-100 text-purple-600' : 
                post.type === 'Help' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
              }`}>{post.type}</span>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed font-medium">{post.content}</p>
            
            <div className="flex items-center gap-4 pt-2 border-t border-slate-50">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="material-symbols-outlined text-lg">favorite</span>
                <span className="text-xs font-black">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="material-symbols-outlined text-lg">chat_bubble</span>
                <span className="text-xs font-black">{post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentFeed;
