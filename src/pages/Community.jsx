import React, { useState, useRef } from 'react';
import { Zap, MessageSquare, Share2, Award, Globe, Image as ImageIcon, Send } from 'lucide-react';
import './Community.css';

const Community = () => {
  const fileInputRef = useRef(null);
  const [newPostText, setNewPostText] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  // Initial Feed Data
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "milestone",
      author: "InviteL System",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=system",
      time: "10 mins ago",
      content: "🚀 Marcus V. just reached LUMINARY AMBASSADOR rank! They have recruited 15 Nodes and saved the NGO ₹6,750 in Ad-Spend. Give them a boost!",
      boosts: 24,
      comments: 5
    },
    {
      id: 2,
      type: "user-post",
      author: "Elena Fisher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      time: "1 hour ago",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      content: "Didn't have the budget to donate this week, so I took the 'Local Impact' route! Gathered 3 bags of winter clothes from my neighborhood and dropped them off at the downtown shelter. Every little bit counts! 🧥❄️",
      boosts: 156,
      comments: 22
    },
    {
      id: 3,
      type: "update",
      author: "Reforest The Future",
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=tree",
      time: "3 hours ago",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      content: "MISSION ACCOMPLISHED: 5,000 new saplings planted today! 🌲 Because you shared your referral links, we saved ₹45,000 in marketing costs this month and put that money straight into the soil.",
      boosts: 212,
      comments: 34
    }
  ]);

  // Handle Image Selection for New Post
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  // Submit New Post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim() && !previewImage) return;

    const newPost = {
      id: Date.now(),
      type: "user-post",
      author: "Marcus V. (You)", // Simulating current user
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      time: "Just now",
      content: newPostText,
      image: previewImage,
      boosts: 0,
      comments: 0
    };

    setPosts([newPost, ...posts]); // Add to top of feed
    setNewPostText(""); // Clear input
    setPreviewImage(null); // Clear image preview
  };

  const handleBoost = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) return { ...post, boosts: post.boosts + 1 };
      return post;
    }));
  };

  return (
    <div className="community-wrapper">
      <div className="community-header">
        <h1>THE TRANSMISSION</h1>
        <p>Live network updates, mission proofs, and grassroots initiatives.</p>
      </div>

      {/* CREATE POST BOX */}
      <div className="create-post-card">
        <div className="create-post-header">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" alt="You" className="create-avatar" />
          <h3>Broadcast Your Impact</h3>
        </div>
        
        <form onSubmit={handlePostSubmit}>
          <textarea 
            className="post-input" 
            placeholder="Did you help out locally today? Share your grassroots mission here..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          ></textarea>

          {/* Image Preview Area */}
          {previewImage && (
            <div className="preview-image-container">
              <img src={previewImage} alt="Preview" />
              <button type="button" className="remove-image-btn" onClick={() => setPreviewImage(null)}>✕</button>
            </div>
          )}

          <div className="create-actions">
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleImageChange}
            />
            <button 
              type="button" 
              className="attach-btn" 
              onClick={() => fileInputRef.current.click()}
            >
              <ImageIcon size={20} /> ATTACH PROOF
            </button>
            
            <button type="submit" className="submit-post-btn" disabled={!newPostText.trim() && !previewImage}>
              <Send size={18} /> TRANSMIT
            </button>
          </div>
        </form>
      </div>

      {/* THE FEED */}
      <div className="feed-container">
        {posts.map((post) => (
          <div key={post.id} className={`post-card ${post.type === 'milestone' ? 'milestone-card' : ''}`}>
            <div className="post-header">
              <div className="post-avatar">
                <img src={post.avatar} alt="Avatar" />
              </div>
              <div className="post-meta">
                <h3>{post.author}</h3>
                <span>{post.time}</span>
              </div>
              {post.type === 'milestone' ? <Award className="milestone-icon" /> : <Globe className="update-icon" />}
            </div>

            <div className="post-body">
              <p>{post.content}</p>
              {post.image && (
                <div className="post-image-wrapper">
                  <img src={post.image} alt="Impact Update" />
                </div>
              )}
            </div>

            <div className="post-actions">
              <button className="action-btn boost-btn" onClick={() => handleBoost(post.id)}>
                <Zap size={18} /> {post.boosts} BOOSTS
              </button>
              <button className="action-btn outline-btn">
                <MessageSquare size={18} /> {post.comments}
              </button>
              <button className="action-btn outline-btn share-btn">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;